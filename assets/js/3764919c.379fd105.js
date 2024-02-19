"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[36586],{48439:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>h});var a=t(85893),s=t(11151),i=t(74866),r=t(85162);const l={title:"Authenticate over JSON-RPC requests",sidebar_position:4,description:"Hyperledger Besu authentication and authorization for JSON-RPC",tags:["public networks","private networks"]},c="Authenticate and authorize JSON-RPC",o={id:"public-networks/how-to/use-besu-api/authenticate",title:"Authenticate over JSON-RPC requests",description:"Hyperledger Besu authentication and authorization for JSON-RPC",source:"@site/versioned_docs/version-23.7.3/public-networks/how-to/use-besu-api/authenticate.md",sourceDirName:"public-networks/how-to/use-besu-api",slug:"/public-networks/how-to/use-besu-api/authenticate",permalink:"/23.7.3/public-networks/how-to/use-besu-api/authenticate",draft:!1,unlisted:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/versioned_docs/version-23.7.3/public-networks/how-to/use-besu-api/authenticate.md",tags:[{label:"public networks",permalink:"/23.7.3/tags/public-networks"},{label:"private networks",permalink:"/23.7.3/tags/private-networks"}],version:"23.7.3",lastUpdatedAt:1708040194,formattedLastUpdatedAt:"Feb 15, 2024",sidebarPosition:4,frontMatter:{title:"Authenticate over JSON-RPC requests",sidebar_position:4,description:"Hyperledger Besu authentication and authorization for JSON-RPC",tags:["public networks","private networks"]},sidebar:"publicDocSidebar",previous:{title:"Use GraphQL over HTTP",permalink:"/23.7.3/public-networks/how-to/use-besu-api/graphql"},next:{title:"Access logs using JSON-RPC",permalink:"/23.7.3/public-networks/how-to/use-besu-api/access-logs"}},d={},h=[{value:"Username and password authentication",id:"username-and-password-authentication",level:2},{value:"1. Create the credentials file",id:"1-create-the-credentials-file",level:3},{value:"2. Enable authentication",id:"2-enable-authentication",level:3},{value:"3. Generate an authentication token",id:"3-generate-an-authentication-token",level:3},{value:"JWT public key authentication",id:"jwt-public-key-authentication",level:2},{value:"1. Generate a private and public key pair",id:"1-generate-a-private-and-public-key-pair",level:3},{value:"2. Create the JWT",id:"2-create-the-jwt",level:3},{value:"3. Enable authentication",id:"3-enable-authentication",level:3},{value:"JSON-RPC permissions",id:"json-rpc-permissions",level:2},{value:"Use an authentication token to make requests",id:"use-an-authentication-token-to-make-requests",level:2},{value:"Postman",id:"postman",level:3},{value:"cURL",id:"curl",level:3}];function u(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",ol:"ol",p:"p",pre:"pre",section:"section",strong:"strong",sup:"sup",ul:"ul",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"authenticate-and-authorize-json-rpc",children:"Authenticate and authorize JSON-RPC"}),"\n",(0,a.jsxs)(n.p,{children:["Authentication identifies a user, and authorization verifies user access to requested JSON-RPC methods. Hyperledger Besu verifies users using ",(0,a.jsx)(n.a,{href:"https://jwt.io/introduction/",children:"JSON Web Tokens (JWT)"}),". JWT is also used in ",(0,a.jsx)(n.a,{href:"/23.7.3/private-networks/concepts/privacy/multi-tenancy",children:"multi-tenancy"})," to verify tenant data access."]}),"\n",(0,a.jsx)(n.p,{children:"Besu supports two mutually exclusive authentication methods:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"#username-and-password-authentication",children:"Username and password"})}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"#jwt-public-key-authentication",children:"JWT public key"}),"."]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["Besu creates JWT internally with ",(0,a.jsx)(n.a,{href:"#username-and-password-authentication",children:"username and password authentication"}),", and externally with ",(0,a.jsx)(n.a,{href:"#jwt-public-key-authentication",children:"JWT public key authentication"}),"."]}),"\n",(0,a.jsx)(n.admonition,{type:"info",children:(0,a.jsxs)(n.p,{children:["Using JSON-RPC authentication and authorization with ",(0,a.jsx)(n.a,{href:"https://metamask.io/",children:"MetaMask"})," is not supported."]})}),"\n",(0,a.jsx)(n.admonition,{type:"caution",children:(0,a.jsx)(n.p,{children:"To prevent interception of authentication credentials and authenticated tokens, make authenticated requests over HTTPS. We recommend running production deployments behind a network layer that provides SSL termination. Besu does not provide a HTTPS connection natively."})}),"\n",(0,a.jsx)(n.h2,{id:"username-and-password-authentication",children:"Username and password authentication"}),"\n",(0,a.jsxs)(n.p,{children:["Enable authentication from the command line. Supply the credentials file and send a request to the ",(0,a.jsx)(n.code,{children:"/login"})," endpoint using the username and password. The ",(0,a.jsx)(n.code,{children:"/login"})," endpoint creates a JWT for making permitted JSON-RPC requests."]}),"\n",(0,a.jsxs)(n.p,{children:["Using ",(0,a.jsx)(n.a,{href:"#jwt-public-key-authentication",children:"public key authentication"})," disables the ",(0,a.jsx)(n.code,{children:"/login"})," endpoint."]}),"\n",(0,a.jsx)(n.h3,{id:"1-create-the-credentials-file",children:"1. Create the credentials file"}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"toml"})," credentials file defines user details and the JSON-RPC methods they can access."]}),"\n",(0,a.jsxs)(n.admonition,{type:"info",children:[(0,a.jsxs)(n.mdxAdmonitionTitle,{children:["Sample ",(0,a.jsx)(n.code,{children:"auth.toml"})," credentials file"]}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-toml",children:'[Users.username1]\npassword = "$2a$10$l3GA7K8g6rJ/Yv.YFSygCuI9byngpEzxgWS9qEg5emYDZomQW7fGC"\npermissions=["net:*","eth:blockNumber"]\nprivacyPublicKey="U7ANiOOd5L9Z/dMxRFjdbhA1Qragw6fLuYgmgCvLoX4="\n\n[Users.username2]\npassword = "$2b$10$6sHt1J0MVUGIoNKvJiK33uaZzUwNmMmJlaVLkIwinkPiS1UBnAnF2"\npermissions=["net:version","admin:*"]\nprivacyPublicKey="quhb1pQPGN1w8ZSZSyiIfncEAlVY/M/rauSyQ5wVMRE="\n'})})]}),"\n",(0,a.jsx)(n.p,{children:"Each user requiring JSON-RPC access the configuration file lists the:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Username. ",(0,a.jsx)(n.code,{children:"Users."})," is mandatory and followed by the username. That is, replace ",(0,a.jsx)(n.code,{children:"<username>"})," in ",(0,a.jsx)(n.code,{children:"[Users.<username>]"})," with the username."]}),"\n",(0,a.jsxs)(n.li,{children:["Hash of the user password. Use the ",(0,a.jsx)(n.a,{href:"/23.7.3/public-networks/reference/cli/subcommands#password",children:(0,a.jsx)(n.code,{children:"password hash"})})," subcommand to generate the hash."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"#json-rpc-permissions",children:"JSON-RPC permissions"}),"."]}),"\n",(0,a.jsxs)(n.li,{children:["Optional. The tenant's Tessera public key using ",(0,a.jsx)(n.code,{children:"privacyPublicKey"}),". Only used for ",(0,a.jsx)(n.a,{href:"/23.7.3/private-networks/concepts/privacy/multi-tenancy",children:"multi-tenancy"}),"."]}),"\n"]}),"\n",(0,a.jsxs)(i.Z,{children:[(0,a.jsx)(r.Z,{value:"Command",label:"Command",default:!0,children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"besu password hash --password=MyPassword\n"})})}),(0,a.jsx)(r.Z,{value:"Hash output",label:"Hash output",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-text",children:"$2a$10$L3Xb5G/AJOsEK5SuOn9uzOhpCCfuVWTajc5hwWerY6N5xBM/xlrMK\n"})})})]}),"\n",(0,a.jsx)(n.h3,{id:"2-enable-authentication",children:"2. Enable authentication"}),"\n",(0,a.jsxs)(n.p,{children:["To require authentication for the JSON-RPC API, use the ",(0,a.jsx)(n.a,{href:"/23.7.3/public-networks/reference/cli/options#rpc-http-authentication-enabled",children:(0,a.jsx)(n.code,{children:"--rpc-http-authentication-enabled"})})," or ",(0,a.jsx)(n.a,{href:"/23.7.3/public-networks/reference/cli/options#rpc-ws-authentication-enabled",children:(0,a.jsx)(n.code,{children:"--rpc-ws-authentication-enabled"})})," options."]}),"\n",(0,a.jsxs)(n.p,{children:["To specify the ",(0,a.jsx)(n.a,{href:"#1-create-the-credentials-file",children:"credentials file"}),", use the ",(0,a.jsx)(n.a,{href:"/23.7.3/public-networks/reference/cli/options#rpc-http-authentication-credentials-file",children:(0,a.jsx)(n.code,{children:"--rpc-http-authentication-credentials-file"})})," and ",(0,a.jsx)(n.a,{href:"/23.7.3/public-networks/reference/cli/options#rpc-ws-authentication-credentials-file",children:(0,a.jsx)(n.code,{children:"--rpc-ws-authentication-credentials-file"})})," options."]}),"\n",(0,a.jsx)(n.h3,{id:"3-generate-an-authentication-token",children:"3. Generate an authentication token"}),"\n",(0,a.jsxs)(n.p,{children:["To generate an authentication token, make a request to the ",(0,a.jsx)(n.code,{children:"/login"})," endpoint with your username and password. Specify the HTTP port or the WS port to generate a token to authenticate over HTTP or WS respectively. HTTP and WS requires a different token."]}),"\n",(0,a.jsxs)(i.Z,{children:[(0,a.jsx)(r.Z,{value:"Generate a token for HTTP",label:"Generate a token for HTTP",default:!0,children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'curl -X POST --data \'{"username":"username1","password":"MyPassword"}\' <JSON-RPC-http-hostname:http-port>/login\n'})})}),(0,a.jsx)(r.Z,{value:"Example for HTTP",label:"Example for HTTP",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'curl -X POST --data \'{"username":"username1","password":"MyPassword"}\' http://localhost:8545/login\n'})})}),(0,a.jsx)(r.Z,{value:"Generate a token for WS",label:"Generate a token for WS",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'curl -X POST --data \'{"username":"username1","password":"MyPassword"}\' <JSON-RPC-ws-hostname:ws-port>/login\n'})})}),(0,a.jsx)(r.Z,{value:"Example for WS",label:"Example for WS",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'curl -X POST --data \'{"username":"username1","password":"MyPassword"}\' http://localhost:8546/login\n'})})}),(0,a.jsx)(r.Z,{value:"JSON result",label:"JSON result",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJwZXJtaXNzaW9ucyI6WyIqOioiXSwidXNlcm5hbWUiOiJ1c2VyMiIsImlhdCI6MTU1MDQ2MDYwNCwiZXhwIjoxNTUwNDYwOTA0fQ.l2Ycqzl_AyvReXBeUSayOlOMS_E8-DCuz3q0Db0DKD7mqyl6q-giWoEtfdWzUEvZbRRi2_ecKO3N6JkXq7zMKQAJbVAEzobfbaaXWcQEpHOjtnK4_Yz-UPyKiXtu7HGdcdl5Tfx3dKoksbqkBl3U3vFWxzmFnuu3dAISfVJYUNA"\n}\n'})})})]}),"\n",(0,a.jsx)(n.p,{children:"Authentication tokens expire five minutes after generation. If you require access after the token expires, you need to generate a new token."}),"\n",(0,a.jsx)(n.h2,{id:"jwt-public-key-authentication",children:"JWT public key authentication"}),"\n",(0,a.jsx)(n.p,{children:"Enable authentication from the command line and supply the external JWT provider's public key."}),"\n",(0,a.jsx)(n.admonition,{type:"danger",children:(0,a.jsxs)(n.p,{children:["JWT public authentication disables the Besu ",(0,a.jsx)(n.code,{children:"/login"})," endpoint, meaning ",(0,a.jsx)(n.a,{href:"#username-and-password-authentication",children:"username and password authentication"})," will not work."]})}),"\n",(0,a.jsx)(n.h3,{id:"1-generate-a-private-and-public-key-pair",children:"1. Generate a private and public key pair"}),"\n",(0,a.jsxs)(n.p,{children:["The private and accompanying public key files must be in ",(0,a.jsx)(n.code,{children:".pem"})," format."]}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.a,{href:"https://datatracker.ietf.org/doc/html/rfc7518#section-3.1",children:"key algorithm"})," can be:"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["RSA with private key length of at least 2048 bits using algorithm ",(0,a.jsx)(n.code,{children:"RS256"}),", ",(0,a.jsx)(n.code,{children:"RS384"})," or ",(0,a.jsx)(n.code,{children:"RS512"}),"."]}),"\n",(0,a.jsxs)(n.li,{children:["ECDSA private key, using ",(0,a.jsx)(n.code,{children:"ES256"})," (",(0,a.jsx)(n.code,{children:"secp256r1"})," or ",(0,a.jsx)(n.code,{children:"secp256k1"}),"), ",(0,a.jsx)(n.code,{children:"ES384"})," or ",(0,a.jsx)(n.code,{children:"ES512"}),"."]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["Besu default is ",(0,a.jsx)(n.code,{children:"RS256"}),"."]}),"\n",(0,a.jsxs)(i.Z,{children:[(0,a.jsx)(r.Z,{value:"RS256 RSA Keys",label:"RS256 RSA Keys",default:!0,children:(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Generate the private key:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"openssl genrsa -out privateRSAKey.pem 2048\n"})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Generate the public key:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"openssl rsa -pubout -in privateRSAKey.pem -pubout -out publicRSAKey.pem\n"})}),"\n"]}),"\n"]})}),(0,a.jsx)(r.Z,{value:"ES256 secp256r1 ECDSA Keys",label:"`ES256 secp256r1 ECDSA Keys",children:(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Generate the private key:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"openssl ecparam -name secp256r1 -genkey -out privateECDSAKey.pem\n"})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Generate the public key:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"openssl ec -in privateECDSAKey.pem -pubout -out publicECDSAKey.pem\n"})}),"\n"]}),"\n"]})})]}),"\n",(0,a.jsxs)(n.admonition,{title:"Private key security",type:"danger",children:[(0,a.jsx)(n.p,{children:"The private key must be kept secret. Never share private keys publicly or on a Web site, even if advertised as secure."}),(0,a.jsxs)(n.p,{children:["Always keep your private keys safe -- ideally using ",(0,a.jsx)(n.a,{href:"https://connect2id.com/products/nimbus-jose-jwt/examples/pkcs11",children:"hardware"})," or ",(0,a.jsx)(n.a,{href:"https://www.vaultproject.io/docs/secrets/identity/identity-token",children:"vault"})," -- and define a strong security policy and ",(0,a.jsx)(n.a,{href:"https://auth0.com/docs/best-practices/token-best-practices",children:"best practices"}),"."]}),(0,a.jsx)(n.p,{children:"Compromised keys can provide attackers access to you nodes RPC-API."})]}),"\n",(0,a.jsx)(n.h3,{id:"2-create-the-jwt",children:"2. Create the JWT"}),"\n",(0,a.jsxs)(n.p,{children:["Create the JWT using a trusted authentication provider",(0,a.jsx)(n.sup,{children:(0,a.jsx)(n.a,{href:"#user-content-fn-1",id:"user-content-fnref-1","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"1"})})," or ",(0,a.jsx)(n.a,{href:"https://jwt.io/libraries",children:"library"})," in your own code."]}),"\n",(0,a.jsxs)(n.p,{children:["See ",(0,a.jsx)(n.a,{href:"https://github.com/NicolasMassart/java-jwt-sample-generation/",children:"Java code sample to generate JWT using Vertx"})," for an example implementation."]}),"\n",(0,a.jsx)(n.admonition,{type:"caution",children:(0,a.jsxs)(n.p,{children:["The JWT must use one of the ",(0,a.jsx)(n.code,{children:"RS256"}),", ",(0,a.jsx)(n.code,{children:"RS384"}),", ",(0,a.jsx)(n.code,{children:"RS512"}),", ",(0,a.jsx)(n.code,{children:"ES256"}),", ",(0,a.jsx)(n.code,{children:"ES384"}),", or ",(0,a.jsx)(n.code,{children:"ES512"})," algorithms."]})}),"\n",(0,a.jsx)(n.p,{children:"Each payload for the JWT must contain:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"#json-rpc-permissions",children:"JSON-RPC permissions"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsxs)(n.a,{href:"https://tools.ietf.org/html/rfc7519#section-4.1.4",children:[(0,a.jsx)(n.code,{children:"exp"})," (Expiration Time) claim"]})}),"\n",(0,a.jsxs)(n.li,{children:["Optionally, the tenant's Tessera public key using ",(0,a.jsx)(n.code,{children:"privacyPublicKey"}),". Only used for ",(0,a.jsx)(n.a,{href:"/23.7.3/private-networks/concepts/privacy/multi-tenancy",children:"multi-tenancy"}),"."]}),"\n"]}),"\n",(0,a.jsxs)(i.Z,{children:[(0,a.jsx)(r.Z,{value:"Example JSON Payload",label:"Example JSON Payload",default:!0,children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "permissions": ["*:*"],\n  "privacyPublicKey": "2UKH3VJThkOoKskrLFpwoxCnnRARyobV1bEdgseFHTs=",\n  "exp": 1600899999002\n}\n'})})}),(0,a.jsx)(r.Z,{value:"Example JWT result",label:"Example JWT result",children:(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"Example result",src:t(17952).Z+"",width:"493",height:"486"})})})]}),"\n",(0,a.jsx)(n.h3,{id:"3-enable-authentication",children:"3. Enable authentication"}),"\n",(0,a.jsxs)(n.p,{children:["To require authentication for the JSON-RPC API, use the ",(0,a.jsx)(n.a,{href:"/23.7.3/public-networks/reference/cli/options#rpc-http-authentication-enabled",children:(0,a.jsx)(n.code,{children:"--rpc-http-authentication-enabled"})})," or ",(0,a.jsx)(n.a,{href:"/23.7.3/public-networks/reference/cli/options#rpc-ws-authentication-enabled",children:(0,a.jsx)(n.code,{children:"--rpc-ws-authentication-enabled"})})," options."]}),"\n",(0,a.jsxs)(n.p,{children:["To specify the JWT provider's public key file to use with the externally created JWT, use the ",(0,a.jsx)(n.a,{href:"/23.7.3/public-networks/reference/cli/options#rpc-http-authentication-jwt-public-key-file",children:(0,a.jsx)(n.code,{children:"--rpc-http-authentication-jwt-public-key-file"})})," or ",(0,a.jsx)(n.a,{href:"/23.7.3/public-networks/reference/cli/options#rpc-ws-authentication-jwt-public-key-file",children:(0,a.jsx)(n.code,{children:"--rpc-ws-authentication-jwt-public-key-file"})})," options."]}),"\n",(0,a.jsx)(n.h2,{id:"json-rpc-permissions",children:"JSON-RPC permissions"}),"\n",(0,a.jsx)(n.p,{children:"Each user has a list of permissions strings defining the methods they can access. To give access to:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["All API methods, specify ",(0,a.jsx)(n.code,{children:'["*:*"]'}),"."]}),"\n",(0,a.jsxs)(n.li,{children:["All API methods in an API group, specify ",(0,a.jsx)(n.code,{children:'["<api_group>:*"]'}),". For example, ",(0,a.jsx)(n.code,{children:'["eth:*"]'}),"."]}),"\n",(0,a.jsxs)(n.li,{children:["Specific API methods, specify ",(0,a.jsx)(n.code,{children:'["<api_group>:<method_name>"]'}),". For example, ",(0,a.jsx)(n.code,{children:'["admin:peers"]'}),"."]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["With authentication enabled, to explicitly specify a user cannot access any methods, include the user with an empty permissions list (",(0,a.jsx)(n.code,{children:"[]"}),"). Users with an empty permissions list and users not included in the credentials file cannot access any JSON-RPC methods."]}),"\n",(0,a.jsx)(n.h2,{id:"use-an-authentication-token-to-make-requests",children:"Use an authentication token to make requests"}),"\n",(0,a.jsxs)(n.p,{children:["Specify the authentication token as a ",(0,a.jsx)(n.code,{children:"Bearer"})," token in the JSON-RPC request header."]}),"\n",(0,a.jsx)(n.h3,{id:"postman",children:"Postman"}),"\n",(0,a.jsxs)(n.p,{children:["In the ",(0,a.jsx)(n.strong,{children:"Authorization"})," tab in the ",(0,a.jsx)(n.strong,{children:"TYPE"})," drop-down list, select ",(0,a.jsx)(n.strong,{children:"Bearer Token"})," and specify the token (generated either ",(0,a.jsx)(n.a,{href:"#2-create-the-jwt",children:"externally"})," or by the ",(0,a.jsxs)(n.a,{href:"#3-generate-an-authentication-token",children:[(0,a.jsx)(n.code,{children:"login"})," request"]}),")."]}),"\n",(0,a.jsx)(n.h3,{id:"curl",children:"cURL"}),"\n",(0,a.jsxs)(n.p,{children:["Specify the ",(0,a.jsx)(n.code,{children:"Bearer"})," in the header."]}),"\n",(0,a.jsxs)(i.Z,{children:[(0,a.jsx)(r.Z,{value:"cURL Request with authentication placeholders",label:"cURL Request with authentication placeholders",default:!0,children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'curl -X POST -H \'Authorization: Bearer <JWT_TOKEN>\' -d \'{"jsonrpc":"2.0","method":"<API_METHOD>","params":[],"id":1}\' <JSON-RPC-http-hostname:port>\n'})})}),(0,a.jsx)(r.Z,{value:"cURL Request with authentication",label:"cURL Request with authentication",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'curl -X POST -H \'Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJwZXJtaXNzaW9ucyI6WyIqOioiXSwidXNlcm5hbWUiOiJ1c2VyMiIsImlhdCI6MTU1MDQ2MTQxNiwiZXhwIjoxNTUwNDYxNzE2fQ.WQ1mqpqzRLHaoL8gOSEZPvnRs_qf6j__7A3Sg8vf9RKvWdNTww_vRJF1gjcVy-FFh96AchVnQyXVx0aNUz9O0txt8VN3jqABVWbGMfSk2T_CFdSw5aDjuriCsves9BQpP70Vhj-tseaudg-XU5hCokX0tChbAqd9fB2138zYm5M\' -d \'{"jsonrpc":"2.0","method":"net_listening","params":[],"id":1}\' http://localhost:8545\n'})})})]}),"\n",(0,a.jsxs)(n.section,{"data-footnotes":!0,className:"footnotes",children:[(0,a.jsx)(n.h2,{className:"sr-only",id:"footnote-label",children:"Footnotes"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{id:"user-content-fn-1",children:["\n",(0,a.jsxs)(n.p,{children:["for example ",(0,a.jsx)(n.a,{href:"https://auth0.com/",children:"Auth0"})," or ",(0,a.jsx)(n.a,{href:"https://www.keycloak.org/",children:"Keycloak"})," ",(0,a.jsx)(n.a,{href:"#user-content-fnref-1","data-footnote-backref":"","aria-label":"Back to reference 1",className:"data-footnote-backref",children:"\u21a9"})]}),"\n"]}),"\n"]}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}},85162:(e,n,t)=>{t.d(n,{Z:()=>r});t(67294);var a=t(36905);const s={tabItem:"tabItem_Ymn6"};var i=t(85893);function r(e){let{children:n,hidden:t,className:r}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,a.Z)(s.tabItem,r),hidden:t,children:n})}},74866:(e,n,t)=>{t.d(n,{Z:()=>v});var a=t(67294),s=t(36905),i=t(12466),r=t(16550),l=t(20469),c=t(91980),o=t(67392),d=t(50012);function h(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return h(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:s}}=e;return{value:n,label:t,attributes:a,default:s}}))}(t);return function(e){const n=(0,o.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function x(e){let{queryString:n=!1,groupId:t}=e;const s=(0,r.k6)(),i=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,c._X)(i),(0,a.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(s.location.search);n.set(i,e),s.replace({...s.location,search:n.toString()})}),[i,s])]}function j(e){const{defaultValue:n,queryString:t=!1,groupId:s}=e,i=u(e),[r,c]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:i}))),[o,h]=x({queryString:t,groupId:s}),[j,m]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[s,i]=(0,d.Nk)(t);return[s,(0,a.useCallback)((e=>{t&&i.set(e)}),[t,i])]}({groupId:s}),f=(()=>{const e=o??j;return p({value:e,tabValues:i})?e:null})();(0,l.Z)((()=>{f&&c(f)}),[f]);return{selectedValue:r,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);c(e),h(e),m(e)}),[h,m,i]),tabValues:i}}var m=t(72389);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=t(85893);function y(e){let{className:n,block:t,selectedValue:a,selectValue:r,tabValues:l}=e;const c=[],{blockElementScrollPositionUntilNextRender:o}=(0,i.o5)(),d=e=>{const n=e.currentTarget,t=c.indexOf(n),s=l[t].value;s!==a&&(o(n),r(s))},h=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1];break}}n?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":t},n),children:l.map((e=>{let{value:n,label:t,attributes:i}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>c.push(e),onKeyDown:h,onClick:d,...i,className:(0,s.Z)("tabs__item",f.tabItem,i?.className,{"tabs__item--active":a===n}),children:t??n},n)}))})}function w(e){let{lazy:n,children:t,selectedValue:s}=e;const i=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===s));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function g(e){const n=j(e);return(0,b.jsxs)("div",{className:(0,s.Z)("tabs-container",f.tabList),children:[(0,b.jsx)(y,{...e,...n}),(0,b.jsx)(w,{...e,...n})]})}function v(e){const n=(0,m.Z)();return(0,b.jsx)(g,{...e,children:h(e.children)},String(n))}},17952:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/jwt-49a83901a587794e24b4684fc0a089b2.png"},11151:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>r});var a=t(67294);const s={},i=a.createContext(s);function r(e){const n=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);