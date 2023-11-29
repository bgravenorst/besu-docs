"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[70149],{3905:(e,a,n)=>{n.d(a,{Zo:()=>d,kt:()=>f});var t=n(67294);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function l(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?l(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function i(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},l=Object.keys(e);for(t=0;t<l.length;t++)n=l[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)n=l[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=t.createContext({}),s=function(e){var a=t.useContext(c),n=a;return e&&(n="function"==typeof e?e(a):o(o({},a),e)),n},d=function(e){var a=s(e.components);return t.createElement(c.Provider,{value:a},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},b=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=s(n),b=r,f=p["".concat(c,".").concat(b)]||p[b]||u[b]||l;return n?t.createElement(f,o(o({ref:a},d),{},{components:n})):t.createElement(f,o({ref:a},d))}));function f(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=b;var i={};for(var c in a)hasOwnProperty.call(a,c)&&(i[c]=a[c]);i.originalType=e,i[p]="string"==typeof e?e:r,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return t.createElement.apply(null,o)}return t.createElement.apply(null,n)}b.displayName="MDXCreateElement"},85162:(e,a,n)=>{n.d(a,{Z:()=>o});var t=n(67294),r=n(86010);const l={tabItem:"tabItem_Ymn6"};function o(e){let{children:a,hidden:n,className:o}=e;return t.createElement("div",{role:"tabpanel",className:(0,r.Z)(l.tabItem,o),hidden:n},a)}},74866:(e,a,n)=>{n.d(a,{Z:()=>v});var t=n(87462),r=n(67294),l=n(86010),o=n(12466),i=n(16550),c=n(91980),s=n(67392),d=n(50012);function p(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:a}=e;return!!a&&"object"==typeof a&&"value"in a}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:a,label:n,attributes:t,default:r}}=e;return{value:a,label:n,attributes:t,default:r}}))}function u(e){const{values:a,children:n}=e;return(0,r.useMemo)((()=>{const e=a??p(n);return function(e){const a=(0,s.l)(e,((e,a)=>e.value===a.value));if(a.length>0)throw new Error(`Docusaurus error: Duplicate values "${a.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[a,n])}function b(e){let{value:a,tabValues:n}=e;return n.some((e=>e.value===a))}function f(e){let{queryString:a=!1,groupId:n}=e;const t=(0,i.k6)(),l=function(e){let{queryString:a=!1,groupId:n}=e;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:a,groupId:n});return[(0,c._X)(l),(0,r.useCallback)((e=>{if(!l)return;const a=new URLSearchParams(t.location.search);a.set(l,e),t.replace({...t.location,search:a.toString()})}),[l,t])]}function m(e){const{defaultValue:a,queryString:n=!1,groupId:t}=e,l=u(e),[o,i]=(0,r.useState)((()=>function(e){let{defaultValue:a,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!b({value:a,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${a}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return a}const t=n.find((e=>e.default))??n[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:a,tabValues:l}))),[c,s]=f({queryString:n,groupId:t}),[p,m]=function(e){let{groupId:a}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(a),[t,l]=(0,d.Nk)(n);return[t,(0,r.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:t}),g=(()=>{const e=c??p;return b({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{g&&i(g)}),[g]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!b({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),s(e),m(e)}),[s,m,l]),tabValues:l}}var g=n(72389);const k={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function h(e){let{className:a,block:n,selectedValue:i,selectValue:c,tabValues:s}=e;const d=[],{blockElementScrollPositionUntilNextRender:p}=(0,o.o5)(),u=e=>{const a=e.currentTarget,n=d.indexOf(a),t=s[n].value;t!==i&&(p(a),c(t))},b=e=>{let a=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=d.indexOf(e.currentTarget)+1;a=d[n]??d[0];break}case"ArrowLeft":{const n=d.indexOf(e.currentTarget)-1;a=d[n]??d[d.length-1];break}}a?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},a)},s.map((e=>{let{value:a,label:n,attributes:o}=e;return r.createElement("li",(0,t.Z)({role:"tab",tabIndex:i===a?0:-1,"aria-selected":i===a,key:a,ref:e=>d.push(e),onKeyDown:b,onClick:u},o,{className:(0,l.Z)("tabs__item",k.tabItem,o?.className,{"tabs__item--active":i===a})}),n??a)})))}function x(e){let{lazy:a,children:n,selectedValue:t}=e;const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(a){const e=l.find((e=>e.props.value===t));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map(((e,a)=>(0,r.cloneElement)(e,{key:a,hidden:e.props.value!==t}))))}function y(e){const a=m(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",k.tabList)},r.createElement(h,(0,t.Z)({},e,a)),r.createElement(x,(0,t.Z)({},e,a)))}function v(e){const a=(0,g.Z)();return r.createElement(y,(0,t.Z)({key:String(a)},e))}},2429:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>d,contentTitle:()=>c,default:()=>f,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var t=n(87462),r=(n(67294),n(3905)),l=n(74866),o=n(85162);const i={title:"Engine API",description:"Engine API methods reference",tags:["public networks"]},c="Engine API methods",s={unversionedId:"public-networks/reference/engine-api/index",id:"version-23.4.1/public-networks/reference/engine-api/index",title:"Engine API",description:"Engine API methods reference",source:"@site/versioned_docs/version-23.4.1/public-networks/reference/engine-api/index.md",sourceDirName:"public-networks/reference/engine-api",slug:"/public-networks/reference/engine-api/",permalink:"/23.4.1/public-networks/reference/engine-api/",draft:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/versioned_docs/version-23.4.1/public-networks/reference/engine-api/index.md",tags:[{label:"public networks",permalink:"/23.4.1/tags/public-networks"}],version:"23.4.1",lastUpdatedAt:1700682292,formattedLastUpdatedAt:"Nov 22, 2023",frontMatter:{title:"Engine API",description:"Engine API methods reference",tags:["public networks"]},sidebar:"publicDocSidebar",previous:{title:"Objects",permalink:"/23.4.1/public-networks/reference/api/objects"},next:{title:"Objects",permalink:"/23.4.1/public-networks/reference/engine-api/objects"}},d={},p=[{value:"Methods",id:"methods",level:2},{value:"<code>engine_exchangeCapabilities</code>",id:"engine_exchangecapabilities",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"<code>engine_exchangeTransitionConfigurationV1</code>",id:"engine_exchangetransitionconfigurationv1",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"<code>engine_forkchoiceUpdatedV1</code>",id:"engine_forkchoiceupdatedv1",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-2",level:4},{value:"<code>engine_getPayloadBodiesByHashV1</code>",id:"engine_getpayloadbodiesbyhashv1",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-3",level:4},{value:"<code>engine_getPayloadBodiesByRangeV1</code>",id:"engine_getpayloadbodiesbyrangev1",level:3},{value:"Parameters",id:"parameters-4",level:4},{value:"Returns",id:"returns-4",level:4},{value:"<code>engine_getPayloadV1</code>",id:"engine_getpayloadv1",level:3},{value:"Parameters",id:"parameters-5",level:4},{value:"Returns",id:"returns-5",level:4},{value:"<code>engine_newPayloadV1</code>",id:"engine_newpayloadv1",level:3},{value:"Parameters",id:"parameters-6",level:4},{value:"Returns",id:"returns-6",level:4}],u={toc:p},b="wrapper";function f(e){let{components:a,...n}=e;return(0,r.kt)(b,(0,t.Z)({},u,n,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"engine-api-methods"},"Engine API methods"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/23.4.1/public-networks/concepts/the-merge#execution-and-consensus-clients"},"Consensus and execution clients")," communicate with each other using the Engine API. When running Besu as an execution client, ",(0,r.kt)("a",{parentName:"p",href:"/23.4.1/public-networks/how-to/use-engine-api"},"use these API calls")," to communicate with a consensus client."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Ensure you enable the Engine API methods with the ",(0,r.kt)("a",{parentName:"p",href:"/23.4.1/public-networks/reference/cli/options#engine-rpc-enabled"},(0,r.kt)("inlineCode",{parentName:"a"},"--engine-rpc-enabled"))," CLI option.")),(0,r.kt)("p",null,"See the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ethereum/execution-apis/blob/0b965fb714ccd3faa3c939fdce1726e56679cdec/src/engine/specification.md"},"Ethereum Engine API specification")," for more information. Not all changes to the Engine API are documented on this page."),(0,r.kt)("h2",{id:"methods"},"Methods"),(0,r.kt)("h3",{id:"engine_exchangecapabilities"},(0,r.kt)("inlineCode",{parentName:"h3"},"engine_exchangeCapabilities")),(0,r.kt)("p",null,"Exchanges a list of supported Engine API methods between the consensus client and Besu."),(0,r.kt)("h4",{id:"parameters"},"Parameters"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"remoteCapabilities"),": ",(0,r.kt)("em",{parentName:"p"},"array")," of ",(0,r.kt)("em",{parentName:"p"},"strings")," - Engine API method names that the consensus client supports"),(0,r.kt)("h4",{id:"returns"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"localCapabilities"),": ",(0,r.kt)("em",{parentName:"p"},"array")," of ",(0,r.kt)("em",{parentName:"p"},"strings")," - Engine API method names that Besu supports"),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{label:"curl HTTP",value:"tab1",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST --data \'{"jsonrpc":"2.0","method":"engine_exchangeCapabilities","params":[["engine_exchangeTransitionConfigurationV1","engine_forkchoiceUpdatedV1","engine_getPayloadBodiesByHash","engine_getPayloadBodiesByRangeV1","engine_getPayloadV1","engine_newPayloadV1"]],"id":67}\' http://127.0.0.1:8550\n'))),(0,r.kt)(o.Z,{label:"wscat WS",value:"tab2",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "jsonrpc": "2.0",\n  "method": "engine_exchangeCapabilities",\n  "params": [\n    [\n      "engine_exchangeTransitionConfigurationV1",\n      "engine_forkchoiceUpdatedV1",\n      "engine_getPayloadBodiesByHash",\n      "engine_getPayloadBodiesByRangeV1",\n      "engine_getPayloadV1",\n      "engine_newPayloadV1"\n    ]\n  ],\n  "id": 67\n}\n'))),(0,r.kt)(o.Z,{label:"JSON result",value:"tab3",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "jsonrpc": "2.0",\n  "id": 67,\n  "result": [\n    "engine_getPayloadV1",\n    "engine_getPayloadV2",\n    "engine_executePayloadV1",\n    "engine_newPayloadV1",\n    "engine_newPayloadV2",\n    "engine_forkchoiceUpdatedV1",\n    "engine_forkchoiceUpdatedV2",\n    "engine_exchangeTransitionConfigurationV1",\n    "engine_getPayloadBodiesByHashV1",\n    "engine_getPayloadBodiesByRangeV1"\n  ]\n}\n')))),(0,r.kt)("h3",{id:"engine_exchangetransitionconfigurationv1"},(0,r.kt)("inlineCode",{parentName:"h3"},"engine_exchangeTransitionConfigurationV1")),(0,r.kt)("p",null,"Sends the transition configuration to the consensus client to verify the configuration between both clients."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"The execution client runs this call every 60 seconds in the background. The log displays a warning message if the call hasn't been sent in 120 seconds.")),(0,r.kt)("h4",{id:"parameters-1"},"Parameters"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"transitionConfiguration"),": ",(0,r.kt)("em",{parentName:"p"},"object")," - ",(0,r.kt)("a",{parentName:"p",href:"/23.4.1/public-networks/reference/engine-api/objects#transition-configuration-object"},"Transition configuration object")),(0,r.kt)("h4",{id:"returns-1"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"transitionConfiguration"),": ",(0,r.kt)("em",{parentName:"p"},"object")," - ",(0,r.kt)("a",{parentName:"p",href:"/23.4.1/public-networks/reference/engine-api/objects#transition-configuration-object"},"Transition configuration object")),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{label:"curl HTTP",value:"tab1",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST --data \'{"jsonrpc":"2.0","method":"engine_exchangeTransitionConfigurationV1","params":[{"terminalTotalDifficulty": 0, "terminalBlockHash": "0x0000000000000000000000000000000000000000000000000000000000000000", "terminalBlockNumber": "0x1"}],"id":67}\' http://127.0.0.1:8550\n'))),(0,r.kt)(o.Z,{label:"wscat WS",value:"tab2",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "jsonrpc": "2.0",\n  "method": "engine_exchangeTransitionConfigurationV1",\n  "params": [\n    {\n      "terminalTotalDifficulty": 0,\n      "terminalBlockHash": "0x0000000000000000000000000000000000000000000000000000000000000000",\n      "terminalBlockNumber": "0x1"\n    }\n  ],\n  "id": 67\n}\n'))),(0,r.kt)(o.Z,{label:"JSON result",value:"tab3",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "jsonrpc": "2.0",\n  "id": 67,\n  "result": {\n    "terminalTotalDifficulty": 0,\n    "terminalBlockHash": "0x0000000000000000000000000000000000000000000000000000000000000000",\n    "terminalBlockNumber": "0x1"\n  },\n  "payloadId": null\n}\n')))),(0,r.kt)("h3",{id:"engine_forkchoiceupdatedv1"},(0,r.kt)("inlineCode",{parentName:"h3"},"engine_forkchoiceUpdatedV1")),(0,r.kt)("p",null,"Updates the fork choice with the consensus client."),(0,r.kt)("h4",{id:"parameters-2"},"Parameters"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"forkchoiceState"),": ",(0,r.kt)("em",{parentName:"p"},"object")," - ",(0,r.kt)("a",{parentName:"p",href:"/23.4.1/public-networks/reference/engine-api/objects#fork-choice-state-object"},"Fork choice state object"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"payloadAttributes"),": ",(0,r.kt)("em",{parentName:"p"},"object")," - ",(0,r.kt)("a",{parentName:"p",href:"/23.4.1/public-networks/reference/engine-api/objects#payload-attributes-object"},"Payload attribute object"),". Can be ",(0,r.kt)("inlineCode",{parentName:"p"},"null"),"."))),(0,r.kt)("h4",{id:"returns-2"},"Returns"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"payloadStatus"),": ",(0,r.kt)("em",{parentName:"p"},"object")," - ",(0,r.kt)("a",{parentName:"p",href:"/23.4.1/public-networks/reference/engine-api/objects#payload-status-object"},"Payload status object"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"payloadId"),": ",(0,r.kt)("em",{parentName:"p"},"data")," - identifier of the payload build process or ",(0,r.kt)("inlineCode",{parentName:"p"},"null")))),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{label:"curl HTTP",value:"tab1",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST --data \'{"jsonrpc":"2.0","method":"engine_forkchoiceUpdatedV1","params":[{"headBlockHash": "0x3559e851470f6e7bbed1db474980683e8c315bfce99b2a6ef47c057c04de7858", "safeBlockHash": "0x3559e851470f6e7bbed1db474980683e8c315bfce99b2a6ef47c057c04de7858", "finalizedBlockHash": "0x3b8fb240d288781d4aac94d3fd16809ee413bc99294a085798a589dae51ddd4a"},null],"id":67}\' http://127.0.0.1:8550\n'))),(0,r.kt)(o.Z,{label:"wscat WS",value:"tab2",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "jsonrpc": "2.0",\n  "method": "engine_forkchoiceUpdatedV1",\n  "params": [\n    {\n      "headBlockHash": "0x3559e851470f6e7bbed1db474980683e8c315bfce99b2a6ef47c057c04de7858",\n      "safeBlockHash": "0x3559e851470f6e7bbed1db474980683e8c315bfce99b2a6ef47c057c04de7858",\n      "finalizedBlockHash": "0x3b8fb240d288781d4aac94d3fd16809ee413bc99294a085798a589dae51ddd4a"\n    },\n    null\n  ],\n  "id": 67\n}\n'))),(0,r.kt)(o.Z,{label:"JSON result",value:"tab3",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "jsonrpc": "2.0",\n  "id": 67,\n  "result": {\n    "payloadStatus": {\n      "status": "VALID",\n      "latestValidHash": "0x3559e851470f6e7bbed1db474980683e8c315bfce99b2a6ef47c057c04de7858",\n      "validationError": null\n    },\n    "payloadId": null\n  }\n}\n')))),(0,r.kt)("h3",{id:"engine_getpayloadbodiesbyhashv1"},(0,r.kt)("inlineCode",{parentName:"h3"},"engine_getPayloadBodiesByHashV1")),(0,r.kt)("p",null,"Returns the bodies of the execution payloads corresponding to the specified block hashes."),(0,r.kt)("h4",{id:"parameters-3"},"Parameters"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"blockHashes"),": ",(0,r.kt)("strong",{parentName:"p"},"array")," of ",(0,r.kt)("strong",{parentName:"p"},"strings")," - Block hashes"),(0,r.kt)("h4",{id:"returns-3"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"engineGetPayloadBodiesResultV1"),": ",(0,r.kt)("strong",{parentName:"p"},"array")," of ",(0,r.kt)("strong",{parentName:"p"},"objects")," - Execution payload body objects"),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{label:"curl HTTP",value:"tab1",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST --data \'{"jsonrpc":"2.0","method":"engine_getPayloadBodiesByHashV1","params":[["0xd5f1812548be429cbdc6376b29611fc49e06f1359758c4ceaaa3b393e2239f9c","0xfe88c94d860f01a17f961bf4bdfb6e0c6cd10d3fda5cc861e805ca1240c58553"]],"id":1}\' http://127.0.0.1:8550\n'))),(0,r.kt)(o.Z,{label:"wscat WS",value:"tab2",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "jsonrpc": "2.0",\n  "method": "engine_getPayloadBodiesByHashV1",\n  "params": [\n    [\n      "0xd5f1812548be429cbdc6376b29611fc49e06f1359758c4ceaaa3b393e2239f9c",\n      "0xfe88c94d860f01a17f961bf4bdfb6e0c6cd10d3fda5cc861e805ca1240c58553"\n    ]\n  ],\n  "id": 67\n}\n'))),(0,r.kt)(o.Z,{label:"JSON result",value:"tab3",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "jsonrpc": "2.0",\n    "id": 67,\n    "result": [{\n      "transactions": ["0xf865808506fc23ac00830124f8940101010101010101010101010101010101010101018031a02c4d88bfdc2f6dbf82c33d235c4e785e9fc23b2d0fc7b9d20fc5e9674f1f9d15a016d6d69b925cf26128683ab4a096e196fbb1142d6c6d4e8d3481b9bef1bd0f65", "0x02f86c0701843b9aca008506fc23ac00830124f89402020202020202020202020202020202020202020180c080a039409b4e5603dd8c3cf38232348661a8e99ac518396eeaa128ec9ec2a3eb8127a06b21ab956f5f138cb44fda1a9055bd08980ea4f8040d877c00dac025608d0d95", ...],\n      "withdrawals": [{\n        "index" : "0xf0",\n        "validatorIndex" : "0xf0",\n        "address" : "0x00000000000000000000000000000000000010f0",\n        "amount" : "0x1"\n      }, {\n        "index" : "0xf1",\n        "validatorIndex" : "0xf1",\n        "address" : "0x00000000000000000000000000000000000010f1",\n        "amount" : "0x1"\n      }]\n    }, {\n      "transactions": ["0xf865108506fc23ac00830124f8940101010101010101010101010101010101010101018031a0d9712a3c40ae85aea4ad1bd95a0b7cc7bd805189a9e2517403b11a00a1530f81a053b53b0267a6dcfe9f9a1652307b396b3e8a65e65707a450e60c92baefdbcfbe", "0x02f86c0711843b9aca008506fc23ac00830124f89402020202020202020202020202020202020202020180c080a071d36bc93c7ae8cc5c01501e51e5e97a51aa541d1a89c809a2af7eb40e9bc2cba071644230e21c075c1da08916aff5efe9f95a6f6a4f94dc217f6c1bb4a3240b29", ...],\n      "withdrawals": [{\n        "index" : "0xf2",\n        "validatorIndex" : "0xf2",\n        "address" : "0x00000000000000000000000000000000000010f2",\n        "amount" : "0x1"\n      }, {\n        "index" : "0xf3",\n        "validatorIndex" : "0xf3",\n        "address" : "0x00000000000000000000000000000000000010f3",\n        "amount" : "0x1"\n      }]\n    }]\n}\n')))),(0,r.kt)("h3",{id:"engine_getpayloadbodiesbyrangev1"},(0,r.kt)("inlineCode",{parentName:"h3"},"engine_getPayloadBodiesByRangeV1")),(0,r.kt)("p",null,"Returns the bodies of the execution payloads corresponding to the specified range of block numbers."),(0,r.kt)("h4",{id:"parameters-4"},"Parameters"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"startBlockNumber"),": ",(0,r.kt)("em",{parentName:"p"},"string")," - Number of the starting block of the range, as a hexadecimal string")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"count"),": ",(0,r.kt)("em",{parentName:"p"},"string")," - Number of blocks in the range (including the starting block), as a hexadecimal string"))),(0,r.kt)("h4",{id:"returns-4"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"engineGetPayloadBodiesResultV1"),": ",(0,r.kt)("em",{parentName:"p"},"array")," of ",(0,r.kt)("em",{parentName:"p"},"objects")," - Execution payload body objects"),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{label:"curl HTTP",value:"tab1",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST --data \'{"jsonrpc":"2.0","method":"engine_getPayloadBodiesByRangeV1","params":["0x20", "0x2"],"id":1}\' http://127.0.0.1:8550\n'))),(0,r.kt)(o.Z,{label:"wscat WS",value:"tab2",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "jsonrpc": "2.0",\n  "method": "engine_getPayloadBodiesByRangeV1",\n  "params": ["0x20", "0x2"],\n  "id": 67\n}\n'))),(0,r.kt)(o.Z,{label:"JSON result",value:"tab3",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "jsonrpc": "2.0",\n    "id": 67,\n    "result": [{\n      "transactions": ["0xf865808506fc23ac00830124f8940101010101010101010101010101010101010101018031a02c4d88bfdc2f6dbf82c33d235c4e785e9fc23b2d0fc7b9d20fc5e9674f1f9d15a016d6d69b925cf26128683ab4a096e196fbb1142d6c6d4e8d3481b9bef1bd0f65", "0x02f86c0701843b9aca008506fc23ac00830124f89402020202020202020202020202020202020202020180c080a039409b4e5603dd8c3cf38232348661a8e99ac518396eeaa128ec9ec2a3eb8127a06b21ab956f5f138cb44fda1a9055bd08980ea4f8040d877c00dac025608d0d95", ...],\n      "withdrawals": [{\n        "index" : "0xf0",\n        "validatorIndex" : "0xf0",\n        "address" : "0x00000000000000000000000000000000000010f0",\n        "amount" : "0x1"\n      }, {\n        "index" : "0xf1",\n        "validatorIndex" : "0xf1",\n        "address" : "0x00000000000000000000000000000000000010f1",\n        "amount" : "0x1"\n      }]\n    }, {\n      "transactions": ["0xf865108506fc23ac00830124f8940101010101010101010101010101010101010101018031a0d9712a3c40ae85aea4ad1bd95a0b7cc7bd805189a9e2517403b11a00a1530f81a053b53b0267a6dcfe9f9a1652307b396b3e8a65e65707a450e60c92baefdbcfbe", "0x02f86c0711843b9aca008506fc23ac00830124f89402020202020202020202020202020202020202020180c080a071d36bc93c7ae8cc5c01501e51e5e97a51aa541d1a89c809a2af7eb40e9bc2cba071644230e21c075c1da08916aff5efe9f95a6f6a4f94dc217f6c1bb4a3240b29", ...],\n      "withdrawals": [{\n        "index" : "0xf2",\n        "validatorIndex" : "0xf2",\n        "address" : "0x00000000000000000000000000000000000010f2",\n        "amount" : "0x1"\n      }, {\n        "index" : "0xf3",\n        "validatorIndex" : "0xf3",\n        "address" : "0x00000000000000000000000000000000000010f3",\n        "amount" : "0x1"\n      }]\n    }]\n}\n')))),(0,r.kt)("h3",{id:"engine_getpayloadv1"},(0,r.kt)("inlineCode",{parentName:"h3"},"engine_getPayloadV1")),(0,r.kt)("p",null,"Prepares the payload to send to the consensus client."),(0,r.kt)("h4",{id:"parameters-5"},"Parameters"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"payloadId"),": ",(0,r.kt)("em",{parentName:"p"},"data")," - Identifier of the payload build process"),(0,r.kt)("h4",{id:"returns-5"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"executionPayload"),": ",(0,r.kt)("em",{parentName:"p"},"object")," - ",(0,r.kt)("a",{parentName:"p",href:"/23.4.1/public-networks/reference/engine-api/objects#execution-payload-object"},"Execution payload object")),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{label:"curl HTTP",value:"tab1",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST --data \'{"jsonrpc":"2.0","method":"engine_getPayloadV1","params":["0x0000000021f32cc1"],"id":1}\' http://127.0.0.1:8550\n'))),(0,r.kt)(o.Z,{label:"wscat WS",value:"tab2",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "jsonrpc": "2.0",\n  "method": "engine_getPayloadV1",\n  "params": ["0x0000000021f32cc1"],\n  "id": 67\n}\n'))),(0,r.kt)(o.Z,{label:"JSON result",value:"tab3",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "jsonrpc": "2.0",\n  "id": 67,\n  "result": {\n    "parentHash": "0x3b8fb240d288781d4aac94d3fd16809ee413bc99294a085798a589dae51ddd4a",\n    "feeRecipient": "0xa94f5374fce5edbc8e2a8697c15331677e6ebf0b",\n    "stateRoot": "0xca3149fa9e37db08d1cd49c9061db1002ef1cd58db2210f2115c8c989b2bdf45",\n    "receiptsRoot": "0x56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421",\n    "logsBloom": "0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",\n    "prevRandao": "0x0000000000000000000000000000000000000000000000000000000000000000",\n    "blockNumber": "0x1",\n    "gasLimit": "0x1c9c380",\n    "gasUsed": "0x0",\n    "timestamp": "0x5",\n    "extraData": "0x",\n    "baseFeePerGas": "0x7",\n    "blockHash": "0x3559e851470f6e7bbed1db474980683e8c315bfce99b2a6ef47c057c04de7858",\n    "transactions": []\n  }\n}\n')))),(0,r.kt)("h3",{id:"engine_newpayloadv1"},(0,r.kt)("inlineCode",{parentName:"h3"},"engine_newPayloadV1")),(0,r.kt)("p",null,"Executes the payload with the consensus client."),(0,r.kt)("h4",{id:"parameters-6"},"Parameters"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"executionPayload"),": ",(0,r.kt)("em",{parentName:"p"},"object")," - ",(0,r.kt)("a",{parentName:"p",href:"/23.4.1/public-networks/reference/engine-api/objects#execution-payload-object"},"Execution payload object")),(0,r.kt)("h4",{id:"returns-6"},"Returns"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"payloadStatus"),": ",(0,r.kt)("em",{parentName:"li"},"object")," - ",(0,r.kt)("a",{parentName:"li",href:"/23.4.1/public-networks/reference/engine-api/objects#payload-status-object"},"Payload status object"))),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{label:"curl HTTP",value:"tab1",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST --data \'{"jsonrpc":"2.0","method":"engine_newPayloadV1","params":[\n  {\n    "parentHash": "0x3b8fb240d288781d4aac94d3fd16809ee413bc99294a085798a589dae51ddd4a",\n    "feeRecipient": "0xa94f5374fce5edbc8e2a8697c15331677e6ebf0b",\n    "stateRoot": "0xca3149fa9e37db08d1cd49c9061db1002ef1cd58db2210f2115c8c989b2bdf45",\n    "receiptsRoot": "0x56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421",\n    "logsBloom": "0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",\n    "prevRandao": "0x0000000000000000000000000000000000000000000000000000000000000000",\n    "blockNumber": "0x1",\n    "gasLimit": "0x1c9c380",\n    "gasUsed": "0x0",\n    "timestamp": "0x5",\n    "extraData": "0x",\n    "baseFeePerGas": "0x7",\n    "blockHash": "0x3559e851470f6e7bbed1db474980683e8c315bfce99b2a6ef47c057c04de7858",\n    "transactions": []\n  }\n],"id":67}\' http://127.0.0.1:8550\n'))),(0,r.kt)(o.Z,{label:"wscat WS",value:"tab2",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "jsonrpc": "2.0",\n  "method": "engine_newPayloadV1",\n  "params": [\n    {\n      "parentHash": "0x3b8fb240d288781d4aac94d3fd16809ee413bc99294a085798a589dae51ddd4a",\n      "feeRecipient": "0xa94f5374fce5edbc8e2a8697c15331677e6ebf0b",\n      "stateRoot": "0xca3149fa9e37db08d1cd49c9061db1002ef1cd58db2210f2115c8c989b2bdf45",\n      "receiptsRoot": "0x56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421",\n      "logsBloom": "0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",\n      "prevRandao": "0x0000000000000000000000000000000000000000000000000000000000000000",\n      "blockNumber": "0x1",\n      "gasLimit": "0x1c9c380",\n      "gasUsed": "0x0",\n      "timestamp": "0x5",\n      "extraData": "0x",\n      "baseFeePerGas": "0x7",\n      "blockHash": "0x3559e851470f6e7bbed1db474980683e8c315bfce99b2a6ef47c057c04de7858",\n      "transactions": []\n    }\n  ],\n  "id": 67\n}\n'))),(0,r.kt)(o.Z,{label:"JSON result",value:"tab3",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "jsonrpc": "2.0",\n  "id": 1,\n  "result": {\n    "status": "VALID",\n    "latestValidHash": "0x3559e851470f6e7bbed1db474980683e8c315bfce99b2a6ef47c057c04de7858",\n    "validationError": null\n  }\n}\n')))))}f.isMDXComponent=!0}}]);