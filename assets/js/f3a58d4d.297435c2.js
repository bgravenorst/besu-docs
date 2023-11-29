"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[38120],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=l(n),m=a,k=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(k,i(i({ref:t},c),{},{components:n})):r.createElement(k,i({ref:t},c))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[u]="string"==typeof e?e:a,i[1]=p;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},77385:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>p,toc:()=>l});var r=n(87462),a=(n(67294),n(3905));const o={title:"Run Besu from Docker image",description:"Run Hyperledger Besu using the official docker image",sidebar_position:2,tags:["private networks"]},i="Run Besu from a Docker image",p={unversionedId:"private-networks/get-started/install/run-docker-image",id:"version-23.10.1/private-networks/get-started/install/run-docker-image",title:"Run Besu from Docker image",description:"Run Hyperledger Besu using the official docker image",source:"@site/versioned_docs/version-23.10.1/private-networks/get-started/install/run-docker-image.md",sourceDirName:"private-networks/get-started/install",slug:"/private-networks/get-started/install/run-docker-image",permalink:"/23.10.1/private-networks/get-started/install/run-docker-image",draft:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/versioned_docs/version-23.10.1/private-networks/get-started/install/run-docker-image.md",tags:[{label:"private networks",permalink:"/23.10.1/tags/private-networks"}],version:"23.10.1",lastUpdatedAt:1700682292,formattedLastUpdatedAt:"Nov 22, 2023",sidebarPosition:2,frontMatter:{title:"Run Besu from Docker image",description:"Run Hyperledger Besu using the official docker image",sidebar_position:2,tags:["private networks"]},sidebar:"privateDocSidebar",previous:{title:"Installation options",permalink:"/23.10.1/private-networks/get-started/install/"},next:{title:"Install binary distribution",permalink:"/23.10.1/private-networks/get-started/install/binary-distribution"}},s={},l=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Expose ports",id:"expose-ports",level:2},{value:"Start Besu",id:"start-besu",level:2},{value:"Run a node for testing",id:"run-a-node-for-testing",level:3},{value:"Stop Besu and clean up resources",id:"stop-besu-and-clean-up-resources",level:2}],c={toc:l},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"run-besu-from-a-docker-image"},"Run Besu from a Docker image"),(0,a.kt)("p",null,"Hyperledger Besu provides a Docker image to run a Besu node in a Docker container."),(0,a.kt)("p",null,"Use this Docker image to run a single Besu node without installing Besu."),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://docs.docker.com/install/"},"Docker"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"MacOS or Linux"),(0,a.kt)("admonition",{parentName:"li",type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"The Docker image does not run on Windows.")))),(0,a.kt)("h2",{id:"expose-ports"},"Expose ports"),(0,a.kt)("p",null,"Expose ports for P2P discovery, GraphQL, metrics, and HTTP and WebSocket JSON-RPC. You need to expose the ports to use the default ports or the ports specified using ",(0,a.kt)("a",{parentName:"p",href:"/23.10.1/public-networks/reference/cli/options#rpc-http-port"},(0,a.kt)("inlineCode",{parentName:"a"},"--rpc-http-port")),", ",(0,a.kt)("a",{parentName:"p",href:"/23.10.1/public-networks/reference/cli/options#p2p-port"},(0,a.kt)("inlineCode",{parentName:"a"},"--p2p-port")),", ",(0,a.kt)("a",{parentName:"p",href:"/23.10.1/public-networks/reference/cli/options#rpc-ws-port"},(0,a.kt)("inlineCode",{parentName:"a"},"--rpc-ws-port")),", ",(0,a.kt)("a",{parentName:"p",href:"/23.10.1/public-networks/reference/cli/options#metrics-port"},(0,a.kt)("inlineCode",{parentName:"a"},"--metrics-port")),", ",(0,a.kt)("a",{parentName:"p",href:"/23.10.1/public-networks/reference/cli/options#graphql-http-port"},(0,a.kt)("inlineCode",{parentName:"a"},"--graphql-http-port")),", and ",(0,a.kt)("a",{parentName:"p",href:"/23.10.1/public-networks/reference/cli/options#metrics-push-port"},(0,a.kt)("inlineCode",{parentName:"a"},"--metrics-push-port"))," options."),(0,a.kt)("p",null,"To run Besu exposing local ports for access:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker run -p <localportJSON-RPC>:8545 -p <localportWS>:8546 -p <localportP2P>:30303 hyperledger/besu:latest --rpc-http-enabled --rpc-ws-enabled\n")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"The examples on this page expose TCP ports only. To expose UDP ports, specify ",(0,a.kt)("inlineCode",{parentName:"p"},"/udp")," at the end of the argument for the ",(0,a.kt)("inlineCode",{parentName:"p"},"-p")," Docker subcommand option:"),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker run -p <port>:<port>/udp\n")),(0,a.kt)("p",{parentName:"admonition"},"See the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.docker.com/engine/reference/commandline/run/#publish-or-expose-port--p---expose"},(0,a.kt)("inlineCode",{parentName:"a"},"docker run -p")," documentation"),".")),(0,a.kt)("p",null,"To enable JSON-RPC HTTP calls to ",(0,a.kt)("inlineCode",{parentName:"p"},"127.0.0.1:8545")," and P2P discovery on ",(0,a.kt)("inlineCode",{parentName:"p"},"127.0.0.1:13001"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker run -p 8545:8545 -p 13001:30303 hyperledger/besu:latest --rpc-http-enabled\n")),(0,a.kt)("h2",{id:"start-besu"},"Start Besu"),(0,a.kt)("admonition",{type:"danger"},(0,a.kt)("p",{parentName:"admonition"},"Don't mount a volume at the default data path (",(0,a.kt)("inlineCode",{parentName:"p"},"/opt/besu"),"). Mounting a volume at the default data path interferes with the operation of Besu and prevents Besu from safely launching."),(0,a.kt)("p",{parentName:"admonition"},"To run a node that maintains the node state (key and database), ",(0,a.kt)("a",{parentName:"p",href:"/23.10.1/public-networks/reference/cli/options#data-path"},(0,a.kt)("inlineCode",{parentName:"a"},"--data-path"))," must be set to a location other than ",(0,a.kt)("inlineCode",{parentName:"p"},"/opt/besu")," and a storage volume mounted at that location."),(0,a.kt)("p",{parentName:"admonition"},"When running in a Docker container, ",(0,a.kt)("a",{parentName:"p",href:"/23.10.1/public-networks/how-to/connect/specify-nat"},(0,a.kt)("inlineCode",{parentName:"a"},"--nat-method"))," must be set to ",(0,a.kt)("inlineCode",{parentName:"p"},"DOCKER")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"AUTO")," (default). Don't set ",(0,a.kt)("a",{parentName:"p",href:"/23.10.1/public-networks/how-to/connect/specify-nat"},(0,a.kt)("inlineCode",{parentName:"a"},"--nat-method"))," to ",(0,a.kt)("inlineCode",{parentName:"p"},"NONE")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"UPNP"),".")),(0,a.kt)("p",null,"You can specify ",(0,a.kt)("a",{parentName:"p",href:"/23.10.1/public-networks/reference/cli/options#specify-options"},"Besu environment variables")," with the Docker image instead of the command line options."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker run -p 30303:30303 -p 8545:8545 -e BESU_RPC_HTTP_ENABLED=true -e BESU_NETWORK=goerli hyperledger/besu:latest\n")),(0,a.kt)("admonition",{title:'"Unsupported address type exception"',type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"When running Besu from a Docker image, you might get the following exception:"),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"Unsupported address type exception when connecting to peer {}, this is likely due to ipv6 not being enabled at runtime.\n")),(0,a.kt)("p",{parentName:"admonition"},"This happens when the IPv6 support in Docker is disabled while connecting to an IPv6 peer, preventing outbound communication. IPv6 is disabled by default in Docker."),(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("a",{parentName:"p",href:"https://docs.docker.com/config/daemon/ipv6/"},"Enable IPv6 support in Docker")," to allow outbound IPv6 traffic and allow connection with IPv6 peers.")),(0,a.kt)("h3",{id:"run-a-node-for-testing"},"Run a node for testing"),(0,a.kt)("p",null,"To run a node that mines blocks at a rate suitable for testing purposes with WebSocket enabled:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker run -p 8546:8546 --mount type=bind,source=/<myvolume/besu/testnode>,target=/var/lib/besu hyperledger/besu:latest --miner-enabled --miner-coinbase fe3b557e8fb62b89f4916b721be55ceb828dbd73 --rpc-ws-enabled --network=dev --data-path=/var/lib/besu\n")),(0,a.kt)("h2",{id:"stop-besu-and-clean-up-resources"},"Stop Besu and clean up resources"),(0,a.kt)("p",null,"When done running nodes, you can shut down the node container without deleting resources or you can delete the container after stopping it. Run ",(0,a.kt)("inlineCode",{parentName:"p"},"docker container ls")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"docker volume ls")," to get the container and volume names."),(0,a.kt)("p",null,"To stop a container:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker stop <container-name>\n")),(0,a.kt)("p",null,"To delete a container:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker rm <container-name>\n")))}d.isMDXComponent=!0}}]);