const lightCodeTheme = require("prism-react-renderer").themes.github;
const darkCodeTheme = require("prism-react-renderer").themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Besu documentation",
  url: "https://besu.hyperledger.org",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "throw",
  favicon: "img/favicon.svg",
  trailingSlash: false,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "hyperledger", // Usually your GitHub org/user name.
  projectName: "besu-docs", // Usually your repo name.
  deploymentBranch: "gh-pages", // Github Pages deploying branch

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  markdown: {
    mermaid: true,
  },

  presets: [
    [
      "classic",
      {
        docs: {
          breadcrumbs: false,
          sidebarPath: require.resolve("./sidebars.js"),
          // Set a base path separate from default /docs
          editUrl: "https://github.com/hyperledger/besu-docs/tree/main/",
          path: "./docs",
          routeBasePath: "/",
          // @ts-ignore
          // eslint-disable-next-line global-require
          include: ["**/*.md", "**/*.mdx"],
          exclude: [
            "**/_*.{js,jsx,ts,tsx,md,mdx}",
            "**/_*/**",
            "**/*.test.{js,jsx,ts,tsx}",
            "**/__tests__/**",
          ],
          showLastUpdateAuthor: false,
          showLastUpdateTime: true,
          includeCurrentVersion: true,
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // announcementBar: {
      //   id: "announcement_bar",
      //   content: "⛔️ This documentation site is still under construction! 🚧",
      //   backgroundColor: "#fafbfc",
      //   textColor: "#091E42",
      //   isCloseable: false,
      // },
      colorMode: {
        defaultMode: "light",
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 5,
      },
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: true,
        },
      },
      navbar: {
        logo: {
          alt: "Besu",
          src: "img/logo-reversed.svg",
          srcDark: "img/logo-reversed.svg",
          width: 100,
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "publicDocSidebar",
            docId: "index",
            position: "left",
            label: "Public networks",
          },
          {
            type: "docSidebar",
            sidebarId: "privateDocSidebar",
            docId: "index",
            position: "left",
            label: "Private networks",
          },
          {
            href: "/public-networks/chatbot",
            className: "header-chatbot-link",
            position: "right",
          },
          {
            href: "https://github.com/hyperledger/besu/",
            className: "header-github-link",
            position: "right",
          },
          {
            href: "https://discord.gg/hyperledger",
            className: "header-discord-link",
            position: "right",
          },
          {
            href: "https://twitter.com/HyperledgerBesu",
            className: "header-twitter-link",
            position: "right",
          },
        ],
      },
      footer: {
        copyright:
          "Besu and its documentation are licensed under the Apache 2.0 license.",
        logo: {
          alt: "Besu logo",
          src: "img/logo.svg",
          srcDark: "img/logo-reversed.svg",
          href: "https://www.hyperledger.org/use/besu",
          width: 250,
        },
        links: [
          {
            title: "Public networks",
            items: [
              {
                label: "Introduction",
                to: "/public-networks",
              },
              {
                label: "How to guides",
                to: "/public-networks/how-to",
              },
              {
                label: "Concepts",
                to: "/public-networks/concepts",
              },
              {
                label: "Tutorials",
                to: "/public-networks/tutorials",
              },
              {
                label: "Reference",
                to: "/public-networks/reference",
              },
            ],
          },
          {
            title: "Private networks",
            items: [
              {
                label: "Introduction",
                to: "/private-networks",
              },
              {
                label: "How to guides",
                to: "/private-networks/how-to",
              },
              {
                label: "Concepts",
                to: "/private-networks/concepts",
              },
              {
                label: "Tutorials",
                to: "/private-networks/tutorials",
              },
              {
                label: "Reference",
                to: "/private-networks/reference",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Discord",
                href: "https://discord.gg/hyperledger",
              },
              {
                label: "Besu Wiki",
                href: "https://lf-hyperledger.atlassian.net/wiki/spaces/BESU/overview",
              },
              {
                label: "Besu Twitter",
                href: "https://twitter.com/HyperledgerBesu",
              },
              {
                label: "Besu GitHub",
                href: "https://github.com/hyperledger/besu/",
              },
              {
                label: "Besu documentation GitHub",
                href: "https://github.com/hyperledger/besu-docs",
              },
            ],
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ["solidity", "toml", "java", "bash"],
      },
      mermaid: {
        options: {
          fontFamily: "arial, verdana, sans-serif;",
          wrap: true,
          sequence: {
            diagramMarginX: 25,
            diagramMarginY: 25,
          },
          flowchart: {
            diagramPadding: 5,
            nodeSpacing: 75,
          },
        },
      },
      languageTabs: [
        {
          highlight: "bash",
          language: "curl",
          logoClass: "bash",
        },
        {
          highlight: "python",
          language: "python",
          logoClass: "python",
        },
        {
          highlight: "go",
          language: "go",
          logoClass: "go",
        },
        {
          highlight: "javascript",
          language: "nodejs",
          logoClass: "nodejs",
        },
      ],
    }),
  plugins: [
    [
      "@docusaurus/plugin-google-gtag",
      {
        trackingID: "G-KD07N5GM2B",
        anonymizeIP: true,
      },
    ],
    [
      "@docusaurus/plugin-google-tag-manager",
      {
        containerId: "GTM-THG37T4",
      },
    ],
    [
      "@docusaurus/plugin-client-redirects",
      {
        redirects: [
          {
            from: "/en/stable/",
            to: "/",
          },
          {
            from: "/public-networks/concepts/the-merge",
            to: "/public-networks/concepts/node-clients",
          },
          {
            from: ["/public-networks/how-to/configuration-file", "/public-networks/how-to/use-configuration-file"],
            to: "/public-networks/how-to/configure-besu",
          },
          {
            from: ["/private-networks/tutorials/permissioning/onchain", "/private-networks/tutorials/permissioning/upgrade-contracts", "/private-networks/how-to/use-permissioning/onchain", "/private-networks/concepts/permissioning/onchain"],
            to: "/private-networks/concepts/permissioning",
          },
          {
            from: "/private-networks/how-to/use-permissioning/local",
            to: "/private-networks/how-to/use-local-permissioning",
          },
          {
            from: ["/private-networks/how-to/use-privacy/eea-compliant", "/private-networks/how-to/use-privacy/besu-extended", "/private-networks/how-to/use-privacy/tessera", "/private-networks/how-to/use-privacy/privacy-groups", "/private-networks/how-to/use-privacy/flexible", "/private-networks/how-to/use-privacy/access-private-transactions", "/private-networks/how-to/use-privacy/sign-pmts", "/private-networks/how-to/use-privacy/web3js-quorum", "/private-networks/how-to/use-privacy/performance-best-practices", "/private-networks/concepts/privacy", "/private-networks/concepts/privacy/private-transactions", "/private-networks/concepts/privacy/private-transactions/processing", "/private-networks/concepts/privacy/privacy-groups", "/private-networks/concepts/privacy/flexible-privacy", "/private-networks/concepts/privacy/multi-tenancy", "/private-networks/concepts/privacy/plugin"],
            to: "/private-networks",
          },
          {
            from: "/private-networks/how-to/monitor/quorum-hibernate",
            to: "/private-networks/how-to/monitor",
          },
          {
            from: ["/private-networks/tutorials/privacy", "/private-networks/tutorials/privacy/multi-tenancy", "/private-networks/tutorials/privacy/web3js-quorum","/private-networks/tutorials/privacy/quickstart"],
            to: "/private-networks/tutorials",
          },
          {
            from: "/private-networks/tutorials/kubernetes/nat-manager",
            to: "/private-networks/tutorials/kubernetes",
          },
          {
            from: ["/private-networks/how-to/configure/tls/client-and-server", "/private-networks/concepts/pki", "/private-networks/how-to/configure/tls/p2p"],
            to: "/private-networks/how-to/configure/tls",
          },
          {
            from: ["/private-networks/how-to/send-transactions/private-transactions", "/private-networks/how-to/send-transactions/concurrent-private-transactions"],
            to: "/public-networks/how-to/send-transactions",
          },
          {
            from: "/private-networks/concepts/plugins",
            to: "/public-networks/concepts/plugins",
          },
          {
            from: "/private-networks/reference/plugin-api-interfaces",
            to: "/public-networks/reference/plugin-api-interfaces",
          },
          {
            from: "/private-networks/reference/api/objects",
            to: "/public-networks/reference/api",
          }
        ],
        createRedirects(existingPath) {
          if (existingPath.includes("/public-networks")) {
            return [
              existingPath.replace("/public-networks", "/en/development/public-networks"),
              existingPath.replace("/public-networks", "/development/public-networks"),
              existingPath.replace("/public-networks", "/en/latest/public-networks"),
              existingPath.replace("/public-networks", "/latest/public-networks"),
              existingPath.replace("/public-networks", "/en/stable/public-networks"),
              existingPath.replace("/public-networks", "/stable/public-networks"),
              existingPath.replace("/public-networks", "/24.8.0/public-networks"),
              existingPath.replace("/public-networks", "/24.7.1/public-networks"),
              existingPath.replace("/public-networks", "/23.4.0/public-networks"),
            ];
          }
          if (existingPath.includes("/private-networks")) {
            return [
              existingPath.replace("/private-networks", "/en/development/private-networks"),
              existingPath.replace("/private-networks", "/development/private-networks"),
              existingPath.replace("/private-networks", "/en/latest/private-networks"),
              existingPath.replace("/private-networks", "/latest/private-networks"),
              existingPath.replace("/private-networks", "/en/stable/private-networks"),
              existingPath.replace("/private-networks", "/stable/private-networks"),
              existingPath.replace("/private-networks", "/24.8.0/private-networks"),
              existingPath.replace("/private-networks", "/24.7.1/private-networks"),
              existingPath.replace("/private-networks", "/23.4.0/private-networks"),
            ];
          }
          return undefined; // Return a falsy value: no redirect created
        },
      },
    ],
  ],
  themes: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
      ({
        hashed: true,
        docsRouteBasePath: "/",
        indexBlog: false,
      }),
    ],
    "@docusaurus/theme-mermaid",
  ],
};

module.exports = config;
