"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[25537],{15550:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>h});var r=t(85893),s=t(11151),a=t(74866),l=t(85162);const o={title:"Subcommands",description:"Hyperledger Besu command line interface subcommands",sidebar_position:2,tags:["public networks","private networks"]},c="Subcommands",i={id:"public-networks/reference/cli/subcommands",title:"Subcommands",description:"Hyperledger Besu command line interface subcommands",source:"@site/versioned_docs/version-23.7.3/public-networks/reference/cli/subcommands.md",sourceDirName:"public-networks/reference/cli",slug:"/public-networks/reference/cli/subcommands",permalink:"/23.7.3/public-networks/reference/cli/subcommands",draft:!1,unlisted:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/versioned_docs/version-23.7.3/public-networks/reference/cli/subcommands.md",tags:[{label:"public networks",permalink:"/23.7.3/tags/public-networks"},{label:"private networks",permalink:"/23.7.3/tags/private-networks"}],version:"23.7.3",lastUpdatedAt:1708040194,formattedLastUpdatedAt:"Feb 15, 2024",sidebarPosition:2,frontMatter:{title:"Subcommands",description:"Hyperledger Besu command line interface subcommands",sidebar_position:2,tags:["public networks","private networks"]},sidebar:"publicDocSidebar",previous:{title:"Options",permalink:"/23.7.3/public-networks/reference/cli/options"},next:{title:"Besu API",permalink:"/23.7.3/public-networks/reference/api/"}},d={},h=[{value:"<code>blocks</code>",id:"blocks",level:2},{value:"<code>import</code>",id:"import",level:3},{value:"<code>export</code>",id:"export",level:3},{value:"<code>public-key</code>",id:"public-key",level:2},{value:"<code>export</code>",id:"export-1",level:3},{value:"<code>export-address</code>",id:"export-address",level:3},{value:"<code>password</code>",id:"password",level:2},{value:"<code>hash</code>",id:"hash",level:3},{value:"<code>operator</code>",id:"operator",level:2},{value:"<code>generate-log-bloom-cache</code>",id:"generate-log-bloom-cache",level:3},{value:"<code>retesteth</code>",id:"retesteth",level:2},{value:"<code>validate-config</code>",id:"validate-config",level:2}];function u(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"subcommands",children:"Subcommands"}),"\n",(0,r.jsx)(n.p,{children:"This reference describes the syntax of the Hyperledger Besu command line interface (CLI) subcommands."}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["This reference contains subcommands that apply to both public and private networks. For private-network-specific subcommands, see the ",(0,r.jsx)(n.a,{href:"/23.7.3/private-networks/reference/cli/subcommands",children:"private network subcommands reference"}),"."]})}),"\n",(0,r.jsx)(n.p,{children:"To start a Besu node using subcommands, run:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"besu [OPTIONS] [SUBCOMMAND] [SUBCOMMAND OPTIONS]\n"})}),"\n",(0,r.jsx)(n.p,{children:"If using Bash or Z shell, you can view subcommand suggestions by pressing the Tab key twice."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"besu Tab+Tab\n"})}),"\n",(0,r.jsx)(n.h2,{id:"blocks",children:(0,r.jsx)(n.code,{children:"blocks"})}),"\n",(0,r.jsx)(n.p,{children:"Provides blocks related actions."}),"\n",(0,r.jsx)(n.h3,{id:"import",children:(0,r.jsx)(n.code,{children:"import"})}),"\n",(0,r.jsxs)(a.Z,{children:[(0,r.jsx)(l.Z,{value:"Syntax",label:"Syntax",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"besu blocks import [--skip-pow-validation-enabled] [--start-block=<LONG>] [--end-block=<LONG>] --from=<block-file>\n"})})}),(0,r.jsx)(l.Z,{value:"Example",label:"Example",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"besu blocks import --skip-pow-validation-enabled --start-block=100 --end-block=300 --from=/home/me/me_project/mainnet-export1.blocks --from=/home/me/me_project/mainnet-export2.blocks\n"})})})]}),"\n",(0,r.jsx)(n.p,{children:"Imports a block or range of blocks from the specified file into the blockchain database."}),"\n",(0,r.jsxs)(n.p,{children:["You can specify the starting index of the block range to import with ",(0,r.jsx)(n.code,{children:"--start-block"}),". If omitted, the default start block is 0 (the beginning of the chain)."]}),"\n",(0,r.jsxs)(n.p,{children:["You can specify the ending index (exclusive) of the block range to import with ",(0,r.jsx)(n.code,{children:"--end-block"}),". If omitted, all blocks after the start block are imported."]}),"\n",(0,r.jsxs)(n.p,{children:["You can specify multiple ",(0,r.jsx)(n.code,{children:"--from"})," arguments. This can be useful when blocks have been exported over time to multiple files. If multiple files are provided they are read in the order specified in the command."]}),"\n",(0,r.jsxs)(n.p,{children:["Including ",(0,r.jsx)(n.code,{children:"--skip-pow-validation-enabled"})," skips validation of the ",(0,r.jsx)(n.code,{children:"mixHash"})," when importing blocks."]}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["Use ",(0,r.jsx)(n.code,{children:"--skip-pow-validation-enabled"})," when performing ",(0,r.jsx)(n.a,{href:"https://github.com/ethereum/hive",children:"Ethereum Foundation hive testing"}),"."]})}),"\n",(0,r.jsx)(n.h3,{id:"export",children:(0,r.jsx)(n.code,{children:"export"})}),"\n",(0,r.jsxs)(a.Z,{children:[(0,r.jsx)(l.Z,{value:"Syntax",label:"Syntax",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"besu blocks export [--start-block=<LONG>] [--end-block=<LONG>] --to=<block-file>\n"})})}),(0,r.jsx)(l.Z,{value:"Example",label:"Example",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"besu --network=goerli --data-path=/home/data/ blocks export --start-block=100 --end-block=300 --to=/home/exportblock.bin\n"})})})]}),"\n",(0,r.jsx)(n.p,{children:"Exports a block or range of blocks from storage to a file in RLP format."}),"\n",(0,r.jsxs)(n.p,{children:["If you omit ",(0,r.jsx)(n.code,{children:"--start-block"}),", the default start block is 0 (the beginning of the chain), and if you omit ",(0,r.jsx)(n.code,{children:"--end-block"}),", the default end block is the current chain head."]}),"\n",(0,r.jsxs)(n.p,{children:["If you are not running the command against the default network (Mainnet), specify the ",(0,r.jsx)(n.code,{children:"--network"})," or ",(0,r.jsx)(n.code,{children:"--genesis-file"})," parameter."]}),"\n",(0,r.jsx)(n.h2,{id:"public-key",children:(0,r.jsx)(n.code,{children:"public-key"})}),"\n",(0,r.jsx)(n.p,{children:"Provides node public key related actions."}),"\n",(0,r.jsx)(n.admonition,{type:"caution",children:(0,r.jsxs)(n.p,{children:["To get the public key or address of a node, ensure you use the ",(0,r.jsx)(n.a,{href:"/23.7.3/public-networks/reference/cli/options#data-path",children:(0,r.jsx)(n.code,{children:"--data-path"})})," or ",(0,r.jsx)(n.a,{href:"/23.7.3/public-networks/reference/cli/options#node-private-key-file",children:(0,r.jsx)(n.code,{children:"--node-private-key-file"})})," option with the ",(0,r.jsx)(n.code,{children:"public-key"})," command. Otherwise, a new ",(0,r.jsx)(n.a,{href:"/23.7.3/public-networks/concepts/node-keys",children:"node key"})," is silently generated when starting Besu."]})}),"\n",(0,r.jsx)(n.h3,{id:"export-1",children:(0,r.jsx)(n.code,{children:"export"})}),"\n",(0,r.jsxs)(a.Z,{children:[(0,r.jsx)(l.Z,{value:"Syntax",label:"Syntax",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"besu public-key export [--node-private-key-file=<file>] [--to=<key-file>] [--ec-curve=<ec-curve-name>]\n"})})}),(0,r.jsx)(l.Z,{value:"Example to standard output",label:"Example (to standard output)",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"besu --data-path=<node data path> public-key export --node-private-key-file=/home/me/me_node/myPrivateKey --ec-curve=secp256k1\n"})})}),(0,r.jsx)(l.Z,{value:"Example to file",label:"Example (to file)",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"besu --data-path=<node data path> public-key export --node-private-key-file=/home/me/me_node/myPrivateKey --to=/home/me/me_project/not_precious_pub_key --ec-curve=secp256k1\n"})})})]}),"\n",(0,r.jsxs)(n.p,{children:["Outputs the node public key to standard output or to the file specified by ",(0,r.jsx)(n.code,{children:"--to=<key-file>"}),". You can output the public key associated with a specific private key file using the ",(0,r.jsx)(n.a,{href:"/23.7.3/public-networks/reference/cli/options#node-private-key-file",children:(0,r.jsx)(n.code,{children:"--node-private-key-file"})})," option. The default elliptic curve used for the key is ",(0,r.jsx)(n.code,{children:"secp256k1"}),". Use the ",(0,r.jsx)(n.code,{children:"--ec-curve"})," option to choose between ",(0,r.jsx)(n.code,{children:"secp256k1"})," or ",(0,r.jsx)(n.code,{children:"secp256r1"}),"."]}),"\n",(0,r.jsx)(n.h3,{id:"export-address",children:(0,r.jsx)(n.code,{children:"export-address"})}),"\n",(0,r.jsxs)(a.Z,{children:[(0,r.jsx)(l.Z,{value:"Syntax",label:"Syntax",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"besu public-key export-address [--node-private-key-file=<file>] [--to=<address-file>] [--ec-curve=<ec-curve-name>]\n"})})}),(0,r.jsx)(l.Z,{value:"Example to standard output",label:"Example (to standard output)",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"besu --data-path=<node data path> public-key export-address --node-private-key-file=/home/me/me_node/myPrivateKey --ec-curve=secp256k1\n"})})}),(0,r.jsx)(l.Z,{value:"Example to file",label:"Example (to file)",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"besu --data-path=<node data path> public-key export-address --node-private-key-file=/home/me/me_node/myPrivateKey --to=/home/me/me_project/me_node_address --ec-curve=secp256k1\n"})})})]}),"\n",(0,r.jsxs)(n.p,{children:["Outputs the node address to standard output or to the file specified by ",(0,r.jsx)(n.code,{children:"--to=<address-file>"}),". You can output the address associated with a specific private key file using the ",(0,r.jsx)(n.a,{href:"/23.7.3/public-networks/reference/cli/options#node-private-key-file",children:(0,r.jsx)(n.code,{children:"--node-private-key-file"})})," option. The default elliptic curve used for the key is ",(0,r.jsx)(n.code,{children:"secp256k1"}),". Use the ",(0,r.jsx)(n.code,{children:"--ec-curve"})," option to choose between ",(0,r.jsx)(n.code,{children:"secp256k1"})," or ",(0,r.jsx)(n.code,{children:"secp256r1"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"password",children:(0,r.jsx)(n.code,{children:"password"})}),"\n",(0,r.jsx)(n.p,{children:"Provides password related actions."}),"\n",(0,r.jsx)(n.h3,{id:"hash",children:(0,r.jsx)(n.code,{children:"hash"})}),"\n",(0,r.jsxs)(a.Z,{children:[(0,r.jsx)(l.Z,{value:"Syntax",label:"Syntax",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"besu password hash --password=<my-password>\n"})})}),(0,r.jsx)(l.Z,{value:"Example",label:"Example",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"besu password hash --password=myPassword123\n"})})})]}),"\n",(0,r.jsxs)(n.p,{children:["Generates the hash of a given password. Include the hash in the ",(0,r.jsx)(n.a,{href:"/23.7.3/public-networks/how-to/use-besu-api/authenticate#credentials-file",children:"credentials file"})," for JSON-RPC API ",(0,r.jsx)(n.a,{href:"/23.7.3/public-networks/how-to/use-besu-api/authenticate",children:"authentication"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"operator",children:(0,r.jsx)(n.code,{children:"operator"})}),"\n",(0,r.jsx)(n.p,{children:"Provides operator actions."}),"\n",(0,r.jsx)(n.h3,{id:"generate-log-bloom-cache",children:(0,r.jsx)(n.code,{children:"generate-log-bloom-cache"})}),"\n",(0,r.jsxs)(a.Z,{children:[(0,r.jsx)(l.Z,{value:"Syntax",label:"Syntax",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"besu operator generate-log-bloom-cache [--start-block=<BLOCK_NUMBER>] [--end-block=<BLOCK_NUMBER>]\n"})})}),(0,r.jsx)(l.Z,{value:"Example",label:"Example",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"besu --network=goerli --data-path=/project/goerli operator generate-log-bloom-cache --start-block=0 --end-block=100000\n"})})})]}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsxs)(n.p,{children:["Manually executing ",(0,r.jsx)(n.code,{children:"generate-log-bloom-cache"})," is not required unless you set the ",(0,r.jsx)(n.a,{href:"/23.7.3/public-networks/reference/cli/options#auto-log-bloom-caching-enabled",children:(0,r.jsx)(n.code,{children:"--auto-log-bloom-caching-enabled"})})," command line option to false."]})}),"\n",(0,r.jsx)(n.p,{children:"Generates cached log bloom indexes for blocks. APIs use the cached indexes for improved log query performance."}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsx)(n.p,{children:"Each index file contains 100000 blocks. The last fragment of blocks less that 100000 are not indexed."})}),"\n",(0,r.jsxs)(n.p,{children:["To generate cached log bloom indexes while the node is running, use the ",(0,r.jsx)(n.a,{href:"/23.7.3/public-networks/reference/api/#admin_generatelogbloomcache",children:(0,r.jsx)(n.code,{children:"admin_generateLogBloomCache"})})," API."]}),"\n",(0,r.jsx)(n.h2,{id:"retesteth",children:(0,r.jsx)(n.code,{children:"retesteth"})}),"\n",(0,r.jsxs)(a.Z,{children:[(0,r.jsx)(l.Z,{value:"Syntax",label:"Syntax",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"besu retesteth [--data-path=<PATH>] [--rpc-http-host=<HOST>] [--rpc-http-port=<PORT>] [-l=<LOG VERBOSITY LEVEL>] [--host-allowlist=<hostname>[,<hostname>\u2026]\u2026 or * or all]\n"})})}),(0,r.jsx)(l.Z,{value:"Example",label:"Example",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"besu retesteth --data-path=/home/me/me_node --rpc-http-port=8590 --host-allowlist=*\n"})})})]}),"\n",(0,r.jsxs)(n.p,{children:["Runs a Retesteth-compatible server. ",(0,r.jsx)(n.a,{href:"https://github.com/ethereum/retesteth/wiki",children:"Retesteth"})," is a developer tool that can generate and run consensus tests against any Ethereum client running such a server."]}),"\n",(0,r.jsx)(n.p,{children:"The command accepts the following command line options:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/23.7.3/public-networks/reference/cli/options#data-path",children:(0,r.jsx)(n.code,{children:"--data-path"})})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/23.7.3/public-networks/reference/cli/options#host-allowlist",children:(0,r.jsx)(n.code,{children:"--host-allowlist"})})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/23.7.3/public-networks/reference/cli/options#rpc-http-host",children:(0,r.jsx)(n.code,{children:"--rpc-http-host"})})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/23.7.3/public-networks/reference/cli/options#rpc-http-port",children:(0,r.jsx)(n.code,{children:"--rpc-http-port"})})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/23.7.3/public-networks/reference/cli/options#logging",children:(0,r.jsx)(n.code,{children:"--logging"})})}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"validate-config",children:(0,r.jsx)(n.code,{children:"validate-config"})}),"\n",(0,r.jsxs)(a.Z,{children:[(0,r.jsx)(l.Z,{value:"Syntax",label:"Syntax",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"besu validate-config --config-file <PATH-TO-CONFIG-FILE>\n"})})}),(0,r.jsx)(l.Z,{value:"Example",label:"Example",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"besu validate-config --config-file ../besu-local-nodes/config/besu/besu1.conf\n"})})})]}),"\n",(0,r.jsxs)(n.p,{children:["Performs basic syntax validation of the specified ",(0,r.jsx)(n.a,{href:"/23.7.3/public-networks/how-to/configuration-file",children:"TOML configuration file"}),". Checks TOML syntax (for example, valid format and unmatched quotes) and flags unknown options. Doesn't check data types, and doesn't check dependencies between options (this is done at Besu startup)."]})]})}function p(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},85162:(e,n,t)=>{t.d(n,{Z:()=>l});t(67294);var r=t(36905);const s={tabItem:"tabItem_Ymn6"};var a=t(85893);function l(e){let{children:n,hidden:t,className:l}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,r.Z)(s.tabItem,l),hidden:t,children:n})}},74866:(e,n,t)=>{t.d(n,{Z:()=>y});var r=t(67294),s=t(36905),a=t(12466),l=t(16550),o=t(20469),c=t(91980),i=t(67392),d=t(50012);function h(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return h(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:s}}=e;return{value:n,label:t,attributes:r,default:s}}))}(t);return function(e){const n=(0,i.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function b(e){let{queryString:n=!1,groupId:t}=e;const s=(0,l.k6)(),a=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,c._X)(a),(0,r.useCallback)((e=>{if(!a)return;const n=new URLSearchParams(s.location.search);n.set(a,e),s.replace({...s.location,search:n.toString()})}),[a,s])]}function m(e){const{defaultValue:n,queryString:t=!1,groupId:s}=e,a=u(e),[l,c]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:a}))),[i,h]=b({queryString:t,groupId:s}),[m,x]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[s,a]=(0,d.Nk)(t);return[s,(0,r.useCallback)((e=>{t&&a.set(e)}),[t,a])]}({groupId:s}),f=(()=>{const e=i??m;return p({value:e,tabValues:a})?e:null})();(0,o.Z)((()=>{f&&c(f)}),[f]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);c(e),h(e),x(e)}),[h,x,a]),tabValues:a}}var x=t(72389);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=t(85893);function g(e){let{className:n,block:t,selectedValue:r,selectValue:l,tabValues:o}=e;const c=[],{blockElementScrollPositionUntilNextRender:i}=(0,a.o5)(),d=e=>{const n=e.currentTarget,t=c.indexOf(n),s=o[t].value;s!==r&&(i(n),l(s))},h=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1];break}}n?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":t},n),children:o.map((e=>{let{value:n,label:t,attributes:a}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>c.push(e),onKeyDown:h,onClick:d,...a,className:(0,s.Z)("tabs__item",f.tabItem,a?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function k(e){let{lazy:n,children:t,selectedValue:s}=e;const a=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=a.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:a.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function v(e){const n=m(e);return(0,j.jsxs)("div",{className:(0,s.Z)("tabs-container",f.tabList),children:[(0,j.jsx)(g,{...e,...n}),(0,j.jsx)(k,{...e,...n})]})}function y(e){const n=(0,x.Z)();return(0,j.jsx)(v,{...e,children:h(e.children)},String(n))}},11151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>l});var r=t(67294);const s={},a=r.createContext(s);function l(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);