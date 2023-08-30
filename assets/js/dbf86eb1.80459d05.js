"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[74930],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>b});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},f="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),f=l(r),u=o,b=f["".concat(s,".").concat(u)]||f[u]||d[u]||a;return r?n.createElement(b,c(c({ref:t},p),{},{components:r})):n.createElement(b,c({ref:t},p))}));function b(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[f]="string"==typeof e?e:o,c[1]=i;for(var l=2;l<a;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},55009:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>f,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var n=r(87462),o=(r(67294),r(3905));const a={title:"Pre-deploy a contract",description:"Pre-deploying contracts in the genesis file",sidebar_position:5,tags:["private networks"]},c="Pre-deploy contracts in the genesis file",i={unversionedId:"private-networks/how-to/configure/contracts",id:"private-networks/how-to/configure/contracts",title:"Pre-deploy a contract",description:"Pre-deploying contracts in the genesis file",source:"@site/docs/private-networks/how-to/configure/contracts.md",sourceDirName:"private-networks/how-to/configure",slug:"/private-networks/how-to/configure/contracts",permalink:"/development/private-networks/how-to/configure/contracts",draft:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/docs/private-networks/how-to/configure/contracts.md",tags:[{label:"private networks",permalink:"/development/tags/private-networks"}],version:"current",lastUpdatedAt:1693258016,formattedLastUpdatedAt:"Aug 28, 2023",sidebarPosition:5,frontMatter:{title:"Pre-deploy a contract",description:"Pre-deploying contracts in the genesis file",sidebar_position:5,tags:["private networks"]},sidebar:"privateDocSidebar",previous:{title:"Validators",permalink:"/development/private-networks/how-to/configure/validators"},next:{title:"Client and server TLS",permalink:"/development/private-networks/how-to/configure/tls/client-and-server"}},s={},l=[],p={toc:l};function f(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"pre-deploy-contracts-in-the-genesis-file"},"Pre-deploy contracts in the genesis file"),(0,o.kt)("p",null,"To pre-deploy contracts when starting Besu, specify the contract code in the ",(0,o.kt)("a",{parentName:"p",href:"/development/public-networks/concepts/genesis-file"},"genesis file"),"."),(0,o.kt)("admonition",{title:"Contract code in the genesis file",type:"tip"},(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  ...\n  "alloc": {\n      "0x0ffd23af8eebc60b3cfdeed6f814988757237314": {\n      "balance": "0x100000000000000000000000000000000000000000000000000",\n      "code": "0x6080604052600436106043576000357c010000000000000000000000000000000000000000000000000000000090048063010fc84214604857806355241077146070575b600080fd5b348015605357600080fd5b50605a60a7565b6040518082815260200191505060405180910390f35b348015607b57600080fd5b5060a560048036036020811015609057600080fd5b810190808035906020019092919050505060ad565b005b60005481565b80600081905550807f04474795f5b996ff80cb47c148d4c5ccdbe09ef27551820caa9c2f8ed149cce360405160405180910390a25056fea165627a7a7230582038cb7ea327af8f73feabcfbff64498f1e74831e67f7c75286760d3845c6747c70029",\n      "storage": {\n        "7aa07e0c924147697605046b7c2c32645b7bbfb41e0ac5d0a84ac93cbb759798": "0000000000000000000000000000000000000000000000000000000000000001",\n        "cea2b0602db61f92b76ec4402875cc38eedc9fc425cb1b697fc2265d50fc20fb": "0000000000000000000000000000000000000000000000000000000000000001",\n      }\n    }\n  },\n  ...\n}\n'))),(0,o.kt)("p",null,"The contract code in the genesis file defines the:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Address."),(0,o.kt)("li",{parentName:"ul"},"Balance."),(0,o.kt)("li",{parentName:"ul"},"Bytecode."),(0,o.kt)("li",{parentName:"ul"},"Key value pairs for contract storage.")))}f.isMDXComponent=!0}}]);