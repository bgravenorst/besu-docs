"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[4656],{71920:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var t=s(74848),r=s(28453),a=s(11470),i=s(19365);const o={title:"Create a privacy enabled network using the Quickstart",sidebar_position:1,description:"Configure Besu privacy",tags:["private networks"]},l="Create a privacy-enabled network  (Deprecated)",c={id:"private-networks/tutorials/privacy/index",title:"Create a privacy enabled network using the Quickstart",description:"Configure Besu privacy",source:"@site/docs/private-networks/tutorials/privacy/index.md",sourceDirName:"private-networks/tutorials/privacy",slug:"/private-networks/tutorials/privacy/",permalink:"/private-networks/tutorials/privacy/",draft:!1,unlisted:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/docs/private-networks/tutorials/privacy/index.md",tags:[{inline:!0,label:"private networks",permalink:"/tags/private-networks"}],version:"current",lastUpdatedAt:1736811414e3,sidebarPosition:1,frontMatter:{title:"Create a privacy enabled network using the Quickstart",sidebar_position:1,description:"Configure Besu privacy",tags:["private networks"]},sidebar:"privateDocSidebar",previous:{title:"Create an Ethash network",permalink:"/private-networks/tutorials/ethash"},next:{title:"Create a multi-tenant network",permalink:"/private-networks/tutorials/privacy/multi-tenancy"}},d={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Steps",id:"steps",level:2},{value:"1. Create Tessera directories",id:"1-create-tessera-directories",level:3},{value:"2. Generate Tessera keys",id:"2-generate-tessera-keys",level:3},{value:"3. Create Tessera configuration files",id:"3-create-tessera-configuration-files",level:3},{value:"4. Start the Tessera nodes",id:"4-start-the-tessera-nodes",level:3},{value:"5. Start Besu Node-1",id:"5-start-besu-node-1",level:3},{value:"6. Start Besu Node-2",id:"6-start-besu-node-2",level:3},{value:"7. Start Besu Node-3",id:"7-start-besu-node-3",level:3},{value:"8. Start Besu Node-4",id:"8-start-besu-node-4",level:3}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"create-a-privacy-enabled-network--deprecated",children:"Create a privacy-enabled network  (Deprecated)"})}),"\n",(0,t.jsx)(n.admonition,{type:"caution",children:(0,t.jsxs)(n.p,{children:["Tessera-based privacy is deprecated in Besu version 24.12.0 and later. Please read this ",(0,t.jsx)(n.a,{href:"https://www.lfdecentralizedtrust.org/blog/sunsetting-tessera-and-simplifying-hyperledger-besu",children:"blog post"})," for more context on the rationale behind this decision as well as alternative options."]})}),"\n",(0,t.jsxs)(n.p,{children:["Configuring a network that supports private transactions requires starting a ",(0,t.jsx)(n.a,{href:"https://docs.tessera.consensys.net/",children:"Tessera"})," node for each Besu node. Besu command line options associate the Besu node with the Tessera node."]}),"\n",(0,t.jsxs)(n.p,{children:["This tutorial assumes you have completed setting up an IBFT 2.0 network to the point where you have ",(0,t.jsx)(n.a,{href:"/private-networks/tutorials/ibft/#5-copy-the-node-private-keys-to-the-node-directories",children:"created the genesis file and copied the private keys"}),". If not, complete steps 1 to 5 of the ",(0,t.jsx)(n.a,{href:"/private-networks/tutorials/ibft/",children:"Create an IBFT 2.0"})," tutorial before continuing."]}),"\n",(0,t.jsxs)(n.admonition,{type:"important",children:[(0,t.jsxs)(n.p,{children:["To support privacy, ensure your genesis file includes at least the ",(0,t.jsx)(n.code,{children:"byzantium"})," milestone."]}),(0,t.jsx)(n.p,{children:"This tutorial configures a private network using IBFT 2.0 for educational purposes only. IBFT 2.0 requires 4 validators to be Byzantine fault tolerant."})]}),"\n",(0,t.jsx)(n.p,{children:"In this tutorial we start Tessera nodes for the four Besu nodes and associate each Besu node with a Tessera node."}),"\n",(0,t.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://docs.tessera.consensys.net/category/install",children:"Install Tessera"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"steps",children:"Steps"}),"\n",(0,t.jsx)(n.h3,{id:"1-create-tessera-directories",children:"1. Create Tessera directories"}),"\n",(0,t.jsxs)(n.p,{children:["Inside each ",(0,t.jsx)(n.code,{children:"Node-*"})," directory, create a ",(0,t.jsx)(n.code,{children:"Tessera"})," directory:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"IBFT-Network/\n\u251c\u2500\u2500 Node-1\n\u2502\xa0\xa0 \u251c\u2500\u2500 data\n\u2502   \u251c\u2500\u2500 Tessera\n\u251c\u2500\u2500 Node-2\n\u2502\xa0\xa0 \u251c\u2500\u2500 data\n\u2502   \u251c\u2500\u2500 Tessera\n\u251c\u2500\u2500 Node-3\n\u2502\xa0\xa0 \u251c\u2500\u2500 data\n\u2502   \u251c\u2500\u2500 Tessera\n\u2514\u2500\u2500 Node-4\n    \u251c\u2500\u2500 data\n    \u251c\u2500\u2500 Tessera\n"})}),"\n",(0,t.jsx)(n.h3,{id:"2-generate-tessera-keys",children:"2. Generate Tessera keys"}),"\n",(0,t.jsx)(n.p,{children:"This example creates an unlocked private key, meaning you do not need a password to decrypt the private key file."}),"\n",(0,t.jsxs)(n.p,{children:["In each ",(0,t.jsx)(n.code,{children:"Tessera"})," directory, generate a public/private key pair for the Tessera node:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"tessera -keygen -filename nodeKey\n"})}),"\n",(0,t.jsxs)(n.p,{children:["At the prompt, press ",(0,t.jsx)(n.strong,{children:"Enter"})," to create an unlocked key."]}),"\n",(0,t.jsxs)(n.p,{children:["Tessera generates the public/private key pair and saves the keys in the ",(0,t.jsx)(n.code,{children:"nodeKey.pub"})," and ",(0,t.jsx)(n.code,{children:"nodeKey.key"})," files."]}),"\n",(0,t.jsx)(n.h3,{id:"3-create-tessera-configuration-files",children:"3. Create Tessera configuration files"}),"\n",(0,t.jsxs)(n.p,{children:["In the ",(0,t.jsx)(n.code,{children:"Tessera"})," directory for each node, create a file called ",(0,t.jsx)(n.code,{children:"tessera.conf"}),", with the following configuration:"]}),"\n",(0,t.jsx)(n.admonition,{type:"important",children:(0,t.jsxs)(n.p,{children:["In production environments, only specify ",(0,t.jsx)(n.a,{href:"https://docs.tessera.consensys.net/HowTo/Configure/TLS/",children:(0,t.jsx)(n.code,{children:"tls"})})," as ",(0,t.jsx)(n.code,{children:"OFF"})," if another transport security mechanism, such as WireGuard, is in place."]})}),"\n",(0,t.jsxs)(a.A,{children:[(0,t.jsx)(i.A,{value:"Node-1",label:"Node-1",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "mode": "orion",\n  "useWhiteList": false,\n  "jdbc": {\n    "username": "sa",\n    "password": "",\n    "url": "jdbc:h2:./target/h2/tessera1",\n    "autoCreateTables": true\n  },\n  "serverConfigs": [\n    {\n      "app": "ThirdParty",\n      "serverAddress": "http://localhost:9101",\n      "communicationType": "REST"\n    },\n    {\n      "app": "Q2T",\n      "serverAddress": "http://localhost:9102",\n      "communicationType": "REST"\n    },\n    {\n      "app": "P2P",\n      "serverAddress": "http://localhost:9103",\n      "sslConfig": {\n        "tls": "OFF"\n      },\n      "communicationType": "REST"\n    }\n  ],\n  "peer": [\n    {\n      "url": "http://localhost:9203"\n    },\n    {\n      "url": "http://localhost:9303"\n    },\n    {\n      "url": "http://localhost:9403"\n    }\n  ],\n  "keys": {\n    "passwords": [],\n    "keyData": [\n      {\n        "privateKeyPath": "nodeKey.key",\n        "publicKeyPath": "nodeKey.pub"\n      }\n    ]\n  },\n  "alwaysSendTo": []\n}\n'})})}),(0,t.jsx)(i.A,{value:"Node-2",label:"Node-2",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "mode": "orion",\n  "useWhiteList": false,\n  "jdbc": {\n    "username": "sa",\n    "password": "",\n    "url": "jdbc:h2:./target/h2/tessera1",\n    "autoCreateTables": true\n  },\n  "serverConfigs": [\n    {\n      "app": "ThirdParty",\n      "serverAddress": "http://localhost:9201",\n      "communicationType": "REST"\n    },\n    {\n      "app": "Q2T",\n      "serverAddress": "http://localhost:9202",\n      "communicationType": "REST"\n    },\n    {\n      "app": "P2P",\n      "serverAddress": "http://localhost:9203",\n      "sslConfig": {\n        "tls": "OFF"\n      },\n      "communicationType": "REST"\n    }\n  ],\n  "peer": [\n    {\n      "url": "http://localhost:9103"\n    },\n    {\n      "url": "http://localhost:9303"\n    },\n    {\n      "url": "http://localhost:9403"\n    }\n  ],\n  "keys": {\n    "passwords": [],\n    "keyData": [\n      {\n        "privateKeyPath": "nodeKey.key",\n        "publicKeyPath": "nodeKey.pub"\n      }\n    ]\n  },\n  "alwaysSendTo": []\n}\n'})})}),(0,t.jsx)(i.A,{value:"Node-3",label:"Node-3",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "mode": "orion",\n  "useWhiteList": false,\n  "jdbc": {\n    "username": "sa",\n    "password": "",\n    "url": "jdbc:h2:./target/h2/tessera1",\n    "autoCreateTables": true\n  },\n  "serverConfigs": [\n    {\n      "app": "ThirdParty",\n      "serverAddress": "http://localhost:9301",\n      "communicationType": "REST"\n    },\n    {\n      "app": "Q2T",\n      "serverAddress": "http://localhost:9302",\n      "communicationType": "REST"\n    },\n    {\n      "app": "P2P",\n      "serverAddress": "http://localhost:9303",\n      "sslConfig": {\n        "tls": "OFF"\n      },\n      "communicationType": "REST"\n    }\n  ],\n  "peer": [\n    {\n      "url": "http://localhost:9103"\n    },\n    {\n      "url": "http://localhost:9203"\n    },\n    {\n      "url": "http://localhost:9403"\n    }\n  ],\n  "keys": {\n    "passwords": [],\n    "keyData": [\n      {\n        "privateKeyPath": "nodeKey.key",\n        "publicKeyPath": "nodeKey.pub"\n      }\n    ]\n  },\n  "alwaysSendTo": []\n}\n'})})}),(0,t.jsx)(i.A,{value:"Node-4",label:"Node-4",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "mode": "orion",\n  "useWhiteList": false,\n  "jdbc": {\n    "username": "sa",\n    "password": "",\n    "url": "jdbc:h2:./target/h2/tessera1",\n    "autoCreateTables": true\n  },\n  "serverConfigs": [\n    {\n      "app": "ThirdParty",\n      "serverAddress": "http://localhost:9401",\n      "communicationType": "REST"\n    },\n    {\n      "app": "Q2T",\n      "serverAddress": "http://localhost:9402",\n      "communicationType": "REST"\n    },\n    {\n      "app": "P2P",\n      "serverAddress": "http://localhost:9403",\n      "sslConfig": {\n        "tls": "OFF"\n      },\n      "communicationType": "REST"\n    }\n  ],\n  "peer": [\n    {\n      "url": "http://localhost:9103"\n    },\n    {\n      "url": "http://localhost:9203"\n    },\n    {\n      "url": "http://localhost:9303"\n    }\n  ],\n  "keys": {\n    "passwords": [],\n    "keyData": [\n      {\n        "privateKeyPath": "nodeKey.key",\n        "publicKeyPath": "nodeKey.pub"\n      }\n    ]\n  },\n  "alwaysSendTo": []\n}\n'})})})]}),"\n",(0,t.jsx)(n.p,{children:"In the configuration file, specify:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Different port numbers for the various servers in the ",(0,t.jsx)(n.a,{href:"https://docs.tessera.consensys.net/HowTo/Configure/TesseraAPI/",children:(0,t.jsx)(n.code,{children:"serverConfigs"})})," section."]}),"\n",(0,t.jsxs)(n.li,{children:["The address of the Tessera nodes to discover, in the ",(0,t.jsx)(n.a,{href:"https://docs.tessera.consensys.net/HowTo/Configure/Peer-discovery/#specify-peers",children:(0,t.jsx)(n.code,{children:"peer"})})," section."]}),"\n",(0,t.jsx)(n.li,{children:"The location of the public/private key pair."}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"4-start-the-tessera-nodes",children:"4. Start the Tessera nodes"}),"\n",(0,t.jsxs)(n.p,{children:["In each ",(0,t.jsx)(n.code,{children:"Tessera"})," directory, start Tessera specifying the ",(0,t.jsx)(n.a,{href:"#3-create-tessera-configuration-files",children:"configuration file"})," created in the previous step:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"tessera -configfile tessera.conf\n"})}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsxs)(n.p,{children:["After starting the first Tessera node and before starting the other nodes, the log message ",(0,t.jsx)(n.code,{children:"failed to connect to node"})," displays. This is normal behavior. Until you start the other peer nodes, your node is not connected and displays this warning. You can continue to start the other nodes."]})}),"\n",(0,t.jsx)(n.h3,{id:"5-start-besu-node-1",children:"5. Start Besu Node-1"}),"\n",(0,t.jsxs)(n.p,{children:["In the ",(0,t.jsx)(n.code,{children:"Node-1"})," directory, start Besu Node-1:"]}),"\n",(0,t.jsxs)(a.A,{children:[(0,t.jsx)(i.A,{value:"MacOS",label:"MacOS",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'besu --data-path=data --genesis-file=../genesis.json --rpc-http-enabled --rpc-http-api=ETH,NET,IBFT,EEA,PRIV --host-allowlist="*" --rpc-http-cors-origins="all" --privacy-enabled --privacy-url=http://127.0.0.1:9102 --privacy-public-key-file=Tessera/nodeKey.pub --profile=ENTERPRISE\n'})})}),(0,t.jsx)(i.A,{value:"Windows",label:"Windows",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'besu --data-path=data --genesis-file=..\\genesis.json --rpc-http-enabled --rpc-http-api=ETH,NET,IBFT,EEA,PRIV --host-allowlist="*" --rpc-http-cors-origins="all" --privacy-enabled --privacy-url=http://127.0.0.1:9102 --privacy-public-key-file=Tessera\\nodeKey.pub --profile=ENTERPRISE\n'})})})]}),"\n",(0,t.jsx)(n.p,{children:"The command line specifies privacy options:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"/private-networks/reference/cli/options#privacy-enabled-deprecated",children:(0,t.jsx)(n.code,{children:"--privacy-enabled"})})," enables privacy."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"/private-networks/reference/cli/options#privacy-url-deprecated",children:(0,t.jsx)(n.code,{children:"--privacy-url"})})," specifies the Q2T server address of the Tessera node (",(0,t.jsx)(n.code,{children:"Q2T"})," in ",(0,t.jsx)(n.code,{children:"tessera.conf"}),")."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"/private-networks/reference/cli/options#privacy-public-key-file-deprecated",children:(0,t.jsx)(n.code,{children:"--privacy-public-key-file"})})," specifies the file containing Tessera node public key (created in ",(0,t.jsx)(n.a,{href:"#2-generate-tessera-keys",children:"3. Generate Tessera Keys"}),")."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"/public-networks/reference/cli/options#rpc-http-api",children:(0,t.jsx)(n.code,{children:"--rpc-http-api"})})," includes ",(0,t.jsx)(n.code,{children:"EEA"})," and ",(0,t.jsx)(n.code,{children:"PRIV"})," in the list of JSON-RPC APIs to enable privacy JSON-RPC API methods."]}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["Use the ",(0,t.jsx)(n.a,{href:"/private-networks/reference/cli/options#privacy-marker-transaction-signing-key-file-deprecated",children:(0,t.jsx)(n.code,{children:"--privacy-marker-transaction-signing-key-file"})})," command line option to sign ",(0,t.jsx)(n.a,{href:"/private-networks/concepts/privacy/private-transactions/processing",children:"privacy marker transactions"})," using a supplied key. The command line option is mandatory in privacy-enabled paid gas networks."]})}),"\n",(0,t.jsxs)(n.p,{children:["When the node starts, the ",(0,t.jsx)(n.a,{href:"/public-networks/concepts/node-keys#enode-url",children:"enode URL"})," displays. Copy the enode URL to specify Node-1 as the bootnode in the following steps."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Node 1 Enode URL",src:s(14739).A+"",width:"988",height:"126"})}),"\n",(0,t.jsx)(n.h3,{id:"6-start-besu-node-2",children:"6. Start Besu Node-2"}),"\n",(0,t.jsxs)(n.p,{children:["In the ",(0,t.jsx)(n.code,{children:"Node-2"})," directory, start Besu Node-2 specifying the Node-1 enode URL copied when starting Node-1 as the bootnode:"]}),"\n",(0,t.jsxs)(a.A,{children:[(0,t.jsx)(i.A,{value:"MacOS",label:"MacOS",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'besu --data-path=data --genesis-file=../genesis.json --bootnodes=<Node-1 Enode URL> --p2p-port=30304 --rpc-http-enabled --rpc-http-api=ETH,NET,IBFT,EEA,PRIV --host-allowlist="*" --rpc-http-cors-origins="all" --rpc-http-port=8546 --privacy-enabled --privacy-url=http://127.0.0.1:9202 --privacy-public-key-file=Tessera/nodeKey.pub --profile=ENTERPRISE\n'})})}),(0,t.jsx)(i.A,{value:"Windows",label:"Windows",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'besu --data-path=data --genesis-file=..\\genesis.json --bootnodes=<Node-1 Enode URL> --p2p-port=30304 --rpc-http-enabled --rpc-http-api=ETH,NET,IBFT,EEA,PRIV --host-allowlist="*" --rpc-http-cors-origins="all" --rpc-http-port=8546 --privacy-enabled --privacy-url=http://127.0.0.1:9202 --privacy-public-key-file=Tessera\\nodeKey.pub --profile=ENTERPRISE\n'})})})]}),"\n",(0,t.jsxs)(n.p,{children:["The command line specifies the same options as for Node-1 with different ports and Tessera node URL. The ",(0,t.jsx)(n.a,{href:"/public-networks/reference/cli/options#bootnodes",children:(0,t.jsx)(n.code,{children:"--bootnodes"})})," option specifies the enode URL of Node-1."]}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["When running Besu from the ",(0,t.jsx)(n.a,{href:"/private-networks/get-started/install/run-docker-image",children:"Docker image"}),", ",(0,t.jsx)(n.a,{href:"/private-networks/get-started/install/run-docker-image#expose-ports",children:"expose ports"}),"."]})}),"\n",(0,t.jsx)(n.h3,{id:"7-start-besu-node-3",children:"7. Start Besu Node-3"}),"\n",(0,t.jsxs)(n.p,{children:["In the ",(0,t.jsx)(n.code,{children:"Node-3"})," directory, start Besu Node-3 specifying the Node-1 enode URL copied when starting Node-1 as the bootnode:"]}),"\n",(0,t.jsxs)(a.A,{children:[(0,t.jsx)(i.A,{value:"MacOS",label:"MacOS",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'besu --data-path=data --genesis-file=../genesis.json --bootnodes=<Node-1 Enode URL> --p2p-port=30305 --rpc-http-enabled --rpc-http-api=ETH,NET,IBFT,EEA,PRIV --host-allowlist="*" --rpc-http-cors-origins="all" --rpc-http-port=8547 --privacy-enabled --privacy-url=http://127.0.0.1:9302 --privacy-public-key-file=Tessera/nodeKey.pub --profile=ENTERPRISE\n'})})}),(0,t.jsx)(i.A,{value:"Windows",label:"Windows",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'besu --data-path=data --genesis-file=..\\genesis.json --bootnodes=<Node-1 Enode URL> --p2p-port=30305 --rpc-http-enabled --rpc-http-api=ETH,NET,IBFT,EEA,PRIV --host-allowlist="*" --rpc-http-cors-origins="all" --rpc-http-port=8547 --privacy-enabled --privacy-url=http://127.0.0.1:9302 --privacy-public-key-file=Tessera\\nodeKey.pub --profile=ENTERPRISE\n'})})})]}),"\n",(0,t.jsxs)(n.p,{children:["The command line specifies the same options as for Node-1 with different ports and Tessera node URL. The ",(0,t.jsx)(n.a,{href:"/public-networks/reference/cli/options#bootnodes",children:(0,t.jsx)(n.code,{children:"--bootnodes"})})," option specifies the enode URL of Node-1."]}),"\n",(0,t.jsx)(n.h3,{id:"8-start-besu-node-4",children:"8. Start Besu Node-4"}),"\n",(0,t.jsxs)(n.p,{children:["In the ",(0,t.jsx)(n.code,{children:"Node-4"})," directory, start Besu Node-4 specifying the Node-1 enode URL copied when starting Node-1 as the bootnode:"]}),"\n",(0,t.jsxs)(a.A,{children:[(0,t.jsx)(i.A,{value:"MacOS",label:"MacOS",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'besu --data-path=data --genesis-file=../genesis.json --bootnodes=<Node-1 Enode URL> --p2p-port=30306 --rpc-http-enabled --rpc-http-api=ETH,NET,IBFT,EEA,PRIV --host-allowlist="*" --rpc-http-cors-origins="all" --rpc-http-port=8548 --privacy-enabled --privacy-url=http://127.0.0.1:9402 --privacy-public-key-file=Tessera/nodeKey.pub --profile=ENTERPRISE\n'})})}),(0,t.jsx)(i.A,{value:"Windows",label:"Windows",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'besu --data-path=data --genesis-file=..\\genesis.json --bootnodes=<Node-1 Enode URL> --p2p-port=30306 --rpc-http-enabled --rpc-http-api=ETH,NET,IBFT,EEA,PRIV --host-allowlist="*" --rpc-http-cors-origins="all" --rpc-http-port=8548 --privacy-enabled --privacy-url=http://127.0.0.1:9402 --privacy-public-key-file=Tessera\\nodeKey.pub --profile=ENTERPRISE\n'})})})]}),"\n",(0,t.jsxs)(n.p,{children:["The command line specifies the same options as for Node-1 with different ports and Tessera node URL. The ",(0,t.jsx)(n.a,{href:"/public-networks/reference/cli/options#bootnodes",children:(0,t.jsx)(n.code,{children:"--bootnodes"})})," option specifies the enode URL of Node-1."]})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},19365:(e,n,s)=>{s.d(n,{A:()=>i});s(96540);var t=s(18215);const r={tabItem:"tabItem_Ymn6"};var a=s(74848);function i(e){let{children:n,hidden:s,className:i}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,t.A)(r.tabItem,i),hidden:s,children:n})}},11470:(e,n,s)=>{s.d(n,{A:()=>T});var t=s(96540),r=s(18215),a=s(23104),i=s(56347),o=s(205),l=s(57485),c=s(31682),d=s(70679);function p(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:s}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return p(e).map((e=>{let{props:{value:n,label:s,attributes:t,default:r}}=e;return{value:n,label:s,attributes:t,default:r}}))}(s);return function(e){const n=(0,c.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,s])}function u(e){let{value:n,tabValues:s}=e;return s.some((e=>e.value===n))}function f(e){let{queryString:n=!1,groupId:s}=e;const r=(0,i.W6)(),a=function(e){let{queryString:n=!1,groupId:s}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!s)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return s??null}({queryString:n,groupId:s});return[(0,l.aZ)(a),(0,t.useCallback)((e=>{if(!a)return;const n=new URLSearchParams(r.location.search);n.set(a,e),r.replace({...r.location,search:n.toString()})}),[a,r])]}function y(e){const{defaultValue:n,queryString:s=!1,groupId:r}=e,a=h(e),[i,l]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:s}=e;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!u({value:n,tabValues:s}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${s.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=s.find((e=>e.default))??s[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:a}))),[c,p]=f({queryString:s,groupId:r}),[y,b]=function(e){let{groupId:n}=e;const s=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,a]=(0,d.Dv)(s);return[r,(0,t.useCallback)((e=>{s&&a.set(e)}),[s,a])]}({groupId:r}),v=(()=>{const e=c??y;return u({value:e,tabValues:a})?e:null})();(0,o.A)((()=>{v&&l(v)}),[v]);return{selectedValue:i,selectValue:(0,t.useCallback)((e=>{if(!u({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);l(e),p(e),b(e)}),[p,b,a]),tabValues:a}}var b=s(92303);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=s(74848);function x(e){let{className:n,block:s,selectedValue:t,selectValue:i,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.a_)(),d=e=>{const n=e.currentTarget,s=l.indexOf(n),r=o[s].value;r!==t&&(c(n),i(r))},p=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const s=l.indexOf(e.currentTarget)+1;n=l[s]??l[0];break}case"ArrowLeft":{const s=l.indexOf(e.currentTarget)-1;n=l[s]??l[l.length-1];break}}n?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":s},n),children:o.map((e=>{let{value:n,label:s,attributes:a}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>l.push(e),onKeyDown:p,onClick:d,...a,className:(0,r.A)("tabs__item",v.tabItem,a?.className,{"tabs__item--active":t===n}),children:s??n},n)}))})}function g(e){let{lazy:n,children:s,selectedValue:a}=e;const i=(Array.isArray(s)?s:[s]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===a));return e?(0,t.cloneElement)(e,{className:(0,r.A)("margin-top--md",e.props.className)}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function m(e){const n=y(e);return(0,j.jsxs)("div",{className:(0,r.A)("tabs-container",v.tabList),children:[(0,j.jsx)(x,{...n,...e}),(0,j.jsx)(g,{...n,...e})]})}function T(e){const n=(0,b.A)();return(0,j.jsx)(m,{...e,children:p(e.children)},String(n))}},14739:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/EnodeStartup-145939e1c789c28e464db82faa0fb3ca.png"},28453:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>o});var t=s(96540);const r={},a=t.createContext(r);function i(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);