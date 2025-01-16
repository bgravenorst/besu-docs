"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[8573],{78368:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>c,toc:()=>h});var s=n(74848),r=n(28453),a=n(11470),o=n(19365);const l={title:"Connect to a testnet",sidebar_position:3,Description:"How to connect to a testnet",tags:["public networks"]},i="Connect to a testnet",c={id:"public-networks/get-started/connect/testnet",title:"Connect to a testnet",description:"Run Besu as an execution client with any consensus client on the Holesky, Sepolia, and Ephemery testnets.",source:"@site/docs/public-networks/get-started/connect/testnet.md",sourceDirName:"public-networks/get-started/connect",slug:"/public-networks/get-started/connect/testnet",permalink:"/public-networks/get-started/connect/testnet",draft:!1,unlisted:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/docs/public-networks/get-started/connect/testnet.md",tags:[{inline:!0,label:"public networks",permalink:"/tags/public-networks"}],version:"current",lastUpdatedAt:1736811414e3,sidebarPosition:3,frontMatter:{title:"Connect to a testnet",sidebar_position:3,Description:"How to connect to a testnet",tags:["public networks"]},sidebar:"publicDocSidebar",previous:{title:"Connect to Mainnet",permalink:"/public-networks/get-started/connect/mainnet"},next:{title:"Migrate to Besu",permalink:"/public-networks/get-started/migrate-to-besu"}},u={},h=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Steps",id:"steps",level:2},{value:"1. Generate the shared secret",id:"1-generate-the-shared-secret",level:3},{value:"2. Generate validator keys",id:"2-generate-validator-keys",level:3},{value:"3. Start Besu",id:"3-start-besu",level:3},{value:"4. Start the consensus client",id:"4-start-the-consensus-client",level:3},{value:"5. Wait for the clients to sync",id:"5-wait-for-the-clients-to-sync",level:3},{value:"6. Stake ETH",id:"6-stake-eth",level:3}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"connect-to-a-testnet",children:"Connect to a testnet"})}),"\n",(0,s.jsxs)(t.p,{children:["Run Besu as an ",(0,s.jsx)(t.a,{href:"/public-networks/concepts/node-clients#execution-clients",children:"execution client"})," with any consensus client on the ",(0,s.jsx)(t.a,{href:"https://github.com/eth-clients/holesky",children:"Holesky"}),", ",(0,s.jsx)(t.a,{href:"https://github.com/eth-clients/sepolia",children:"Sepolia"}),", and ",(0,s.jsx)(t.a,{href:"https://github.com/ephemery-testnet/ephemery-resources",children:"Ephemery"})," testnets."]}),"\n",(0,s.jsxs)(t.p,{children:["If you're using ",(0,s.jsx)(t.a,{href:"https://docs.teku.consensys.net/en/latest/",children:"Teku"})," as a consensus client, you can follow the ",(0,s.jsx)(t.a,{href:"/public-networks/tutorials/besu-teku-testnet",children:"Besu and Teku testnet tutorial"}),"."]}),"\n",(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsxs)(t.p,{children:["Sepolia is a permissioned network and you can't run a validator client on it without ",(0,s.jsx)(t.a,{href:"https://notes.ethereum.org/zvkfSmYnT0-uxwwEegbCqg",children:"requesting to become a validator"})," first. You can connect your consensus client using the beacon node only, without any validator duties."]})}),"\n",(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsx)(t.p,{children:"Ephemery is a single network that resets to the genesis block after a set period. The network focuses on\nshort-term, intensive testing use cases. This approach avoids issues like insufficient testnet funds, inactive\nvalidators, and state bloat that long-running testnets face."})}),"\n",(0,s.jsx)(t.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"/public-networks/get-started/install/binary-distribution",children:"Besu installed"}),"."]}),"\n",(0,s.jsxs)(t.li,{children:["A consensus client installed. For example, ",(0,s.jsx)(t.a,{href:"https://docs.teku.consensys.net/en/latest/",children:"Teku"}),"."]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"steps",children:"Steps"}),"\n",(0,s.jsx)(t.h3,{id:"1-generate-the-shared-secret",children:"1. Generate the shared secret"}),"\n",(0,s.jsx)(t.p,{children:"Run the following command:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:'openssl rand -hex 32 | tr -d "\\n" > jwtsecret.hex\n'})}),"\n",(0,s.jsxs)(t.p,{children:["You will specify ",(0,s.jsx)(t.code,{children:"jwtsecret.hex"})," when starting Besu and the consensus client. This is a shared JWT secret the clients use to authenticate each other when using the ",(0,s.jsx)(t.a,{href:"/public-networks/how-to/use-engine-api",children:"Engine API"}),"."]}),"\n",(0,s.jsx)(t.h3,{id:"2-generate-validator-keys",children:"2. Generate validator keys"}),"\n",(0,s.jsxs)(t.p,{children:["If you're running the consensus client as a beacon node only, skip to the ",(0,s.jsx)(t.a,{href:"#3-start-besu",children:"next step"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["If you're also running the consensus client as a validator client, create a test Ethereum address (you can do this in ",(0,s.jsx)(t.a,{href:"https://metamask.zendesk.com/hc/en-us/articles/360015289452-How-to-create-an-additional-account-in-your-wallet",children:"MetaMask"}),"). Fund this address with testnet ETH (32 ETH and gas fees for each validator) using a faucet. See the list of ",(0,s.jsx)(t.a,{href:"https://github.com/eth-clients/holesky",children:"Holesky faucets"}),", ",(0,s.jsx)(t.a,{href:"https://github.com/eth-clients/sepolia#meta-data-sepolia",children:"Sepolia faucets"}),", and ",(0,s.jsx)(t.a,{href:"https://ephemery-faucet.pk910.de/",children:"Ephemery faucets"}),"."]}),"\n",(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsxs)(t.p,{children:["If you can't get testnet ETH using the faucet, you can ask for help on the ",(0,s.jsx)(t.a,{href:"https://discord.gg/ethstaker",children:"EthStaker Discord"}),"."]})}),"\n",(0,s.jsxs)(t.p,{children:["Generate validator keys for one or more validators using the ",(0,s.jsx)(t.a,{href:"https://holesky.launchpad.ethereum.org/",children:"Holesky Staking Launchpad"}),", ",(0,s.jsx)(t.a,{href:"https://launchpad.ephemery.dev/",children:"Ephemery Staking Launchpad"}),", or ",(0,s.jsx)(t.a,{href:"https://notes.ethereum.org/zvkfSmYnT0-uxwwEegbCqg",children:"request to become validator on Sepolia"}),"."]}),"\n",(0,s.jsx)(t.admonition,{type:"info",children:(0,s.jsxs)(t.p,{children:["Save the password you use to generate each key pair in a ",(0,s.jsx)(t.code,{children:".txt"})," file. You should also have a ",(0,s.jsx)(t.code,{children:".json"})," file for each validator key pair."]})}),"\n",(0,s.jsx)(t.h3,{id:"3-start-besu",children:"3. Start Besu"}),"\n",(0,s.jsxs)(t.p,{children:["Run the following command or specify the options in a ",(0,s.jsx)(t.a,{href:"/public-networks/how-to/configure-besu/",children:"configuration file"}),":"]}),"\n",(0,s.jsxs)(a.A,{children:[(0,s.jsx)(o.A,{value:"Holesky",label:"Holesky",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:'besu \\\n  --network=holesky           \\\n  --rpc-http-enabled=true     \\\n  --rpc-http-host=0.0.0.0     \\\n  --rpc-http-cors-origins="*" \\\n  --rpc-ws-enabled=true       \\\n  --rpc-ws-host=0.0.0.0       \\\n  --host-allowlist="*"        \\\n  --engine-host-allowlist="*" \\\n  --engine-rpc-enabled        \\\n  --engine-jwt-secret=<path to jwtsecret.hex>\n'})})}),(0,s.jsx)(o.A,{value:"Sepolia",label:"Sepolia",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:'besu \\\n  --network=sepolia           \\\n  --rpc-http-enabled=true     \\\n  --rpc-http-host=0.0.0.0     \\\n  --rpc-http-cors-origins="*" \\\n  --rpc-ws-enabled=true       \\\n  --rpc-ws-host=0.0.0.0       \\\n  --host-allowlist="*"        \\\n  --engine-host-allowlist="*" \\\n  --engine-rpc-enabled        \\\n  --engine-jwt-secret=<path to jwtsecret.hex>\n'})})}),(0,s.jsx)(o.A,{value:"Ephemery",label:"Ephemery",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:'besu \\\n  --network=ephemery          \\\n  --rpc-http-enabled=true     \\\n  --rpc-http-host=0.0.0.0     \\\n  --rpc-http-cors-origins="*" \\\n  --rpc-ws-enabled=true       \\\n  --rpc-ws-host=0.0.0.0       \\\n  --host-allowlist="*"        \\\n  --engine-host-allowlist="*" \\\n  --engine-rpc-enabled        \\\n  --engine-jwt-secret=<path to jwtsecret.hex>\n'})})})]}),"\n",(0,s.jsxs)(t.p,{children:["Specify the path to the ",(0,s.jsx)(t.code,{children:"jwtsecret.hex"})," file generated in ",(0,s.jsx)(t.a,{href:"#1-generate-the-shared-secret",children:"step 1"})," using the ",(0,s.jsx)(t.a,{href:"/public-networks/reference/cli/options#engine-jwt-secret",children:(0,s.jsx)(t.code,{children:"--engine-jwt-secret"})})," option."]}),"\n",(0,s.jsxs)(t.p,{children:["You can modify the option values and add other ",(0,s.jsx)(t.a,{href:"/public-networks/reference/cli/options",children:"command line options"})," as needed."]}),"\n",(0,s.jsx)(t.h3,{id:"4-start-the-consensus-client",children:"4. Start the consensus client"}),"\n",(0,s.jsx)(t.p,{children:"Refer to your consensus client documentation to configure and start the consensus client."}),"\n",(0,s.jsx)(t.admonition,{type:"info",children:(0,s.jsx)(t.p,{children:"If you're running a validator client, make sure you set a fee recipient address."})}),"\n",(0,s.jsxs)(t.p,{children:["If you're using Teku, follow the ",(0,s.jsx)(t.a,{href:"/public-networks/tutorials/besu-teku-testnet#5-start-teku",children:"Besu and Teku testnet tutorial"}),"."]}),"\n",(0,s.jsx)(t.h3,{id:"5-wait-for-the-clients-to-sync",children:"5. Wait for the clients to sync"}),"\n",(0,s.jsx)(t.p,{children:"After starting Besu and the consensus client, your node starts syncing and connecting to peers."}),"\n",(0,s.jsxs)(a.A,{children:[(0,s.jsx)(o.A,{value:"Besu logs",label:"Besu logs",default:!0,children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:'{"@timestamp":"2023-02-03T04:43:49,555","level":"INFO","thread":"main","class":"DefaultSynchronizer","message":"Starting synchronizer.","throwable":""}\n{"@timestamp":"2023-02-03T04:43:49,556","level":"INFO","thread":"main","class":"FastSyncDownloader","message":"Starting sync","throwable":""}\n{"@timestamp":"2023-02-03T04:43:49,559","level":"INFO","thread":"main","class":"Runner","message":"Ethereum main loop is up.","throwable":""}\n{"@timestamp":"2023-02-03T04:43:53,106","level":"INFO","thread":"Timer-0","class":"DNSResolver","message":"Resolved 2409 nodes","throwable":""}\n{"@timestamp":"2023-02-03T04:45:04,803","level":"INFO","thread":"nioEventLoopGroup-3-10","class":"SnapWorldStateDownloader","message":"Downloading world state from peers for pivot block 16545859 (0x616ae3c4cf85f95a9bce2814a7282d75dc2eac36\ncb9f0fcc6f16386df70da3c5). State root 0xa7114541f42c62a72c8b6bb9901c2ccf4b424cd7f76570a67b82a183b02f25dc pending requests 0","throwable":""}\n{"@timestamp":"2023-02-03T04:46:04,834","level":"INFO","thread":"EthScheduler-Services-3 (batchPersistAccountData)","class":"SnapsyncMetricsManager","message":"Worldstate download progress: 0.08%, Peer count: 8","throwable":""}\n{"@timestamp":"2023-02-03T04:48:01,840","level":"INFO","thread":"EthScheduler-Services-3 (batchPersistAccountData)","class":"SnapsyncMetricsManager","message":"Worldstate download progress: 0.23%, Peer count: 8","throwable":""}\n{"@timestamp":"2023-02-03T04:49:09,931","level":"INFO","thread":"EthScheduler-Services-3 (batchPersistAccountData)","class":"SnapsyncMetricsManager","message":"Worldstate download progress: 0.41%, Peer count: 11","throwable":""}\n{"@timestamp":"2023-02-03T04:50:12,466","level":"INFO","thread":"EthScheduler-Services-3 (batchPersistAccountData)","class":"SnapsyncMetricsManager","message":"Worldstate download progress: 0.61%, Peer count: 10","throwable":""}\n{"@timestamp":"2023-02-03T04:51:20,977","level":"INFO","thread":"EthScheduler-Services-3 (batchPersistAccountData)","class":"SnapsyncMetricsManager","message":"Worldstate download progress: 0.75%, Peer count: 10","throwable":""}\n{"@timestamp":"2023-02-03T04:51:28,985","level":"INFO","thread":"EthScheduler-Services-29 (importBlock)","class":"FastImportBlocksStep","message":"Block import progress: 180400 of 16545859 (1%)","throwable":""}\n'})})}),(0,s.jsx)(o.A,{value:"Teku logs",label:"Teku logs",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"2022-03-21 20:43:24.355 INFO  - Syncing     *** Target slot: 76092, Head slot: 2680, Remaining slots: 73412, Connected peers: 8\n2022-03-21 20:43:36.363 INFO  - Syncing     *** Target slot: 76093, Head slot: 2879, Remaining slots: 73214, Connected peers: 10\n2022-03-21 20:43:48.327 INFO  - Syncing     *** Target slot: 76094, Head slot: 3080, Remaining slots: 73014, Connected peers: 8\n2022-03-21 20:44:00.339 INFO  - Syncing     *** Target slot: 76095, Head slot: 3317, Remaining slots: 72778, Connected peers: 6\n2022-03-21 20:44:12.353 INFO  - Syncing     *** Target slot: 76096, Head slot: 3519, Remaining slots: 72577, Connected peers: 9\n"})})})]}),"\n",(0,s.jsx)(t.p,{children:"If you're running the consensus client as a beacon node only, you're all set. If you're also running the consensus client as a validator client, ensure your clients are fully synced before submitting your staking deposit in the next step. This can take several days."}),"\n",(0,s.jsx)(t.h3,{id:"6-stake-eth",children:"6. Stake ETH"}),"\n",(0,s.jsxs)(t.p,{children:["Stake your testnet ETH for one or more validators using the ",(0,s.jsx)(t.a,{href:"https://holesky.launchpad.ethereum.org/",children:"Holesky Staking Launchpad"})," or ",(0,s.jsx)(t.a,{href:"https://launchpad.ephemery.dev/",children:"Ephemery Staking Launchpad"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["You can check your validator status by searching your Ethereum address on the ",(0,s.jsx)(t.a,{href:"https://holesky.beaconcha.in/",children:"Holesky Beacon Chain explorer"})," or ",(0,s.jsx)(t.a,{href:"https://beaconchain.ephemery.dev/",children:"Ephemery Beacon Chain explorer"}),". It may take up to multiple days for your validator to be activated and start proposing blocks."]})]})}function p(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},19365:(e,t,n)=>{n.d(t,{A:()=>o});n(96540);var s=n(18215);const r={tabItem:"tabItem_Ymn6"};var a=n(74848);function o(e){let{children:t,hidden:n,className:o}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,s.A)(r.tabItem,o),hidden:n,children:t})}},11470:(e,t,n)=>{n.d(t,{A:()=>w});var s=n(96540),r=n(18215),a=n(23104),o=n(56347),l=n(205),i=n(57485),c=n(31682),u=n(70679);function h(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function d(e){const{values:t,children:n}=e;return(0,s.useMemo)((()=>{const e=t??function(e){return h(e).map((e=>{let{props:{value:t,label:n,attributes:s,default:r}}=e;return{value:t,label:n,attributes:s,default:r}}))}(n);return function(e){const t=(0,c.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:n}=e;const r=(0,o.W6)(),a=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,i.aZ)(a),(0,s.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(r.location.search);t.set(a,e),r.replace({...r.location,search:t.toString()})}),[a,r])]}function m(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,a=d(e),[o,i]=(0,s.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const s=n.find((e=>e.default))??n[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:t,tabValues:a}))),[c,h]=g({queryString:n,groupId:r}),[m,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,a]=(0,u.Dv)(n);return[r,(0,s.useCallback)((e=>{n&&a.set(e)}),[n,a])]}({groupId:r}),b=(()=>{const e=c??m;return p({value:e,tabValues:a})?e:null})();(0,l.A)((()=>{b&&i(b)}),[b]);return{selectedValue:o,selectValue:(0,s.useCallback)((e=>{if(!p({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);i(e),h(e),f(e)}),[h,f,a]),tabValues:a}}var f=n(92303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=n(74848);function y(e){let{className:t,block:n,selectedValue:s,selectValue:o,tabValues:l}=e;const i=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.a_)(),u=e=>{const t=e.currentTarget,n=i.indexOf(t),r=l[n].value;r!==s&&(c(t),o(r))},h=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=i.indexOf(e.currentTarget)+1;t=i[n]??i[0];break}case"ArrowLeft":{const n=i.indexOf(e.currentTarget)-1;t=i[n]??i[i.length-1];break}}t?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":n},t),children:l.map((e=>{let{value:t,label:n,attributes:a}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,ref:e=>i.push(e),onKeyDown:h,onClick:u,...a,className:(0,r.A)("tabs__item",b.tabItem,a?.className,{"tabs__item--active":s===t}),children:n??t},t)}))})}function v(e){let{lazy:t,children:n,selectedValue:a}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===a));return e?(0,s.cloneElement)(e,{className:(0,r.A)("margin-top--md",e.props.className)}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:o.map(((e,t)=>(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function j(e){const t=m(e);return(0,x.jsxs)("div",{className:(0,r.A)("tabs-container",b.tabList),children:[(0,x.jsx)(y,{...t,...e}),(0,x.jsx)(v,{...t,...e})]})}function w(e){const t=(0,f.A)();return(0,x.jsx)(j,{...e,children:h(e.children)},String(t))}},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>l});var s=n(96540);const r={},a=s.createContext(r);function o(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);