"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[15412],{18705:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>f,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var i=s(85893),t=s(11151);const o={title:"Genesis file",sidebar_position:7,description:"Learn about configuring a network using the genesis file.",tags:["public networks","private networks"]},r="Genesis file",c={id:"public-networks/concepts/genesis-file",title:"Genesis file",description:"Learn about configuring a network using the genesis file.",source:"@site/versioned_docs/version-24.5.2/public-networks/concepts/genesis-file.md",sourceDirName:"public-networks/concepts",slug:"/public-networks/concepts/genesis-file",permalink:"/24.5.2/public-networks/concepts/genesis-file",draft:!1,unlisted:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/versioned_docs/version-24.5.2/public-networks/concepts/genesis-file.md",tags:[{label:"public networks",permalink:"/24.5.2/tags/public-networks"},{label:"private networks",permalink:"/24.5.2/tags/private-networks"}],version:"24.5.2",lastUpdatedAt:1721091884,formattedLastUpdatedAt:"Jul 16, 2024",sidebarPosition:7,frontMatter:{title:"Genesis file",sidebar_position:7,description:"Learn about configuring a network using the genesis file.",tags:["public networks","private networks"]},sidebar:"publicDocSidebar",previous:{title:"Events and logs",permalink:"/24.5.2/public-networks/concepts/events-and-logs"},next:{title:"Node keys",permalink:"/24.5.2/public-networks/concepts/node-keys"}},a={},l=[];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"genesis-file",children:"Genesis file"}),"\n",(0,i.jsx)(n.p,{children:"The genesis file defines the first block in the chain, and the first block defines which chain you want to join."}),"\n",(0,i.jsxs)(n.p,{children:["For Ethereum Mainnet and public testnets (for example, Holesky) the genesis configuration definition is in Besu and used when specifying a public network using the ",(0,i.jsx)(n.a,{href:"/24.5.2/public-networks/reference/cli/options#network",children:(0,i.jsx)(n.code,{children:"--network"})})," command line option."]}),"\n",(0,i.jsxs)(n.p,{children:["For private networks, ",(0,i.jsx)(n.a,{href:"https://consensys.net/blog/quorum/hyperledger-besu-how-to-create-an-ethereum-genesis-file/",children:"create a JSON genesis file"}),", then specify the genesis file using the ",(0,i.jsx)(n.a,{href:"/24.5.2/public-networks/reference/cli/options#genesis-file",children:(0,i.jsx)(n.code,{children:"--genesis-file"})})," command line option."]}),"\n",(0,i.jsxs)(n.p,{children:["The genesis file specifies the ",(0,i.jsx)(n.a,{href:"/24.5.2/public-networks/reference/genesis-items",children:"network-wide settings"}),", such as those for a ",(0,i.jsx)(n.a,{href:"/24.5.2/private-networks/how-to/configure/free-gas",children:"free gas network"}),", so all nodes in a network must use the same genesis file."]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["You can specify node-level settings on the command line or in the ",(0,i.jsx)(n.a,{href:"/24.5.2/public-networks/how-to/use-configuration-file/",children:"node configuration file"}),"."]})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",metastring:'title="Example IBFT 2.0 genesis file"',children:'{\n  "config": {\n    "chainId": 2018,\n    "berlinBlock": 0,\n    "ibft2": {\n      "blockperiodseconds": 2,\n      "epochlength": 30000,\n      "requesttimeoutseconds": 4\n    }\n  },\n  "nonce": "0x0",\n  "timestamp": "0x58ee40ba",\n  "extraData": "0xf83ea00000000000000000000000000000000000000000000000000000000000000000d5949811ebc35d7b06b3fa8dc5809a1f9c52751e1deb808400000000c0",\n  "gasLimit": "0x1fffffffffffff",\n  "difficulty": "0x1",\n  "mixHash": "0x63746963616c2062797a616e74696e65206661756c7420746f6c6572616e6365",\n  "coinbase": "0x0000000000000000000000000000000000000000",\n  "alloc": {\n    "9811ebc35d7b06b3fa8dc5809a1f9c52751e1deb": {\n      "balance": "0xad78ebc5ac6200000"\n    }\n  }\n}\n'})})]})}function f(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},11151:(e,n,s)=>{s.d(n,{Z:()=>c,a:()=>r});var i=s(67294);const t={},o=i.createContext(t);function r(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);