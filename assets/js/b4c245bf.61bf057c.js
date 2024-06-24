"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[50207],{41890:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>l,frontMatter:()=>r,metadata:()=>a,toc:()=>p});var s=o(85893),n=o(11151);const r={title:"Pass JVM options",sidebar_position:1,description:"Passing Java virtual machine JVM options to Hyperledger Besu at runtime",tags:["public networks","private networks"]},i="Pass JVM options",a={id:"public-networks/how-to/configure-jvm/pass-jvm-options",title:"Pass JVM options",description:"Passing Java virtual machine JVM options to Hyperledger Besu at runtime",source:"@site/versioned_docs/version-23.7.3/public-networks/how-to/configure-jvm/pass-jvm-options.md",sourceDirName:"public-networks/how-to/configure-jvm",slug:"/public-networks/how-to/configure-jvm/pass-jvm-options",permalink:"/23.7.3/public-networks/how-to/configure-jvm/pass-jvm-options",draft:!1,unlisted:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/versioned_docs/version-23.7.3/public-networks/how-to/configure-jvm/pass-jvm-options.md",tags:[{label:"public networks",permalink:"/23.7.3/tags/public-networks"},{label:"private networks",permalink:"/23.7.3/tags/private-networks"}],version:"23.7.3",lastUpdatedAt:1719257757,formattedLastUpdatedAt:"Jun 24, 2024",sidebarPosition:1,frontMatter:{title:"Pass JVM options",sidebar_position:1,description:"Passing Java virtual machine JVM options to Hyperledger Besu at runtime",tags:["public networks","private networks"]},sidebar:"publicDocSidebar",previous:{title:"Configure Java and Besu",permalink:"/23.7.3/public-networks/how-to/configure-jvm/"},next:{title:"Manage JVM memory",permalink:"/23.7.3/public-networks/how-to/configure-jvm/manage-memory"}},c={},p=[];function u(e){const t={code:"code",h1:"h1",p:"p",pre:"pre",...(0,n.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"pass-jvm-options",children:"Pass JVM options"}),"\n",(0,s.jsx)(t.p,{children:"To perform tasks such as attaching a debugger or configuring the garbage collector, pass Java Virtual Machine (JVM) options to Hyperledger Besu."}),"\n",(0,s.jsxs)(t.p,{children:["Besu passes the contents of the ",(0,s.jsx)(t.code,{children:"BESU_OPTS"})," environment variable to the JVM. Set standard JVM options in the ",(0,s.jsx)(t.code,{children:"BESU_OPTS"})," variable."]}),"\n",(0,s.jsx)(t.p,{children:"For Bash-based executions, you can set the variable for only the scope of the program execution by setting it before starting Besu."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"BESU_OPTS=-agentlib:jdwp=transport=dt_socket,server=y,suspend=n,address=5005 \\\nbesu --network=goerli\n"})})]})}function l(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},11151:(e,t,o)=>{o.d(t,{Z:()=>a,a:()=>i});var s=o(67294);const n={},r=s.createContext(n);function i(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);