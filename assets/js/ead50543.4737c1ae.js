"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[31063],{39870:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>h});var t=s(85893),r=s(11151);const i={title:"Client and server TLS",sidebar_position:1,tags:["private networks"]},o="Configure client and server TLS",l={id:"private-networks/how-to/configure/tls/client-and-server",title:"Client and server TLS",description:"Hyperledger Besu supports TLS for client and server communication. For example, you can configure TLS for communication between Web3Signer and Besu, and Besu and Tessera.",source:"@site/versioned_docs/version-23.10.3/private-networks/how-to/configure/tls/client-and-server.md",sourceDirName:"private-networks/how-to/configure/tls",slug:"/private-networks/how-to/configure/tls/client-and-server",permalink:"/23.10.3/private-networks/how-to/configure/tls/client-and-server",draft:!1,unlisted:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/versioned_docs/version-23.10.3/private-networks/how-to/configure/tls/client-and-server.md",tags:[{label:"private networks",permalink:"/23.10.3/tags/private-networks"}],version:"23.10.3",lastUpdatedAt:1719257757,formattedLastUpdatedAt:"Jun 24, 2024",sidebarPosition:1,frontMatter:{title:"Client and server TLS",sidebar_position:1,tags:["private networks"]},sidebar:"privateDocSidebar",previous:{title:"Pre-deploy a contract",permalink:"/23.10.3/private-networks/how-to/configure/contracts"},next:{title:"Peer-to-peer TLS",permalink:"/23.10.3/private-networks/how-to/configure/tls/p2p"}},c={},h=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Configure client TLS",id:"configure-client-tls",level:2},{value:"Create the known clients file",id:"create-the-known-clients-file",level:3},{value:"Start Besu",id:"start-besu",level:3},{value:"Configure server TLS",id:"configure-server-tls",level:2},{value:"Create the known servers file",id:"create-the-known-servers-file",level:3},{value:"Start Besu",id:"start-besu-1",level:3}];function a(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"configure-client-and-server-tls",children:"Configure client and server TLS"}),"\n",(0,t.jsxs)(n.p,{children:["Hyperledger Besu supports TLS for client and server communication. For example, you can configure TLS for communication between ",(0,t.jsx)(n.a,{href:"https://docs.web3signer.consensys.net/concepts/tls",children:"Web3Signer"})," and Besu, and Besu and ",(0,t.jsx)(n.a,{href:"https://docs.tessera.consensys.net/HowTo/Configure/TLS/",children:"Tessera"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"The following diagram displays an example client and server TLS configuration."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Besu client and server TLS",src:s(98674).Z+"",width:"1512",height:"1184"})}),"\n",(0,t.jsx)(n.p,{children:"Configure TLS communication from the command line."}),"\n",(0,t.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Besu's password-protected PKCS12 keystore"}),"\n",(0,t.jsx)(n.li,{children:"File containing the keystore password"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"configure-client-tls",children:"Configure client TLS"}),"\n",(0,t.jsx)(n.p,{children:"Allow clients (for example a dapp, curl, or Web3Signer) to send and receive secure HTTP JSON-RPCs."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Client prerequisites"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://docs.web3signer.consensys.net/how-to/configure-tls",children:"Configure the client for TLS"})}),"\n",(0,t.jsx)(n.li,{children:"Client's PKCS12 keystore information"}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"create-the-known-clients-file",children:"Create the known clients file"}),"\n",(0,t.jsx)(n.p,{children:"The known clients file allows clients with self-signed certificates or non-public certificates to connect to Besu."}),"\n",(0,t.jsxs)(n.p,{children:["Create a file (in this example, ",(0,t.jsx)(n.code,{children:"knownClients"}),") that lists one or more trusted clients. Use the format",(0,t.jsx)(n.code,{children:"<common_name> <hex-string>"})," where:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"<common_name>"})," is the Common Name specified in the client certificate."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"<hex-string>"})," is the SHA-256 fingerprint of the client certificate."]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",metastring:'title="Example"',children:"web3signer 8E:E0:85:9F:FC:2E:2F:21:31:46:0B:82:4C:A6:88:AB:30:34:9A:C6:EA:4F:04:31:ED:0F:69:A7:B5:C2:2F:A7\ncurl FC:18:BF:39:45:45:9A:15:46:76:A6:E7:C3:94:64:B8:34:84:A3:8E:B8:EA:67:DC:61:C0:29:E6:38:B8:B7:99\n"})}),"\n",(0,t.jsxs)(n.p,{children:["You can use ",(0,t.jsx)(n.a,{href:"https://www.openssl.org/",children:(0,t.jsx)(n.code,{children:"openssl"})})," or ",(0,t.jsx)(n.a,{href:"https://docs.oracle.com/javase/6/docs/technotes/tools/solaris/keytool.html",children:(0,t.jsx)(n.code,{children:"keytool"})})," to display the SHA256 fingerprint."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"keytool -list -v -keystore <keystore> -storetype PKCS12 -storepass <MY_PASSWORD>`.\n"})}),"\n",(0,t.jsx)(n.h3,{id:"start-besu",children:"Start Besu"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"besu --rpc-http-enabled --rpc-http-tls-enabled --rpc-http-tls-client-auth-enabled --rpc-http-tls-keystore-file=/Users/me/my_node/keystore.pfx --rpc-http-tls-keystore-password-file=/Users/me/my_node/keystorePassword --rpc-http-tls-known-clients-file=/Users/me/my_node/knownClients --rpc-http-tls-cipher-suite=TLS_AES_256_GCM_SHA384 --rpc-http-tls-protocol=TLSv1.3,TLSv1.2\n"})}),"\n",(0,t.jsx)(n.p,{children:"The command line:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Enables the HTTP JSON-RPC service using the ",(0,t.jsx)(n.a,{href:"/23.10.3/public-networks/reference/cli/options#rpc-http-enabled",children:(0,t.jsx)(n.code,{children:"--rpc-http-enabled"})})," option."]}),"\n",(0,t.jsxs)(n.li,{children:["Enables TLS for the HTTP JSON-RPC service using the ",(0,t.jsx)(n.a,{href:"/23.10.3/public-networks/reference/cli/options#rpc-http-tls-enabled",children:(0,t.jsx)(n.code,{children:"--rpc-http-tls-enabled"})})," option."]}),"\n",(0,t.jsxs)(n.li,{children:["Enables TLS client authentication using the ",(0,t.jsx)(n.a,{href:"/23.10.3/public-networks/reference/cli/options#rpc-http-tls-client-auth-enabled",children:(0,t.jsx)(n.code,{children:"--rpc-http-tls-client-auth-enabled"})})," option."]}),"\n",(0,t.jsxs)(n.li,{children:["Specifies the keystore using the ",(0,t.jsx)(n.a,{href:"/23.10.3/public-networks/reference/cli/options#rpc-http-tls-keystore-file",children:(0,t.jsx)(n.code,{children:"--rpc-http-tls-keystore-file"})})," option."]}),"\n",(0,t.jsxs)(n.li,{children:["Specifies the file that contains the password to decrypt the keystore using the ",(0,t.jsx)(n.a,{href:"/23.10.3/public-networks/reference/cli/options#rpc-http-tls-keystore-password-file",children:(0,t.jsx)(n.code,{children:"--rpc-http-tls-keystore-password-file"})})," option."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"#create-the-known-clients-file",children:"Specifies the clients"})," allowed to connect to Besu using the ",(0,t.jsx)(n.a,{href:"/23.10.3/public-networks/reference/cli/options#rpc-http-tls-known-clients-file",children:(0,t.jsx)(n.code,{children:"--rpc-http-tls-known-clients-file"})})," option."]}),"\n",(0,t.jsxs)(n.li,{children:["specifies the Java cipher suites using the ",(0,t.jsx)(n.a,{href:"/23.10.3/public-networks/reference/cli/options#rpc-http-tls-cipher-suite",children:(0,t.jsx)(n.code,{children:"--rpc-http-tls-cipher-suite"})})," option."]}),"\n",(0,t.jsxs)(n.li,{children:["specifies the TLS protocol version using the ",(0,t.jsx)(n.a,{href:"/23.10.3/public-networks/reference/cli/options#rpc-http-tls-protocol",children:(0,t.jsx)(n.code,{children:"--rpc-http-tls-protocol"})})," option."]}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["Set ",(0,t.jsx)(n.a,{href:"/23.10.3/public-networks/reference/cli/options#rpc-http-tls-ca-clients-enabled",children:(0,t.jsx)(n.code,{children:"--rpc-http-tls-ca-clients-enabled"})})," to ",(0,t.jsx)(n.code,{children:"true"})," to allow access to clients with signed and trusted root CAs."]})}),"\n",(0,t.jsx)(n.h2,{id:"configure-server-tls",children:"Configure server TLS"}),"\n",(0,t.jsx)(n.p,{children:"Allow Besu to securely communicate with the server (Tessera)."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Server prerequisites"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://docs.tessera.consensys.net/HowTo/Configure/TLS/",children:"Configure the server to allow TLS communication"})}),"\n",(0,t.jsx)(n.li,{children:"Server's certificate information"}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"create-the-known-servers-file",children:"Create the known servers file"}),"\n",(0,t.jsxs)(n.p,{children:["Create a file (in this example, ",(0,t.jsx)(n.code,{children:"knownServers"}),") that lists one or more trusted servers. The file contents use the format ",(0,t.jsx)(n.code,{children:"<hostname>:<port> <hex-string>"})," where:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"<hostname>"})," is the server hostname"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"<port>"})," is the port used for communication"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"<hex-string>"})," is the SHA-256 fingerprint of the server's certificate."]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",metastring:'title="Example"',children:"localhost:8888 3C:B4:5A:F9:88:43:5E:62:69:9F:A9:9D:41:14:03:BA:83:24:AC:04:CE:BD:92:49:1B:8D:B2:A4:86:39:4C:AC\n127.0.0.1:8888 3C:B4:5A:F9:88:43:5E:62:69:9F:A9:9D:41:14:03:BA:83:24:AC:04:CE:BD:92:49:1B:8D:B2:A4:86:39:4C:AC\n"})}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsx)(n.p,{children:"If you are unsure whether requests use the hostname or an IP address, configure both in the file."})}),"\n",(0,t.jsx)(n.h3,{id:"start-besu-1",children:"Start Besu"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"besu --privacy-tls-enabled --privacy-tls-keystore-file=/Users/me/my_node/keystore.pfx --privacy-tls-keystore-password-file=/Users/me/my_node/keystorePassword --privacy-tls-known-enclave-file=/Users/me/my_node/knownServers\n"})}),"\n",(0,t.jsx)(n.p,{children:"The command line:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Enables TLS with the server using the ",(0,t.jsx)(n.a,{href:"/23.10.3/private-networks/reference/cli/options#privacy-tls-enabled",children:(0,t.jsx)(n.code,{children:"--privacy-tls-enabled"})})," option."]}),"\n",(0,t.jsxs)(n.li,{children:["Specifies the keystore using the ",(0,t.jsx)(n.a,{href:"/23.10.3/private-networks/reference/cli/options#privacy-tls-keystore-file",children:(0,t.jsx)(n.code,{children:"--privacy-tls-keystore-file"})})," option."]}),"\n",(0,t.jsxs)(n.li,{children:["Specifies the file that contains the password to decrypt the keystore using the ",(0,t.jsx)(n.a,{href:"/23.10.3/private-networks/reference/cli/options#privacy-tls-keystore-password-file",children:(0,t.jsx)(n.code,{children:"--privacy-tls-keystore-password-file"})})," option."]}),"\n",(0,t.jsxs)(n.li,{children:["Specifies the trusted servers using the ",(0,t.jsx)(n.a,{href:"/23.10.3/private-networks/reference/cli/options#privacy-tls-known-enclave-file",children:(0,t.jsx)(n.code,{children:"--privacy-tls-known-enclave-file"})})," option."]}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},98674:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/Besu_TLS-ed8bb10233da06f7c5f3d62628dfcb80.png"},11151:(e,n,s)=>{s.d(n,{Z:()=>l,a:()=>o});var t=s(67294);const r={},i=t.createContext(r);function o(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);