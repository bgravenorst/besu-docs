#!/usr/bin/env node
/**
 * Pre-build script: download and unpack Plugin API Javadoc so Docusaurus
 * serves it from /plugins/reference/plugin-api/.
 *
 * The Besu version comes from customFields.besuVersion in docusaurus.config.js.
 * Output lands in static/plugins/reference/plugin-api/ (gitignored).
 *
 * From Besu 26.8.0 the Plugin API is split across Maven artifacts. Package
 * names are unchanged, so class pages still use the same HTML paths. This
 * script downloads besu-plugin-api plus each feature artifact, unpacks them
 * into one tree, and merges the shared index pages. Feature jars that are
 * not published for the selected version (HTTP 404) are skipped, so a
 * pre-split version still unpacks the single aggregator jar.
 *
 * Run:  node scripts/fetch-plugin-api-docs.mjs
 *       node scripts/fetch-plugin-api-docs.mjs --force
 */

import {
  createWriteStream,
  existsSync,
  mkdirSync,
  mkdtempSync,
  readdirSync,
  readFileSync,
  rmSync,
  writeFileSync,
} from "fs";
import { tmpdir } from "os";
import { pipeline } from "stream/promises";
import { createRequire } from "module";
import { join, dirname, relative } from "path";
import { fileURLToPath } from "url";
import { get } from "https";
import { Open } from "unzipper";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const STATIC_DIR = join(ROOT, "static", "plugins", "reference", "plugin-api");
const SENTINEL = join(STATIC_DIR, ".fetched-version");
const FORCE = process.argv.includes("--force");
const MAVEN_REPO =
  "https://hyperledger.jfrog.io/artifactory/besu-maven/org/hyperledger/besu";

// Core is first so shared shell pages (index.html, stylesheet) come from a
// full module. The aggregator is last and still contributes types that were
// not moved, such as BesuEvents.
const ARTIFACTS = [
  "besu-plugin-api-core",
  "besu-plugin-api-metrics",
  "besu-plugin-api-security",
  "besu-plugin-api-permissioning",
  "besu-plugin-api-storage",
  "besu-plugin-api-p2p",
  "besu-plugin-api-txpool",
  "besu-plugin-api-sync",
  "besu-plugin-api-rpc",
  "besu-plugin-api-chain",
  "besu-plugin-api-worldstate",
  "besu-plugin-api-worldstate-backend",
  "besu-plugin-api-execution",
  "besu-plugin-api-blockproduction",
  "besu-plugin-api-validation",
  "besu-plugin-api",
];

const SEARCH_INDEXES = [
  ["typeSearchIndex", "type-search-index.js"],
  ["memberSearchIndex", "member-search-index.js"],
  ["packageSearchIndex", "package-search-index.js"],
  ["tagSearchIndex", "tag-search-index.js"],
  ["moduleSearchIndex", "module-search-index.js"],
];

const requireConfig = createRequire(import.meta.url);
const { customFields } = requireConfig(join(ROOT, "docusaurus.config.js"));
const VERSION = customFields?.besuVersion;
if (!VERSION) {
  console.error(
    "fetch-plugin-api-docs: customFields.besuVersion not set in docusaurus.config.js"
  );
  process.exit(1);
}

const sentinelBody = `${VERSION}\n${ARTIFACTS.join("\n")}\n`;
if (!FORCE && existsSync(SENTINEL) && readFileSync(SENTINEL, "utf8") === sentinelBody) {
  console.log(
    `fetch-plugin-api-docs: Plugin API docs for v${VERSION} already present in static/plugins/reference/plugin-api/, skipping download. Use --force to re-download.`
  );
  process.exit(0);
}

function jarUrl(artifact) {
  return `${MAVEN_REPO}/${artifact}/${VERSION}/${artifact}-${VERSION}-javadoc.jar`;
}

function fetchFollowRedirects(url, redirectsLeft = 5) {
  return new Promise((resolve, reject) => {
    if (redirectsLeft === 0) {
      reject(new Error("Too many redirects"));
      return;
    }
    get(url, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        res.resume();
        resolve(fetchFollowRedirects(res.headers.location, redirectsLeft - 1));
        return;
      }
      resolve(res);
    }).on("error", reject);
  });
}

async function extractJar(jarPath, dest) {
  mkdirSync(dest, { recursive: true });
  const directory = await Open.file(jarPath);
  for (const file of directory.files) {
    if (file.path.includes("..")) continue;
    const target = join(dest, file.path);
    if (file.type === "Directory" || file.path.endsWith("/")) {
      mkdirSync(target, { recursive: true });
      continue;
    }
    mkdirSync(dirname(target), { recursive: true });
    writeFileSync(target, await file.buffer());
  }
}

async function downloadJar(artifact, dest) {
  const url = jarUrl(artifact);
  const res = await fetchFollowRedirects(url);
  if (res.statusCode === 404) {
    res.resume();
    return false;
  }
  if (res.statusCode !== 200) {
    res.resume();
    throw new Error(
      `HTTP ${res.statusCode} fetching ${url}. ` +
        `Check that besuVersion "${VERSION}" exists in the Maven repo.`
    );
  }
  await pipeline(res, createWriteStream(dest));
  return true;
}

function walkFiles(dir) {
  const files = [];
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...walkFiles(full));
    } else {
      files.push(full);
    }
  }
  return files;
}

function copyMissing(src, dest) {
  for (const file of walkFiles(src)) {
    const target = join(dest, relative(src, file));
    if (existsSync(target)) continue;
    mkdirSync(dirname(target), { recursive: true });
    writeFileSync(target, readFileSync(file));
  }
}

function readSearchIndex(file, varName) {
  if (!existsSync(file)) return [];
  const text = readFileSync(file, "utf8").trim();
  const prefix = `${varName} = `;
  if (!text.startsWith(prefix)) return [];
  const json = text.slice(prefix.length).replace(/;updateSearchResults\(\);\s*$/, "");
  return JSON.parse(json);
}

function searchKey(entry) {
  return [entry.p, entry.c, entry.l, entry.u].filter(Boolean).join("\0");
}

function mergeSearchIndexes(extractedDirs) {
  for (const [varName, fileName] of SEARCH_INDEXES) {
    const merged = [];
    const seen = new Set();
    for (const dir of extractedDirs) {
      for (const entry of readSearchIndex(join(dir, fileName), varName)) {
        const key = searchKey(entry);
        if (seen.has(key)) continue;
        seen.add(key);
        merged.push(entry);
      }
    }
    if (merged.length === 0) continue;
    writeFileSync(
      join(STATIC_DIR, fileName),
      `${varName} = ${JSON.stringify(merged)};updateSearchResults();\n`
    );
  }
}

function extractRows(html, pattern) {
  pattern.lastIndex = 0;
  return html.match(pattern) || [];
}

function hrefOf(row) {
  const match = row.match(/href="([^"]+)"/);
  return match ? match[1] : row;
}

function recolor(row, index) {
  const color = index % 2 === 0 ? "even-row-color" : "odd-row-color";
  return row.replace(/\b(?:even|odd)-row-color\b/g, color);
}

function mergeRows(html, rows, pattern) {
  if (rows.length === 0) return html;
  pattern.lastIndex = 0;
  let inserted = false;
  return html.replace(pattern, () => {
    if (inserted) return "";
    inserted = true;
    return rows.map(recolor).join("\n");
  });
}

const ALL_CLASSES_ROW =
  /<div class="col-first [^"]*all-classes-table[^"]*">[\s\S]*?<\/div>\s*<div class="col-last [^"]*all-classes-table[^"]*">[\s\S]*?<\/div>\s*<\/div>/g;

const PACKAGE_ROW =
  /<div class="col-first [^"]*"><a href="[^"]*package-summary\.html"[\s\S]*?<\/div>\s*<div class="col-last [^"]*">[\s\S]*?<\/div>/g;

const CLASS_SUMMARY_ROW =
  /<div class="col-first [^"]*class-summary[^"]*">[\s\S]*?<\/div>\s*<div class="col-last [^"]*class-summary[^"]*">[\s\S]*?<\/div>\s*<\/div>/g;

function mergeHtmlIndexes(extractedDirs) {
  const allClasses = [];
  const packages = [];
  const seenClasses = new Set();
  const seenPackages = new Set();
  let classSkeleton = null;
  let packageSkeleton = null;

  for (const dir of extractedDirs) {
    const allClassesFile = join(dir, "allclasses-index.html");
    const packagesFile = join(dir, "allpackages-index.html");
    if (existsSync(allClassesFile)) {
      const html = readFileSync(allClassesFile, "utf8");
      classSkeleton ??= html;
      for (const row of extractRows(html, ALL_CLASSES_ROW)) {
        const href = hrefOf(row);
        if (seenClasses.has(href)) continue;
        seenClasses.add(href);
        allClasses.push(row);
      }
    }
    if (existsSync(packagesFile)) {
      const html = readFileSync(packagesFile, "utf8");
      packageSkeleton ??= html;
      for (const row of extractRows(html, PACKAGE_ROW)) {
        const href = hrefOf(row);
        if (seenPackages.has(href)) continue;
        seenPackages.add(href);
        packages.push(row);
      }
    }
  }

  if (classSkeleton) {
    writeFileSync(
      join(STATIC_DIR, "allclasses-index.html"),
      mergeRows(classSkeleton, allClasses, ALL_CLASSES_ROW)
    );
  }
  if (packageSkeleton) {
    writeFileSync(
      join(STATIC_DIR, "allpackages-index.html"),
      mergeRows(packageSkeleton, packages, PACKAGE_ROW)
    );
  }

  const summaries = new Map();
  for (const dir of extractedDirs) {
    for (const file of walkFiles(dir)) {
      if (!file.endsWith("package-summary.html")) continue;
      const rel = relative(dir, file);
      const html = readFileSync(file, "utf8");
      const bucket = summaries.get(rel) || [];
      bucket.push(html);
      summaries.set(rel, bucket);
    }
  }

  for (const [rel, pages] of summaries) {
    if (pages.length < 2) continue;
    const rows = [];
    const seen = new Set();
    for (const html of pages) {
      for (const row of extractRows(html, CLASS_SUMMARY_ROW)) {
        const href = hrefOf(row);
        if (seen.has(href)) continue;
        seen.add(href);
        rows.push(row);
      }
    }
    const target = join(STATIC_DIR, rel);
    if (!existsSync(target) || rows.length === 0) continue;
    writeFileSync(target, mergeRows(readFileSync(target, "utf8"), rows, CLASS_SUMMARY_ROW));
  }

  const elements = new Set();
  for (const dir of extractedDirs) {
    const elementList = join(dir, "element-list");
    if (!existsSync(elementList)) continue;
    for (const line of readFileSync(elementList, "utf8").split("\n")) {
      if (line.trim()) elements.add(line.trim());
    }
  }
  if (elements.size > 0) {
    writeFileSync(join(STATIC_DIR, "element-list"), `${[...elements].sort().join("\n")}\n`);
  }
}

function patchRootBaseHref() {
  const rootHtml = readdirSync(STATIC_DIR).filter((file) => file.endsWith(".html"));
  let patched = 0;
  for (const file of rootHtml) {
    const filePath = join(STATIC_DIR, file);
    const original = readFileSync(filePath, "utf8");
    if (original.includes("<base ")) continue;
    const updated = original.replace(
      "<head>",
      '<head>\n<base href="/plugins/reference/plugin-api/">'
    );
    writeFileSync(filePath, updated, "utf8");
    patched++;
  }
  console.log(
    `fetch-plugin-api-docs: Patched ${patched} root HTML files with <base href="/plugins/reference/plugin-api/">`
  );
}

const workDir = mkdtempSync(join(tmpdir(), "besu-plugin-api-javadoc-"));

try {
  if (existsSync(STATIC_DIR)) {
    rmSync(STATIC_DIR, { recursive: true, force: true });
  }
  mkdirSync(STATIC_DIR, { recursive: true });

  const extractedDirs = [];
  for (const artifact of ARTIFACTS) {
    const jarPath = join(workDir, `${artifact}.jar`);
    const extracted = join(workDir, artifact);
    console.log(`fetch-plugin-api-docs: Downloading ${artifact} v${VERSION}...`);
    const found = await downloadJar(artifact, jarPath);
    if (!found) {
      if (artifact === "besu-plugin-api") {
        throw new Error(
          `besu-plugin-api ${VERSION} Javadoc was not found. ` +
            `Check that besuVersion "${VERSION}" exists in the Maven repo.`
        );
      }
      console.log(
        `fetch-plugin-api-docs: ${artifact} ${VERSION} is not published; skipping.`
      );
      continue;
    }
    await extractJar(jarPath, extracted);
    copyMissing(extracted, STATIC_DIR);
    extractedDirs.push(extracted);
    console.log(`fetch-plugin-api-docs: Unpacked ${artifact}.`);
  }

  mergeSearchIndexes(extractedDirs);
  mergeHtmlIndexes(extractedDirs);
  patchRootBaseHref();
  writeFileSync(SENTINEL, sentinelBody);
  console.log(
    `fetch-plugin-api-docs: Published Plugin API Javadoc v${VERSION} (${extractedDirs.length} artifacts) to static/plugins/reference/plugin-api/`
  );
} catch (err) {
  rmSync(STATIC_DIR, { recursive: true, force: true });
  console.error(`fetch-plugin-api-docs: Failed — ${err.message}`);
  process.exit(1);
} finally {
  rmSync(workDir, { recursive: true, force: true });
}
