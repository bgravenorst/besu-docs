"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[2093],{76658:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>d,toc:()=>u});var a=r(74848),n=r(28453),o=r(11470),s=r(19365);const i={title:"Add and removing IBFT 2.0 validators",sidebar_position:1,description:"Adding and removing IBFT 2.0 validators",tags:["private networks"]},l="Add and remove IBFT 2.0 validators",d={id:"private-networks/tutorials/ibft/validators",title:"Add and removing IBFT 2.0 validators",description:"Adding and removing IBFT 2.0 validators",source:"@site/docs/private-networks/tutorials/ibft/validators.md",sourceDirName:"private-networks/tutorials/ibft",slug:"/private-networks/tutorials/ibft/validators",permalink:"/private-networks/tutorials/ibft/validators",draft:!1,unlisted:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/docs/private-networks/tutorials/ibft/validators.md",tags:[{inline:!0,label:"private networks",permalink:"/tags/private-networks"}],version:"current",lastUpdatedAt:1738734483e3,sidebarPosition:1,frontMatter:{title:"Add and removing IBFT 2.0 validators",sidebar_position:1,description:"Adding and removing IBFT 2.0 validators",tags:["private networks"]},sidebar:"privateDocSidebar",previous:{title:"Create a private network using IBFT 2.0",permalink:"/private-networks/tutorials/ibft/"},next:{title:"Create a Clique network",permalink:"/private-networks/tutorials/clique"}},c={},u=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Add a validator",id:"add-a-validator",level:2},{value:"1. Create directories",id:"1-create-directories",level:3},{value:"2. Start the node",id:"2-start-the-node",level:3},{value:"3. Copy the address of the node",id:"3-copy-the-address-of-the-node",level:3},{value:"4. Propose adding the new validator",id:"4-propose-adding-the-new-validator",level:3},{value:"5. Verify the addition of the new validator",id:"5-verify-the-addition-of-the-new-validator",level:3},{value:"Remove a validator",id:"remove-a-validator",level:2}];function h(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,n.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.header,{children:(0,a.jsx)(t.h1,{id:"add-and-remove-ibft-20-validators",children:"Add and remove IBFT 2.0 validators"})}),"\n",(0,a.jsxs)(t.p,{children:["This example walks through ",(0,a.jsx)(t.a,{href:"/private-networks/how-to/configure/consensus/ibft#add-and-remove-validators",children:"adding and removing an IBFT 2.0 validator"}),"."]}),"\n",(0,a.jsx)(t.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"/private-networks/tutorials/ibft/",children:"IBFT 2.0 network as configured in the IBFT 2.0 tutorial"})}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"add-a-validator",children:"Add a validator"}),"\n",(0,a.jsx)(t.h3,{id:"1-create-directories",children:"1. Create directories"}),"\n",(0,a.jsx)(t.p,{children:"Create a working directory and a data directory for the new node that needs to be added:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"mkdir -p Node-5/data\n"})}),"\n",(0,a.jsx)(t.h3,{id:"2-start-the-node",children:"2. Start the node"}),"\n",(0,a.jsxs)(t.p,{children:["Change into the working directory for the new Node-5 and start the node, specifying the ",(0,a.jsx)(t.a,{href:"/private-networks/tutorials/ibft/#6-start-the-first-node-as-the-bootnode",children:"Node-1 enode URL"})," as the bootnode:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:'besu --data-path=data --genesis-file=../genesis.json --bootnodes=<Node-1 Enode URL> --p2p-port=30307 --rpc-http-enabled --rpc-http-api=ETH,NET,IBFT --host-allowlist="*" --rpc-http-cors-origins="all" --rpc-http-port=8549 --profile=ENTERPRISE\n'})}),"\n",(0,a.jsx)(t.p,{children:"The command line specifies:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["The data directory for Node-5 using the ",(0,a.jsx)(t.a,{href:"/public-networks/reference/cli/options#data-path",children:(0,a.jsx)(t.code,{children:"--data-path"})})," option."]}),"\n",(0,a.jsxs)(t.li,{children:["A different port to Node-1 for P2P discovery using the ",(0,a.jsx)(t.a,{href:"/public-networks/reference/cli/options#p2p-port",children:(0,a.jsx)(t.code,{children:"--p2p-port"})})," option."]}),"\n",(0,a.jsxs)(t.li,{children:["A different port to Node-1 for HTTP JSON-RPC using the ",(0,a.jsx)(t.a,{href:"/public-networks/reference/cli/options#rpc-http-port",children:(0,a.jsx)(t.code,{children:"--rpc-http-port"})})," option."]}),"\n",(0,a.jsxs)(t.li,{children:["The enode URL of Node-1 using the ",(0,a.jsx)(t.a,{href:"/public-networks/reference/cli/options#bootnodes",children:(0,a.jsx)(t.code,{children:"--bootnodes"})})," option."]}),"\n",(0,a.jsxs)(t.li,{children:["Other options as for ",(0,a.jsx)(t.a,{href:"/private-networks/tutorials/ibft/#6-start-the-first-node-as-the-bootnode",children:"Node-1"}),"."]}),"\n"]}),"\n",(0,a.jsx)(t.h3,{id:"3-copy-the-address-of-the-node",children:"3. Copy the address of the node"}),"\n",(0,a.jsx)(t.p,{children:"Copy the address of the node. You can find the address in the logs when starting the new node:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"2021-05-28 09:49:00.881+10:00 | main | INFO  | DefaultP2PNetwork | Node address 0x90626e6a67445aabf1c0615410d108d4733aa90b\n"})}),"\n",(0,a.jsxs)(t.p,{children:["Or use the ",(0,a.jsx)(t.a,{href:"/public-networks/reference/cli/subcommands#export-address",children:(0,a.jsx)(t.code,{children:"public-key export-address"})})," subcommand:"]}),"\n",(0,a.jsxs)(o.A,{children:[(0,a.jsx)(s.A,{value:"Subcommand",label:"Subcommand",default:!0,children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"besu --data-path=IBFT-Network/Node-5/data public-key export-address\n"})})}),(0,a.jsx)(s.A,{value:"Output",label:"Output",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"0x90626e6a67445aabf1c0615410d108d4733aa90b\n"})})})]}),"\n",(0,a.jsx)(t.h3,{id:"4-propose-adding-the-new-validator",children:"4. Propose adding the new validator"}),"\n",(0,a.jsxs)(t.p,{children:["Propose adding the new validator from more than half the number of current validators, using ",(0,a.jsx)(t.a,{href:"/public-networks/reference/api/#ibft_proposevalidatorvote",children:(0,a.jsx)(t.code,{children:"ibft_proposeValidatorVote"})}),", specifying the address of the proposed validator and ",(0,a.jsx)(t.code,{children:"true"}),":"]}),"\n",(0,a.jsxs)(o.A,{children:[(0,a.jsx)(s.A,{value:"curl HTTP request",label:"curl HTTP request",default:!0,children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:'curl -X POST --data \'{"jsonrpc":"2.0","method":"ibft_proposeValidatorVote","params":["0x90626e6a67445aabf1c0615410d108d4733aa90b", true], "id":1}\' http://127.0.0.1:8545/ -H "Content-Type: application/json"\n'})})}),(0,a.jsx)(s.A,{value:"JSON result",label:"JSON result",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-json",children:'{\n  "jsonrpc": "2.0",\n  "id": 1,\n  "result": true\n}\n'})})})]}),"\n",(0,a.jsx)(t.p,{children:"Repeat the proposal process for this candidate node from at least two of the other nodes."}),"\n",(0,a.jsx)(t.h3,{id:"5-verify-the-addition-of-the-new-validator",children:"5. Verify the addition of the new validator"}),"\n",(0,a.jsxs)(t.p,{children:["Verify that the new validator is now in the list of validators using ",(0,a.jsx)(t.a,{href:"/public-networks/reference/api/#ibft_getvalidatorsbyblocknumber",children:(0,a.jsx)(t.code,{children:"ibft_getValidatorsByBlockNumber"})}),":"]}),"\n",(0,a.jsxs)(o.A,{children:[(0,a.jsx)(s.A,{value:"curl HTTP request",label:"curl HTTP request",default:!0,children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:'curl -X POST --data \'{"jsonrpc":"2.0","method":"ibft_getValidatorsByBlockNumber","params":["latest"], "id":1}\' http://127.0.0.1:8545/ -H "Content-Type: application/json"\n'})})}),(0,a.jsx)(s.A,{value:"JSON result",label:"JSON result",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-json",children:'[\n  "0x189d23d201b03ae1cf9113672df29a5d672aefa3",\n  "0x2aabbc1bb9bacef60a09764d1a1f4f04a47885c1",\n  "0x44b07d2c28b8ed8f02b45bd84ac7d9051b3349e6",\n  "0x4c1ccd426833b9782729a212c857f2f03b7b4c0d",\n  "0x90626e6a67445aabf1c0615410d108d4733aa90b"\n]\n'})})})]}),"\n",(0,a.jsx)(t.p,{children:"The list of validators contains 5 addresses now."}),"\n",(0,a.jsx)(t.h2,{id:"remove-a-validator",children:"Remove a validator"}),"\n",(0,a.jsxs)(t.p,{children:["The process for removing a validator is similar to ",(0,a.jsx)(t.a,{href:"#add-a-validator",children:"adding a validator"})," starting from step 2, except you specify ",(0,a.jsx)(t.code,{children:"false"})," as the second parameter of ",(0,a.jsx)(t.a,{href:"/public-networks/reference/api/#ibft_proposevalidatorvote",children:(0,a.jsx)(t.code,{children:"ibft_proposeValidatorVote"})}),"."]})]})}function p(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},19365:(e,t,r)=>{r.d(t,{A:()=>s});r(96540);var a=r(18215);const n={tabItem:"tabItem_Ymn6"};var o=r(74848);function s(e){let{children:t,hidden:r,className:s}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,a.A)(n.tabItem,s),hidden:r,children:t})}},11470:(e,t,r)=>{r.d(t,{A:()=>k});var a=r(96540),n=r(18215),o=r(23104),s=r(56347),i=r(205),l=r(57485),d=r(31682),c=r(70679);function u(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:r}=e;return(0,a.useMemo)((()=>{const e=t??function(e){return u(e).map((e=>{let{props:{value:t,label:r,attributes:a,default:n}}=e;return{value:t,label:r,attributes:a,default:n}}))}(r);return function(e){const t=(0,d.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function p(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:r}=e;const n=(0,s.W6)(),o=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,l.aZ)(o),(0,a.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function b(e){const{defaultValue:t,queryString:r=!1,groupId:n}=e,o=h(e),[s,l]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=r.find((e=>e.default))??r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[d,u]=f({queryString:r,groupId:n}),[b,v]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,c.Dv)(r);return[n,(0,a.useCallback)((e=>{r&&o.set(e)}),[r,o])]}({groupId:n}),m=(()=>{const e=d??b;return p({value:e,tabValues:o})?e:null})();(0,i.A)((()=>{m&&l(m)}),[m]);return{selectedValue:s,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),v(e)}),[u,v,o]),tabValues:o}}var v=r(92303);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=r(74848);function j(e){let{className:t,block:r,selectedValue:a,selectValue:s,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:d}=(0,o.a_)(),c=e=>{const t=e.currentTarget,r=l.indexOf(t),n=i[r].value;n!==a&&(d(t),s(n))},u=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const r=l.indexOf(e.currentTarget)+1;t=l[r]??l[0];break}case"ArrowLeft":{const r=l.indexOf(e.currentTarget)-1;t=l[r]??l[l.length-1];break}}t?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.A)("tabs",{"tabs--block":r},t),children:i.map((e=>{let{value:t,label:r,attributes:o}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:e=>l.push(e),onKeyDown:u,onClick:c,...o,className:(0,n.A)("tabs__item",m.tabItem,o?.className,{"tabs__item--active":a===t}),children:r??t},t)}))})}function g(e){let{lazy:t,children:r,selectedValue:o}=e;const s=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===o));return e?(0,a.cloneElement)(e,{className:(0,n.A)("margin-top--md",e.props.className)}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==o})))})}function w(e){const t=b(e);return(0,x.jsxs)("div",{className:(0,n.A)("tabs-container",m.tabList),children:[(0,x.jsx)(j,{...t,...e}),(0,x.jsx)(g,{...t,...e})]})}function k(e){const t=(0,v.A)();return(0,x.jsx)(w,{...e,children:u(e.children)},String(t))}},28453:(e,t,r)=>{r.d(t,{R:()=>s,x:()=>i});var a=r(96540);const n={},o=a.createContext(n);function s(e){const t=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),a.createElement(o.Provider,{value:t},e.children)}}}]);