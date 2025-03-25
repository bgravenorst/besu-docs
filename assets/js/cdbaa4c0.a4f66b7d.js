"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[1207],{28453:(e,o,t)=>{t.d(o,{R:()=>i,x:()=>l});var n=t(96540);const s={},r=n.createContext(s);function i(e){const o=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function l(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),n.createElement(r.Provider,{value:o},e.children)}},67849:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>n,toc:()=>a});const n=JSON.parse('{"id":"public-networks/how-to/troubleshoot/evm-tool","title":"Use EVM tool","description":"Besu EVM tool","source":"@site/docs/public-networks/how-to/troubleshoot/evm-tool.md","sourceDirName":"public-networks/how-to/troubleshoot","slug":"/public-networks/how-to/troubleshoot/evm-tool","permalink":"/public-networks/how-to/troubleshoot/evm-tool","draft":false,"unlisted":false,"editUrl":"https://github.com/hyperledger/besu-docs/tree/main/docs/public-networks/how-to/troubleshoot/evm-tool.md","tags":[{"inline":true,"label":"public networks","permalink":"/tags/public-networks"},{"inline":true,"label":"private networks","permalink":"/tags/private-networks"}],"version":"current","lastUpdatedAt":1742846860000,"sidebarPosition":1,"frontMatter":{"title":"Use EVM tool","sidebar_position":1,"description":"Besu EVM tool","tags":["public networks","private networks"]},"sidebar":"publicDocSidebar","previous":{"title":"Upgrade Besu","permalink":"/public-networks/how-to/upgrade-node"},"next":{"title":"Trace transactions","permalink":"/public-networks/how-to/troubleshoot/trace-transactions"}}');var s=t(74848),r=t(28453);const i={title:"Use EVM tool",sidebar_position:1,description:"Besu EVM tool",tags:["public networks","private networks"]},l="Use the EVM tool",c={},a=[{value:"Get the EVM tool",id:"get-the-evm-tool",level:2},{value:"Build from source",id:"build-from-source",level:3},{value:"Execute with Docker",id:"execute-with-docker",level:3},{value:"EVM tool options",id:"evm-tool-options",level:2}];function d(e){const o={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(o.header,{children:(0,s.jsx)(o.h1,{id:"use-the-evm-tool",children:"Use the EVM tool"})}),"\n",(0,s.jsx)(o.p,{children:"The Besu EVM tool is a CLI program that executes arbitrary EVM programs and Ethereum State Tests\noutside the context of an operating node.\nUse the EVM tool for benchmarking and fuzz testing."}),"\n",(0,s.jsx)(o.h2,{id:"get-the-evm-tool",children:"Get the EVM tool"}),"\n",(0,s.jsxs)(o.p,{children:["The EVM tool is part of the standard ",(0,s.jsx)(o.a,{href:"/public-networks/get-started/install/binary-distribution",children:"Besu binary distribution"}),"."]}),"\n",(0,s.jsx)(o.h3,{id:"build-from-source",children:"Build from source"}),"\n",(0,s.jsx)(o.p,{children:"To build from source, run the following from the root of the Besu repository:"}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-bash",children:"./gradlew :ethereum:evmTool:installDist\n"})}),"\n",(0,s.jsxs)(o.p,{children:["An extractable archive files is created in ",(0,s.jsx)(o.code,{children:"ethereum/evmtool/build/distributions"})," and an executable\ninstallation in ",(0,s.jsx)(o.code,{children:"ethereum/evmtool/build/install/evmtool"}),"."]}),"\n",(0,s.jsx)(o.p,{children:"Execute the EVM tool:"}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-bash",children:"ethereum/evmtool/build/install/evmtool/bin/evmtool <evmtool options>\n"})}),"\n",(0,s.jsx)(o.h3,{id:"execute-with-docker",children:"Execute with Docker"}),"\n",(0,s.jsx)(o.p,{children:"To run the Besu EVM tool in a container:"}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-bash",children:"docker run -rm <docker options> hyperledger/besu-evmtool:develop <evmtool options>\n"})}),"\n",(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsxs)(o.li,{children:["Because no data is stored in local directories we recommended using the ",(0,s.jsx)(o.code,{children:"-rm"})," docker option.\nThe ",(0,s.jsx)(o.code,{children:"-rm"})," option deletes the container at the end of execution."]}),"\n",(0,s.jsxs)(o.li,{children:["If you use an option that requires input from standard in, use the ",(0,s.jsx)(o.code,{children:"-i"})," docker option.\nThe ",(0,s.jsx)(o.code,{children:"-i"})," option pipes standard input to the EVM tool."]}),"\n",(0,s.jsxs)(o.li,{children:["If you need to reference files we recommend using a docker file binding, such as\n",(0,s.jsx)(o.code,{children:"-v ${PWD}:/opt/data"}),", which maps the current directory to the ",(0,s.jsx)(o.code,{children:"/opt/data"})," directory in the container."]}),"\n"]}),"\n",(0,s.jsx)(o.admonition,{type:"note",children:(0,s.jsxs)(o.p,{children:["The ",(0,s.jsx)(o.code,{children:"latest"})," tag is the latest released version of Besu.\nThe ",(0,s.jsx)(o.code,{children:"develop"})," tag is the current main branch code that will go into a future release version of Besu."]})}),"\n",(0,s.jsx)(o.h2,{id:"evm-tool-options",children:"EVM tool options"}),"\n",(0,s.jsxs)(o.p,{children:["The first mode of the EVM tool runs arbitrary EVM bytecode.\nUse ",(0,s.jsx)(o.a,{href:"/public-networks/reference/evm-tool#options",children:"command line options"})," to specify the code and other\ncontextual information.\nFor example:"]}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-bash",children:"evmtool --code=5B600080808060045AFA50600056\n"})}),"\n",(0,s.jsxs)(o.p,{children:["The EVM tool also has ",(0,s.jsx)(o.a,{href:"/public-networks/reference/evm-tool#subcommands",children:"subcommands"})," used for testing code bases.\nThese subcommands are not meant for typical user interactions."]})]})}function h(e={}){const{wrapper:o}={...(0,r.R)(),...e.components};return o?(0,s.jsx)(o,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}}}]);