"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[98648],{60012:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>d,toc:()=>o});var s=r(85893),n=r(11151);const i={title:"Private network API objects",sidebar_position:2,description:"Hyperledger Besu private network API objects reference",tags:["private networks"]},c="Private network API objects",d={id:"private-networks/reference/api/objects",title:"Private network API objects",description:"Hyperledger Besu private network API objects reference",source:"@site/versioned_docs/version-24.3.0/private-networks/reference/api/objects.md",sourceDirName:"private-networks/reference/api",slug:"/private-networks/reference/api/objects",permalink:"/24.3.0/private-networks/reference/api/objects",draft:!1,unlisted:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/versioned_docs/version-24.3.0/private-networks/reference/api/objects.md",tags:[{label:"private networks",permalink:"/24.3.0/tags/private-networks"}],version:"24.3.0",lastUpdatedAt:1719257757,formattedLastUpdatedAt:"Jun 24, 2024",sidebarPosition:2,frontMatter:{title:"Private network API objects",sidebar_position:2,description:"Hyperledger Besu private network API objects reference",tags:["private networks"]},sidebar:"privateDocSidebar",previous:{title:"Private network API methods",permalink:"/24.3.0/private-networks/reference/api/"},next:{title:"Accounts for testing",permalink:"/24.3.0/private-networks/reference/accounts-for-testing"}},l={},o=[{value:"Private transaction object",id:"private-transaction-object",level:2},{value:"Private transaction receipt object",id:"private-transaction-receipt-object",level:2}];function a(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"private-network-api-objects",children:"Private network API objects"}),"\n",(0,s.jsx)(t.p,{children:"The following objects are parameters for or returned by Besu private network API methods."}),"\n",(0,s.jsx)(t.admonition,{title:"Important",type:"caution",children:(0,s.jsxs)(t.p,{children:["This reference contains API objects that apply to only private networks. For API objects that apply to both private and public networks, see the ",(0,s.jsx)(t.a,{href:"/24.3.0/public-networks/reference/api/objects",children:"public network API objects reference"}),"."]})}),"\n",(0,s.jsx)(t.h2,{id:"private-transaction-object",children:"Private transaction object"}),"\n",(0,s.jsxs)(t.p,{children:["Returned by ",(0,s.jsx)(t.a,{href:"/24.3.0/private-networks/reference/api/#priv_getprivatetransaction",children:(0,s.jsx)(t.code,{children:"priv_getPrivateTransaction"})}),"."]}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Key"}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"Type"}),(0,s.jsx)(t.th,{children:"Value"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"from"})}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Data, 20\xa0bytes"}),(0,s.jsx)(t.td,{children:"Address of the sender."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"gas"})}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Quantity"}),(0,s.jsx)(t.td,{children:"Gas provided by the sender."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"gasPrice"})}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Quantity"}),(0,s.jsx)(t.td,{children:"Gas price, in Wei, provided by the sender."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"input"})}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Data"}),(0,s.jsx)(t.td,{children:"The data to create or invoke a contract."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"nonce"})}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Quantity"}),(0,s.jsx)(t.td,{children:"Number of transactions made by the sender to the privacy group before this one."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"to"})}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Data, 20\xa0bytes"}),(0,s.jsxs)(t.td,{children:[(0,s.jsx)(t.code,{children:"null"})," if a contract creation transaction, otherwise, the contract address."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"value"})}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Quantity"}),(0,s.jsxs)(t.td,{children:[(0,s.jsx)(t.code,{children:"null"})," because private transactions cannot transfer Ether."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"v"})}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Quantity"}),(0,s.jsx)(t.td,{children:"ECDSA Recovery ID."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"r"})}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Data, 32\xa0bytes"}),(0,s.jsx)(t.td,{children:"ECDSA signature r."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"s"})}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Data, 32\xa0bytes"}),(0,s.jsx)(t.td,{children:"ECDSA signature s."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"privateFrom"})}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Data, 32\xa0bytes"}),(0,s.jsxs)(t.td,{children:[(0,s.jsx)(t.a,{href:"https://docs.tessera.consensys.net/",children:"Tessera"})," public key of the sender."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"privateFor"})}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Array of Data, 32\xa0bytes each"}),(0,s.jsxs)(t.td,{children:[(0,s.jsx)(t.a,{href:"https://docs.tessera.consensys.net/",children:"Tessera"})," public keys of recipients. Not returned if using ",(0,s.jsx)(t.code,{children:"privacyGroupId"})," to ",(0,s.jsx)(t.a,{href:"/24.3.0/private-networks/concepts/privacy/privacy-groups#privacy-types",children:"send the transaction"}),"."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"privacyGroupId"})}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Data, 32\xa0bytes"}),(0,s.jsxs)(t.td,{children:[(0,s.jsx)(t.a,{href:"https://docs.tessera.consensys.net/",children:"Tessera"})," privacy group ID of recipients. Not returned if using ",(0,s.jsx)(t.code,{children:"privateFor"})," to ",(0,s.jsx)(t.a,{href:"/24.3.0/private-networks/concepts/privacy/privacy-groups#privacy-types",children:"send the transaction"}),"."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"restriction"})}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"String"}),(0,s.jsxs)(t.td,{children:["Must be ",(0,s.jsx)(t.a,{href:"/24.3.0/private-networks/concepts/privacy/private-transactions/",children:(0,s.jsx)(t.code,{children:"restricted"})}),"."]})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"private-transaction-receipt-object",children:"Private transaction receipt object"}),"\n",(0,s.jsxs)(t.p,{children:["Returned by ",(0,s.jsx)(t.a,{href:"/24.3.0/private-networks/reference/api/#priv_gettransactionreceipt",children:(0,s.jsx)(t.code,{children:"priv_getTransactionReceipt"})}),"."]}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Key"}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"Type"}),(0,s.jsx)(t.th,{children:"Value"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"blockHash"})}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Data, 32\xa0bytes"}),(0,s.jsx)(t.td,{children:"Hash of block containing this transaction."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"blockNumber"})}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Quantity"}),(0,s.jsx)(t.td,{children:"Block number of block containing this transaction."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"contractAddress"})}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Data, 20\xa0bytes"}),(0,s.jsxs)(t.td,{children:["Contract address created if a contract creation transaction, otherwise, ",(0,s.jsx)(t.code,{children:"null"}),". A failed contract creation transaction still produces a contract address value."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"from"})}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Data, 20\xa0bytes"}),(0,s.jsx)(t.td,{children:"Address of the sender."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"logs"})}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Array"}),(0,s.jsxs)(t.td,{children:["Array of ",(0,s.jsx)(t.a,{href:"/24.3.0/public-networks/reference/api/objects#log-object",children:"log objects"})," generated by this private transaction."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"to"})}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Data, 20\xa0bytes"}),(0,s.jsx)(t.td,{children:"Address of the receiver, if sending ether, otherwise, null."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"transactionIndex"})}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Quantity, Integer"}),(0,s.jsx)(t.td,{children:"Index position of transaction in the block."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"revertReason"})}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"String"}),(0,s.jsxs)(t.td,{children:["ABI-encoded string that displays the ",(0,s.jsx)(t.a,{href:"/24.3.0/private-networks/how-to/send-transactions/revert-reason",children:"reason for reverting the transaction"}),". Only available if revert reason is ",(0,s.jsx)(t.a,{href:"/24.3.0/private-networks/reference/cli/options#revert-reason-enabled",children:"enabled"}),"."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"output"})}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Data"}),(0,s.jsxs)(t.td,{children:["RLP-encoded return value of a contract call if a value returns, otherwise, ",(0,s.jsx)(t.code,{children:"null"}),"."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"commitmentHash"})}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Data, 32\xa0bytes"}),(0,s.jsx)(t.td,{children:"Hash of the privacy marker transaction."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"status"})}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Quantity"}),(0,s.jsxs)(t.td,{children:["Either ",(0,s.jsx)(t.code,{children:"0x1"})," (success) or ",(0,s.jsx)(t.code,{children:"0x0"})," (failure)."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"privateFrom"})}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Data, 32\xa0bytes"}),(0,s.jsxs)(t.td,{children:[(0,s.jsx)(t.a,{href:"https://docs.tessera.consensys.net/",children:"Tessera"})," public key of the sender."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsxs)(t.td,{children:[(0,s.jsx)(t.code,{children:"privateFor"})," or ",(0,s.jsx)(t.code,{children:"privacyGroupId"})]}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Array or Data, 32\xa0bytes"}),(0,s.jsxs)(t.td,{children:[(0,s.jsx)(t.a,{href:"https://docs.tessera.consensys.net/",children:"Tessera"})," public keys or privacy group ID of the recipients."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"logsBloom"})}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Data, 256\xa0bytes"}),(0,s.jsx)(t.td,{children:"Bloom filter for light clients to quickly retrieve related logs."})]})]})]})]})}function h(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},11151:(e,t,r)=>{r.d(t,{Z:()=>d,a:()=>c});var s=r(67294);const n={},i=s.createContext(n);function c(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:c(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);