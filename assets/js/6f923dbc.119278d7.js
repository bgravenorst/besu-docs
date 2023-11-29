"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[42087],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),g=i,m=c["".concat(s,".").concat(g)]||c[g]||d[g]||a;return n?r.createElement(m,o(o({ref:t},u),{},{components:n})):r.createElement(m,o({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:i,o[1]=l;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},47759:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=n(87462),i=(n(67294),n(3905));const a={title:"Plugins",sidebar_position:6,description:"Plugins overview",tags:["private networks"]},o="Plugins",l={unversionedId:"private-networks/concepts/plugins",id:"version-23.4.1/private-networks/concepts/plugins",title:"Plugins",description:"Plugins overview",source:"@site/versioned_docs/version-23.4.1/private-networks/concepts/plugins.md",sourceDirName:"private-networks/concepts",slug:"/private-networks/concepts/plugins",permalink:"/23.4.1/private-networks/concepts/plugins",draft:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/versioned_docs/version-23.4.1/private-networks/concepts/plugins.md",tags:[{label:"private networks",permalink:"/23.4.1/tags/private-networks"}],version:"23.4.1",lastUpdatedAt:1700682292,formattedLastUpdatedAt:"Nov 22, 2023",sidebarPosition:6,frontMatter:{title:"Plugins",sidebar_position:6,description:"Plugins overview",tags:["private networks"]},sidebar:"privateDocSidebar",previous:{title:"Public key infrastructure",permalink:"/23.4.1/private-networks/concepts/pki"},next:{title:"Tutorials",permalink:"/23.4.1/private-networks/tutorials"}},s={},p=[{value:"Install plugins",id:"install-plugins",level:2}],u={toc:p},c="wrapper";function d(e){let{components:t,...a}=e;return(0,i.kt)(c,(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"plugins"},"Plugins"),(0,i.kt)("p",null,"You can extend Hyperledger Besu functionality by building Java plugins or using existing open source Besu plugins. Use the Plugin API to take data from any Besu network, public or permissioned, and feed it into an application or system."),(0,i.kt)("p",null,"For example, create a plugin to add more monitoring functionality or stream event data to a third-party application. The API exposes data about the following components:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Blocks"),(0,i.kt)("li",{parentName:"ul"},"Balances"),(0,i.kt)("li",{parentName:"ul"},"Transactions"),(0,i.kt)("li",{parentName:"ul"},"Smart contracts"),(0,i.kt)("li",{parentName:"ul"},"Execution results"),(0,i.kt)("li",{parentName:"ul"},"Logs"),(0,i.kt)("li",{parentName:"ul"},"Syncing state.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Besu plugin API",src:n(26469).Z,width:"1512",height:"944"})),(0,i.kt)("p",null,"The plugin API provides access to ",(0,i.kt)("a",{parentName:"p",href:"/23.4.1/private-networks/reference/plugin-api-interfaces"},"interfaces")," allowing you to build the plugin."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"View the ",(0,i.kt)("a",{parentName:"p",href:"https://youtu.be/78sa2WuA1rg"},"plugin API webinar")," for an example of how to build a plugin."),(0,i.kt)("p",{parentName:"admonition"},"For more information about the available interfaces, see the ",(0,i.kt)("a",{parentName:"p",href:"https://javadoc.io/doc/org.hyperledger.besu/plugin-api/latest/index.html"},"Plugin API Javadoc"),".")),(0,i.kt)("h2",{id:"install-plugins"},"Install plugins"),(0,i.kt)("p",null,"To allow Besu to access and use the plugin, copy the plugin (",(0,i.kt)("inlineCode",{parentName:"p"},".jar"),") to the ",(0,i.kt)("inlineCode",{parentName:"p"},"plugins")," directory."),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"If not already present, you must create the ",(0,i.kt)("inlineCode",{parentName:"p"},"plugins")," directory one directory level below (",(0,i.kt)("inlineCode",{parentName:"p"},"../"),") the ",(0,i.kt)("inlineCode",{parentName:"p"},"besu")," executable.")),(0,i.kt)("p",null,"Each plugin in the directory has the following lifecycle events:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Register")," - Executed when Besu starts. Besu checks plugin compatibility and registers plugins."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Start")," - Plugins start after being successfully registered."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Stop")," - Besu stops plugins.")),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"The order in which Besu calls plugins during lifecycle events is not guaranteed.")))}d.isMDXComponent=!0},26469:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/Hyperledger-Besu-Plugin-API-55b61f51dd27221eb8c9de3892b1fb2e.png"}}]);