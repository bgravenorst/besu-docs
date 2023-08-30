"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[50722],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),p=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return i.createElement(l.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},k=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),k=r,u=d["".concat(l,".").concat(k)]||d[k]||m[k]||a;return n?i.createElement(u,o(o({ref:t},c),{},{components:n})):i.createElement(u,o({ref:t},c))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=k;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:r,o[1]=s;for(var p=2;p<a;p++)o[p]=n[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}k.displayName="MDXCreateElement"},95872:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var i=n(87462),r=(n(67294),n(3905));const a={title:"Genesis file items",sidebar_position:4,description:"Genesis file configuration items reference",tags:["public networks","private networks"]},o="Genesis file items",s={unversionedId:"public-networks/reference/genesis-items",id:"public-networks/reference/genesis-items",title:"Genesis file items",description:"Genesis file configuration items reference",source:"@site/docs/public-networks/reference/genesis-items.md",sourceDirName:"public-networks/reference",slug:"/public-networks/reference/genesis-items",permalink:"/development/public-networks/reference/genesis-items",draft:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/docs/public-networks/reference/genesis-items.md",tags:[{label:"public networks",permalink:"/development/tags/public-networks"},{label:"private networks",permalink:"/development/tags/private-networks"}],version:"current",lastUpdatedAt:1693258016,formattedLastUpdatedAt:"Aug 28, 2023",sidebarPosition:4,frontMatter:{title:"Genesis file items",sidebar_position:4,description:"Genesis file configuration items reference",tags:["public networks","private networks"]},sidebar:"publicDocSidebar",previous:{title:"Objects",permalink:"/development/public-networks/reference/engine-api/objects"},next:{title:"EVM tool options",permalink:"/development/public-networks/reference/evm-tool"}},l={},p=[{value:"Configuration items",id:"configuration-items",level:2},{value:"Genesis block parameters",id:"genesis-block-parameters",level:2},{value:"Milestone blocks",id:"milestone-blocks",level:2},{value:"Fixed difficulty",id:"fixed-difficulty",level:2},{value:"Discovery configuration items",id:"discovery-configuration-items",level:2}],c={toc:p};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"genesis-file-items"},"Genesis file items"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"/development/public-networks/concepts/genesis-file"},"Besu genesis file")," contains ",(0,r.kt)("a",{parentName:"p",href:"#configuration-items"},"network configuration items")," and ",(0,r.kt)("a",{parentName:"p",href:"#genesis-block-parameters"},"genesis block parameters"),"."),(0,r.kt)("h2",{id:"configuration-items"},"Configuration items"),(0,r.kt)("p",null,"Network configuration items are specified in the genesis file in the ",(0,r.kt)("inlineCode",{parentName:"p"},"config")," object."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Item"),(0,r.kt)("th",{parentName:"tr",align:"right"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Milestone blocks"),(0,r.kt)("td",{parentName:"tr",align:"right"},(0,r.kt)("a",{parentName:"td",href:"#milestone-blocks"},"Milestone blocks for the network"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"chainID")),(0,r.kt)("td",{parentName:"tr",align:"right"},(0,r.kt)("a",{parentName:"td",href:"/development/public-networks/concepts/network-and-chain-id"},"Chain ID for the network"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ethash")),(0,r.kt)("td",{parentName:"tr",align:"right"},"Specifies network uses ",(0,r.kt)("a",{parentName:"td",href:"/development/private-networks/how-to/configure/consensus/"},"Ethash")," and contains ",(0,r.kt)("a",{parentName:"td",href:"#fixed-difficulty"},(0,r.kt)("inlineCode",{parentName:"a"},"fixeddifficulty")),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"clique")),(0,r.kt)("td",{parentName:"tr",align:"right"},"Specifies network uses ",(0,r.kt)("a",{parentName:"td",href:"/development/private-networks/how-to/configure/consensus/clique"},"Clique")," and contains ",(0,r.kt)("a",{parentName:"td",href:"/development/private-networks/how-to/configure/consensus/clique#genesis-file"},"Clique configuration items"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ibft2")),(0,r.kt)("td",{parentName:"tr",align:"right"},"Specifies network uses ",(0,r.kt)("a",{parentName:"td",href:"/development/private-networks/how-to/configure/consensus/ibft"},"IBFT 2.0")," and contains ",(0,r.kt)("a",{parentName:"td",href:"/development/private-networks/how-to/configure/consensus/ibft#genesis-file"},"IBFT 2.0 configuration items"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"qbft")),(0,r.kt)("td",{parentName:"tr",align:"right"},"Specifies network uses ",(0,r.kt)("a",{parentName:"td",href:"/development/private-networks/how-to/configure/consensus/qbft"},"QBFT")," and contains ",(0,r.kt)("a",{parentName:"td",href:"/development/private-networks/how-to/configure/consensus/qbft#genesis-file"},"QBFT configuration items"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"transitions")),(0,r.kt)("td",{parentName:"tr",align:"right"},"Specifies block at which to ",(0,r.kt)("a",{parentName:"td",href:"/development/private-networks/how-to/configure/consensus/add-validators-without-voting"},"change IBFT 2.0 or QBFT validators"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"contractSizeLimit")),(0,r.kt)("td",{parentName:"tr",align:"right"},"Maximum contract size in bytes. Specify in ",(0,r.kt)("a",{parentName:"td",href:"/development/private-networks/how-to/configure/free-gas"},"free gas networks"),". The default is ",(0,r.kt)("inlineCode",{parentName:"td"},"24576")," and the maximum size is ",(0,r.kt)("inlineCode",{parentName:"td"},"2147483647"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"evmStackSize")),(0,r.kt)("td",{parentName:"tr",align:"right"},"Maximum stack size. Specify to increase the maximum stack size in private networks with complex smart contracts. The default is ",(0,r.kt)("inlineCode",{parentName:"td"},"1024"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ecCurve")),(0,r.kt)("td",{parentName:"tr",align:"right"},"Specifies ",(0,r.kt)("a",{parentName:"td",href:"/development/private-networks/how-to/configure/curves"},"the elliptic curve to use"),". Default is ",(0,r.kt)("inlineCode",{parentName:"td"},"secp256k1"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"discovery")),(0,r.kt)("td",{parentName:"tr",align:"right"},"Specifies ",(0,r.kt)("a",{parentName:"td",href:"#discovery-configuration-items"},"discovery configuration items"),". The ",(0,r.kt)("inlineCode",{parentName:"td"},"discovery")," object can be left empty.")))),(0,r.kt)("h2",{id:"genesis-block-parameters"},"Genesis block parameters"),(0,r.kt)("p",null,"The purpose of some genesis block parameters varies depending on the consensus protocol (Ethash, ",(0,r.kt)("a",{parentName:"p",href:"/development/private-networks/how-to/configure/consensus/clique"},"Clique"),", ",(0,r.kt)("a",{parentName:"p",href:"/development/private-networks/how-to/configure/consensus/ibft"},"IBFT 2.0"),", or ",(0,r.kt)("a",{parentName:"p",href:"/development/private-networks/how-to/configure/consensus/qbft"},"QBFT"),"). These parameters include:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"difficulty"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"extraData"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"mixHash"),".")),(0,r.kt)("p",null,"The following table describes the genesis block parameters with the same purpose across all consensus protocols."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Item"),(0,r.kt)("th",{parentName:"tr",align:"right"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"coinbase")),(0,r.kt)("td",{parentName:"tr",align:"right"},"Address to pay mining rewards to. Can be any value in the genesis block (commonly set to ",(0,r.kt)("inlineCode",{parentName:"td"},"0x0000000000000000000000000000000000000000"),").")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"gasLimit")),(0,r.kt)("td",{parentName:"tr",align:"right"},"Block gas limit. Total gas limit for all transactions in a block.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"nonce")),(0,r.kt)("td",{parentName:"tr",align:"right"},"Used in block computation. Can be any value in the genesis block (commonly set to ",(0,r.kt)("inlineCode",{parentName:"td"},"0x0"),").")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"timestamp")),(0,r.kt)("td",{parentName:"tr",align:"right"},"Creation date and time of the block. Must be before the next block so we recommend specifying ",(0,r.kt)("inlineCode",{parentName:"td"},"0x0")," in the genesis file.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"alloc")),(0,r.kt)("td",{parentName:"tr",align:"right"},"Defines ",(0,r.kt)("a",{parentName:"td",href:"/development/private-networks/reference/accounts-for-testing"},"accounts with balances")," or ",(0,r.kt)("a",{parentName:"td",href:"/development/private-networks/how-to/configure/contracts"},"contracts"),".")))),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"If a ",(0,r.kt)("inlineCode",{parentName:"p"},"Supplied genesis block does not match stored chain data")," error occurs, use the genesis file matching the genesis block of the data directory, or use the ",(0,r.kt)("a",{parentName:"p",href:"/development/public-networks/reference/cli/options#data-path"},(0,r.kt)("inlineCode",{parentName:"a"},"--data-path"))," option to specify a different data directory.")),(0,r.kt)("h2",{id:"milestone-blocks"},"Milestone blocks"),(0,r.kt)("p",null,"In public networks, the milestone blocks specify the blocks at which the network changed protocol. See a ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ethereum/execution-specs#ethereum-protocol-releases"},"full list of Ethereum protocol releases")," and their corresponding milestone blocks."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Ethereum Mainnet milestone blocks"',title:'"Ethereum',Mainnet:!0,milestone:!0,'blocks"':!0},'{\n  "config": {\n    ...\n    "homesteadBlock": 1150000,\n    "daoForkBlock": 1920000,\n    "daoForkSupport": true,\n    "eip150Block": 2463000,\n    "eip150Hash": "0x2086799aeebeae135c246c65021c82b4e15a2c451340993aacfd2751886514f0",\n    "eip155Block": 2675000,\n    "eip158Block": 2675000,\n    "byzantiumBlock": 4370000,\n    "constantinopleBlock": 7280000,\n    "constantinopleFixBlock": 7280000,\n    "muirGlacierBlock": 9200000,\n    "berlinBlock": 12244000,\n    "londonBlock": 12965000,\n    "arrowGlacierBlock": 13773000,\n    "grayGlacierBlock": 15050000,\n    ...\n  },\n}\n')),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Ensure you include a milestone far enough in advance in the genesis file. Not doing so can lead to unexpected and inconsistent behavior without specific errors.")),(0,r.kt)("p",null,"In private networks, the milestone block defines the protocol version for the network."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Private network milestone block"',title:'"Private',network:!0,milestone:!0,'block"':!0},'{\n  "config": {\n    ...\n    "berlinBlock": 0,\n    ...\n  },\n}\n')),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"In private networks, we recommend specifying the latest milestone block. It's implied this includes the preceding milestones. This ensures you use the most up-to-date protocol and have access to the most recent opcodes.")),(0,r.kt)("h2",{id:"fixed-difficulty"},"Fixed difficulty"),(0,r.kt)("p",null,"Use ",(0,r.kt)("inlineCode",{parentName:"p"},"fixeddifficulty")," to specify a fixed difficulty in private networks using Ethash. This will keep the network's difficulty constant and override the ",(0,r.kt)("inlineCode",{parentName:"p"},"difficulty")," parameter from the genesis file."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "config": {\n      ...\n      "ethash": {\n        "fixeddifficulty": 1000\n      },\n\n  },\n  ...\n}\n')),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Using ",(0,r.kt)("inlineCode",{parentName:"p"},"fixeddifficulty")," is not recommended for use with Ethash outside of test environments. For production networks using Ethash, we recommend setting a low ",(0,r.kt)("inlineCode",{parentName:"p"},"difficulty")," value in the genesis file instead. Ethash will adjust the difficulty of the network based on hashrate to produce blocks at the targeted frequency.")),(0,r.kt)("h2",{id:"discovery-configuration-items"},"Discovery configuration items"),(0,r.kt)("p",null,"Use the ",(0,r.kt)("inlineCode",{parentName:"p"},"discovery")," configuration items to specify the ",(0,r.kt)("a",{parentName:"p",href:"/development/public-networks/reference/cli/options#bootnodes"},(0,r.kt)("inlineCode",{parentName:"a"},"bootnodes"))," and ",(0,r.kt)("a",{parentName:"p",href:"/development/public-networks/reference/cli/options#discovery-dns-url"},(0,r.kt)("inlineCode",{parentName:"a"},"discovery-dns-url"))," in the genesis file, in place of using CLI options or listing them in the configuration file. If either CLI option is used, it takes precedence over the genesis file. Anything listed in the configuration file also takes precedence."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "config": {\n    "discovery": {\n      "bootnodes": [\n        "enode://c35c3...d615f@1.2.3.4:30303",\n        "enode://f42c13...fc456@1.2.3.5:30303"\n      ],\n      "dns": "enrtree://AM5FCQLWIZX2QFPNJAP7VUERCCRNGRHWZG3YYHIUV7BVDQ5FDPRT2@nodes.example.org"\n    }\n  }\n}\n')))}d.isMDXComponent=!0}}]);