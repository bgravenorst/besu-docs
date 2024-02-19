"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[65469],{52436:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var r=s(85893),t=s(11151),a=s(74866),i=s(85162);const o={title:"Create a privacy enabled network using the Quickstart",sidebar_position:1,description:"Configure Hyperledger Besu privacy",tags:["private networks"]},l="Create a privacy-enabled network",c={id:"private-networks/tutorials/privacy/index",title:"Create a privacy enabled network using the Quickstart",description:"Configure Hyperledger Besu privacy",source:"@site/versioned_docs/version-23.4.1/private-networks/tutorials/privacy/index.md",sourceDirName:"private-networks/tutorials/privacy",slug:"/private-networks/tutorials/privacy/",permalink:"/23.4.1/private-networks/tutorials/privacy/",draft:!1,unlisted:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/versioned_docs/version-23.4.1/private-networks/tutorials/privacy/index.md",tags:[{label:"private networks",permalink:"/23.4.1/tags/private-networks"}],version:"23.4.1",lastUpdatedAt:1708294638,formattedLastUpdatedAt:"Feb 18, 2024",sidebarPosition:1,frontMatter:{title:"Create a privacy enabled network using the Quickstart",sidebar_position:1,description:"Configure Hyperledger Besu privacy",tags:["private networks"]},sidebar:"privateDocSidebar",previous:{title:"Create an Ethash network",permalink:"/23.4.1/private-networks/tutorials/ethash"},next:{title:"Create a multi-tenant network",permalink:"/23.4.1/private-networks/tutorials/privacy/multi-tenancy"}},d={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"1. Create Tessera directories",id:"1-create-tessera-directories",level:2},{value:"2. Generate Tessera keys",id:"2-generate-tessera-keys",level:2},{value:"3. Create Tessera configuration files",id:"3-create-tessera-configuration-files",level:2},{value:"4. Start the Tessera nodes",id:"4-start-the-tessera-nodes",level:2},{value:"5. Start Besu Node-1",id:"5-start-besu-node-1",level:2},{value:"6. Start Besu Node-2",id:"6-start-besu-node-2",level:2},{value:"7. Start Besu Node-3",id:"7-start-besu-node-3",level:2},{value:"8. Start Besu Node-4",id:"8-start-besu-node-4",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"create-a-privacy-enabled-network",children:"Create a privacy-enabled network"}),"\n",(0,r.jsxs)(n.p,{children:["Configuring a network that supports private transactions requires starting a ",(0,r.jsx)(n.a,{href:"https://docs.tessera.consensys.net/",children:"Tessera"})," node for each Hyperledger Besu node. Besu command line options associate the Besu node with the Tessera node."]}),"\n",(0,r.jsxs)(n.p,{children:["This tutorial assumes you have completed setting up an IBFT 2.0 network to the point where you have ",(0,r.jsx)(n.a,{href:"/23.4.1/private-networks/tutorials/ibft/#5-copy-the-node-private-keys-to-the-node-directories",children:"created the genesis file and copied the private keys"}),". If not, complete steps 1 to 5 of the ",(0,r.jsx)(n.a,{href:"/23.4.1/private-networks/tutorials/ibft/",children:"Create an IBFT 2.0"})," tutorial before continuing."]}),"\n",(0,r.jsxs)(n.admonition,{type:"important",children:[(0,r.jsxs)(n.p,{children:["To support privacy, ensure your genesis file includes at least the ",(0,r.jsx)(n.code,{children:"byzantium"})," milestone."]}),(0,r.jsx)(n.p,{children:"This tutorial configures a private network using IBFT 2.0 for educational purposes only. IBFT 2.0 requires 4 validators to be Byzantine fault tolerant."})]}),"\n",(0,r.jsx)(n.p,{children:"In this tutorial we start Tessera nodes for the four Besu nodes and associate each Besu node with a Tessera node."}),"\n",(0,r.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://docs.tessera.consensys.net/category/install",children:"Install Tessera"}),"."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"1-create-tessera-directories",children:"1. Create Tessera directories"}),"\n",(0,r.jsxs)(n.p,{children:["Inside each ",(0,r.jsx)(n.code,{children:"Node-*"})," directory, create a ",(0,r.jsx)(n.code,{children:"Tessera"})," directory:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"IBFT-Network/\n\u251c\u2500\u2500 Node-1\n\u2502\xa0\xa0 \u251c\u2500\u2500 data\n\u2502   \u251c\u2500\u2500 Tessera\n\u251c\u2500\u2500 Node-2\n\u2502\xa0\xa0 \u251c\u2500\u2500 data\n\u2502   \u251c\u2500\u2500 Tessera\n\u251c\u2500\u2500 Node-3\n\u2502\xa0\xa0 \u251c\u2500\u2500 data\n\u2502   \u251c\u2500\u2500 Tessera\n\u2514\u2500\u2500 Node-4\n    \u251c\u2500\u2500 data\n    \u251c\u2500\u2500 Tessera\n"})}),"\n",(0,r.jsx)(n.h2,{id:"2-generate-tessera-keys",children:"2. Generate Tessera keys"}),"\n",(0,r.jsx)(n.p,{children:"This example creates an unlocked private key, meaning you do not need a password to decrypt the private key file."}),"\n",(0,r.jsxs)(n.p,{children:["In each ",(0,r.jsx)(n.code,{children:"Tessera"})," directory, generate a public/private key pair for the Tessera node:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"tessera -keygen -filename nodeKey\n"})}),"\n",(0,r.jsxs)(n.p,{children:["At the prompt, press ",(0,r.jsx)(n.strong,{children:"Enter"})," to create an unlocked key."]}),"\n",(0,r.jsxs)(n.p,{children:["Tessera generates the public/private key pair and saves the keys in the ",(0,r.jsx)(n.code,{children:"nodeKey.pub"})," and ",(0,r.jsx)(n.code,{children:"nodeKey.key"})," files."]}),"\n",(0,r.jsx)(n.h2,{id:"3-create-tessera-configuration-files",children:"3. Create Tessera configuration files"}),"\n",(0,r.jsxs)(n.p,{children:["In the ",(0,r.jsx)(n.code,{children:"Tessera"})," directory for each node, create a file called ",(0,r.jsx)(n.code,{children:"tessera.conf"}),", with the following configuration:"]}),"\n",(0,r.jsx)(n.admonition,{type:"important",children:(0,r.jsxs)(n.p,{children:["In production environments, only specify ",(0,r.jsx)(n.a,{href:"https://docs.tessera.consensys.net/HowTo/Configure/TLS/",children:(0,r.jsx)(n.code,{children:"tls"})})," as ",(0,r.jsx)(n.code,{children:"OFF"})," if another transport security mechanism, such as WireGuard, is in place."]})}),"\n",(0,r.jsxs)(a.Z,{children:[(0,r.jsx)(i.Z,{value:"Node-1",label:"Node-1",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "mode": "orion",\n  "useWhiteList": false,\n  "jdbc": {\n    "username": "sa",\n    "password": "",\n    "url": "jdbc:h2:./target/h2/tessera1",\n    "autoCreateTables": true\n  },\n  "serverConfigs": [\n    {\n      "app": "ThirdParty",\n      "serverAddress": "http://localhost:9101",\n      "communicationType": "REST"\n    },\n    {\n      "app": "Q2T",\n      "serverAddress": "http://localhost:9102",\n      "communicationType": "REST"\n    },\n    {\n      "app": "P2P",\n      "serverAddress": "http://localhost:9103",\n      "sslConfig": {\n        "tls": "OFF"\n      },\n      "communicationType": "REST"\n    }\n  ],\n  "peer": [\n    {\n      "url": "http://localhost:9203"\n    },\n    {\n      "url": "http://localhost:9303"\n    },\n    {\n      "url": "http://localhost:9403"\n    }\n  ],\n  "keys": {\n    "passwords": [],\n    "keyData": [\n      {\n        "privateKeyPath": "nodeKey.key",\n        "publicKeyPath": "nodeKey.pub"\n      }\n    ]\n  },\n  "alwaysSendTo": []\n}\n'})})}),(0,r.jsx)(i.Z,{value:"Node-2",label:"Node-2",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "mode": "orion",\n  "useWhiteList": false,\n  "jdbc": {\n    "username": "sa",\n    "password": "",\n    "url": "jdbc:h2:./target/h2/tessera1",\n    "autoCreateTables": true\n  },\n  "serverConfigs": [\n    {\n      "app": "ThirdParty",\n      "serverAddress": "http://localhost:9201",\n      "communicationType": "REST"\n    },\n    {\n      "app": "Q2T",\n      "serverAddress": "http://localhost:9202",\n      "communicationType": "REST"\n    },\n    {\n      "app": "P2P",\n      "serverAddress": "http://localhost:9203",\n      "sslConfig": {\n        "tls": "OFF"\n      },\n      "communicationType": "REST"\n    }\n  ],\n  "peer": [\n    {\n      "url": "http://localhost:9103"\n    },\n    {\n      "url": "http://localhost:9303"\n    },\n    {\n      "url": "http://localhost:9403"\n    }\n  ],\n  "keys": {\n    "passwords": [],\n    "keyData": [\n      {\n        "privateKeyPath": "nodeKey.key",\n        "publicKeyPath": "nodeKey.pub"\n      }\n    ]\n  },\n  "alwaysSendTo": []\n}\n'})})}),(0,r.jsx)(i.Z,{value:"Node-3",label:"Node-3",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "mode": "orion",\n  "useWhiteList": false,\n  "jdbc": {\n    "username": "sa",\n    "password": "",\n    "url": "jdbc:h2:./target/h2/tessera1",\n    "autoCreateTables": true\n  },\n  "serverConfigs": [\n    {\n      "app": "ThirdParty",\n      "serverAddress": "http://localhost:9301",\n      "communicationType": "REST"\n    },\n    {\n      "app": "Q2T",\n      "serverAddress": "http://localhost:9302",\n      "communicationType": "REST"\n    },\n    {\n      "app": "P2P",\n      "serverAddress": "http://localhost:9303",\n      "sslConfig": {\n        "tls": "OFF"\n      },\n      "communicationType": "REST"\n    }\n  ],\n  "peer": [\n    {\n      "url": "http://localhost:9103"\n    },\n    {\n      "url": "http://localhost:9203"\n    },\n    {\n      "url": "http://localhost:9403"\n    }\n  ],\n  "keys": {\n    "passwords": [],\n    "keyData": [\n      {\n        "privateKeyPath": "nodeKey.key",\n        "publicKeyPath": "nodeKey.pub"\n      }\n    ]\n  },\n  "alwaysSendTo": []\n}\n'})})}),(0,r.jsx)(i.Z,{value:"Node-4",label:"Node-4",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "mode": "orion",\n  "useWhiteList": false,\n  "jdbc": {\n    "username": "sa",\n    "password": "",\n    "url": "jdbc:h2:./target/h2/tessera1",\n    "autoCreateTables": true\n  },\n  "serverConfigs": [\n    {\n      "app": "ThirdParty",\n      "serverAddress": "http://localhost:9401",\n      "communicationType": "REST"\n    },\n    {\n      "app": "Q2T",\n      "serverAddress": "http://localhost:9402",\n      "communicationType": "REST"\n    },\n    {\n      "app": "P2P",\n      "serverAddress": "http://localhost:9403",\n      "sslConfig": {\n        "tls": "OFF"\n      },\n      "communicationType": "REST"\n    }\n  ],\n  "peer": [\n    {\n      "url": "http://localhost:9103"\n    },\n    {\n      "url": "http://localhost:9203"\n    },\n    {\n      "url": "http://localhost:9303"\n    }\n  ],\n  "keys": {\n    "passwords": [],\n    "keyData": [\n      {\n        "privateKeyPath": "nodeKey.key",\n        "publicKeyPath": "nodeKey.pub"\n      }\n    ]\n  },\n  "alwaysSendTo": []\n}\n'})})})]}),"\n",(0,r.jsx)(n.p,{children:"In the configuration file, specify:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Different port numbers for the various servers in the ",(0,r.jsx)(n.a,{href:"https://docs.tessera.consensys.net/HowTo/Configure/TesseraAPI/",children:(0,r.jsx)(n.code,{children:"serverConfigs"})})," section."]}),"\n",(0,r.jsxs)(n.li,{children:["The address of the Tessera nodes to discover, in the ",(0,r.jsx)(n.a,{href:"https://docs.tessera.consensys.net/HowTo/Configure/Peer-discovery/#specify-peers",children:(0,r.jsx)(n.code,{children:"peer"})})," section."]}),"\n",(0,r.jsx)(n.li,{children:"The location of the public/private key pair."}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"4-start-the-tessera-nodes",children:"4. Start the Tessera nodes"}),"\n",(0,r.jsxs)(n.p,{children:["In each ",(0,r.jsx)(n.code,{children:"Tessera"})," directory, start Tessera specifying the ",(0,r.jsx)(n.a,{href:"#3-create-tessera-configuration-files",children:"configuration file"})," created in the previous step:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"tessera -configfile tessera.conf\n"})}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsxs)(n.p,{children:["After starting the first Tessera node and before starting the other nodes, the log message ",(0,r.jsx)(n.code,{children:"failed to connect to node"})," displays. This is normal behavior. Until you start the other peer nodes, your node is not connected and displays this warning. You can continue to start the other nodes."]})}),"\n",(0,r.jsx)(n.h2,{id:"5-start-besu-node-1",children:"5. Start Besu Node-1"}),"\n",(0,r.jsxs)(n.p,{children:["In the ",(0,r.jsx)(n.code,{children:"Node-1"})," directory, start Besu Node-1:"]}),"\n",(0,r.jsxs)(a.Z,{children:[(0,r.jsx)(i.Z,{value:"MacOS",label:"MacOS",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'besu --data-path=data --genesis-file=../genesis.json --rpc-http-enabled --rpc-http-api=ETH,NET,IBFT,EEA,PRIV --host-allowlist="*" --rpc-http-cors-origins="all" --privacy-enabled --privacy-url=http://127.0.0.1:9102 --privacy-public-key-file=Tessera/nodeKey.pub --min-gas-price=0\n'})})}),(0,r.jsx)(i.Z,{value:"Windows",label:"Windows",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'besu --data-path=data --genesis-file=..\\genesis.json --rpc-http-enabled --rpc-http-api=ETH,NET,IBFT,EEA,PRIV --host-allowlist="*" --rpc-http-cors-origins="all" --privacy-enabled --privacy-url=http://127.0.0.1:9102 --privacy-public-key-file=Tessera\\nodeKey.pub --min-gas-price=0\n'})})})]}),"\n",(0,r.jsx)(n.p,{children:"The command line specifies privacy options:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/23.4.1/private-networks/reference/cli/options#privacy-enabled",children:(0,r.jsx)(n.code,{children:"--privacy-enabled"})})," enables privacy"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/23.4.1/private-networks/reference/cli/options#privacy-url",children:(0,r.jsx)(n.code,{children:"--privacy-url"})})," specifies the Q2T server address of the Tessera node (",(0,r.jsx)(n.code,{children:"Q2T"})," in ",(0,r.jsx)(n.code,{children:"tessera.conf"}),")"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/23.4.1/private-networks/reference/cli/options#privacy-public-key-file",children:(0,r.jsx)(n.code,{children:"--privacy-public-key-file"})})," specifies the file containing Tessera node public key (created in ",(0,r.jsx)(n.a,{href:"#2-generate-tessera-keys",children:"3. Generate Tessera Keys"}),")"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/23.4.1/public-networks/reference/cli/options#rpc-http-api",children:(0,r.jsx)(n.code,{children:"--rpc-http-api"})})," includes ",(0,r.jsx)(n.code,{children:"EEA"})," and ",(0,r.jsx)(n.code,{children:"PRIV"})," in the list of JSON-RPC APIs to enable privacy JSON-RPC API methods."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/23.4.1/public-networks/reference/cli/options#min-gas-price",children:(0,r.jsx)(n.code,{children:"--min-gas-price"})})," is 0 for a ",(0,r.jsx)(n.a,{href:"/23.4.1/private-networks/how-to/configure/free-gas",children:"free gas network"}),"."]}),"\n"]}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["Use the ",(0,r.jsx)(n.a,{href:"/23.4.1/private-networks/reference/cli/options#privacy-marker-transaction-signing-key-file",children:(0,r.jsx)(n.code,{children:"--privacy-marker-transaction-signing-key-file"})})," command line option to sign ",(0,r.jsx)(n.a,{href:"/23.4.1/private-networks/concepts/privacy/private-transactions/processing",children:"privacy marker transactions"})," using a supplied key. The command line option is mandatory in privacy-enabled paid gas networks."]})}),"\n",(0,r.jsxs)(n.p,{children:["When the node starts, the ",(0,r.jsx)(n.a,{href:"/23.4.1/public-networks/concepts/node-keys#enode-url",children:"enode URL"})," displays. Copy the enode URL to specify Node-1 as the bootnode in the following steps."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Node 1 Enode URL",src:s(57198).Z+"",width:"988",height:"126"})}),"\n",(0,r.jsx)(n.h2,{id:"6-start-besu-node-2",children:"6. Start Besu Node-2"}),"\n",(0,r.jsxs)(n.p,{children:["In the ",(0,r.jsx)(n.code,{children:"Node-2"})," directory, start Besu Node-2 specifying the Node-1 enode URL copied when starting Node-1 as the bootnode:"]}),"\n",(0,r.jsxs)(a.Z,{children:[(0,r.jsx)(i.Z,{value:"MacOS",label:"MacOS",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'besu --data-path=data --genesis-file=../genesis.json --bootnodes=<Node-1 Enode URL> --p2p-port=30304 --rpc-http-enabled --rpc-http-api=ETH,NET,IBFT,EEA,PRIV --host-allowlist="*" --rpc-http-cors-origins="all" --rpc-http-port=8546 --privacy-enabled --privacy-url=http://127.0.0.1:9202 --privacy-public-key-file=Tessera/nodeKey.pub --min-gas-price=0\n'})})}),(0,r.jsx)(i.Z,{value:"Windows",label:"Windows",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'besu --data-path=data --genesis-file=..\\genesis.json --bootnodes=<Node-1 Enode URL> --p2p-port=30304 --rpc-http-enabled --rpc-http-api=ETH,NET,IBFT,EEA,PRIV --host-allowlist="*" --rpc-http-cors-origins="all" --rpc-http-port=8546 --privacy-enabled --privacy-url=http://127.0.0.1:9202 --privacy-public-key-file=Tessera\\nodeKey.pub --min-gas-price=0\n'})})})]}),"\n",(0,r.jsxs)(n.p,{children:["The command line specifies the same options as for Node-1 with different ports and Tessera node URL. The ",(0,r.jsx)(n.a,{href:"/23.4.1/public-networks/reference/cli/options#bootnodes",children:(0,r.jsx)(n.code,{children:"--bootnodes"})})," option specifies the enode URL of Node-1."]}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["When running Besu from the ",(0,r.jsx)(n.a,{href:"/23.4.1/private-networks/get-started/install/run-docker-image",children:"Docker image"}),", ",(0,r.jsx)(n.a,{href:"/23.4.1/private-networks/get-started/install/run-docker-image#expose-ports",children:"expose ports"}),"."]})}),"\n",(0,r.jsx)(n.h2,{id:"7-start-besu-node-3",children:"7. Start Besu Node-3"}),"\n",(0,r.jsxs)(n.p,{children:["In the ",(0,r.jsx)(n.code,{children:"Node-3"})," directory, start Besu Node-3 specifying the Node-1 enode URL copied when starting Node-1 as the bootnode:"]}),"\n",(0,r.jsxs)(a.Z,{children:[(0,r.jsx)(i.Z,{value:"MacOS",label:"MacOS",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'besu --data-path=data --genesis-file=../genesis.json --bootnodes=<Node-1 Enode URL> --p2p-port=30305 --rpc-http-enabled --rpc-http-api=ETH,NET,IBFT,EEA,PRIV --host-allowlist="*" --rpc-http-cors-origins="all" --rpc-http-port=8547 --privacy-enabled --privacy-url=http://127.0.0.1:9302 --privacy-public-key-file=Tessera/nodeKey.pub --min-gas-price=0\n'})})}),(0,r.jsx)(i.Z,{value:"Windows",label:"Windows",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'besu --data-path=data --genesis-file=..\\genesis.json --bootnodes=<Node-1 Enode URL> --p2p-port=30305 --rpc-http-enabled --rpc-http-api=ETH,NET,IBFT,EEA,PRIV --host-allowlist="*" --rpc-http-cors-origins="all" --rpc-http-port=8547 --privacy-enabled --privacy-url=http://127.0.0.1:9302 --privacy-public-key-file=Tessera\\nodeKey.pub --min-gas-price=0\n'})})})]}),"\n",(0,r.jsxs)(n.p,{children:["The command line specifies the same options as for Node-1 with different ports and Tessera node URL. The ",(0,r.jsx)(n.a,{href:"/23.4.1/public-networks/reference/cli/options#bootnodes",children:(0,r.jsx)(n.code,{children:"--bootnodes"})})," option specifies the enode URL of Node-1."]}),"\n",(0,r.jsx)(n.h2,{id:"8-start-besu-node-4",children:"8. Start Besu Node-4"}),"\n",(0,r.jsxs)(n.p,{children:["In the ",(0,r.jsx)(n.code,{children:"Node-4"})," directory, start Besu Node-4 specifying the Node-1 enode URL copied when starting Node-1 as the bootnode:"]}),"\n",(0,r.jsxs)(a.Z,{children:[(0,r.jsx)(i.Z,{value:"MacOS",label:"MacOS",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'besu --data-path=data --genesis-file=../genesis.json --bootnodes=<Node-1 Enode URL> --p2p-port=30306 --rpc-http-enabled --rpc-http-api=ETH,NET,IBFT,EEA,PRIV --host-allowlist="*" --rpc-http-cors-origins="all" --rpc-http-port=8548 --privacy-enabled --privacy-url=http://127.0.0.1:9402 --privacy-public-key-file=Tessera/nodeKey.pub --min-gas-price=0\n'})})}),(0,r.jsx)(i.Z,{value:"Windows",label:"Windows",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'besu --data-path=data --genesis-file=..\\genesis.json --bootnodes=<Node-1 Enode URL> --p2p-port=30306 --rpc-http-enabled --rpc-http-api=ETH,NET,IBFT,EEA,PRIV --host-allowlist="*" --rpc-http-cors-origins="all" --rpc-http-port=8548 --privacy-enabled --privacy-url=http://127.0.0.1:9402 --privacy-public-key-file=Tessera\\nodeKey.pub --min-gas-price=0\n'})})})]}),"\n",(0,r.jsxs)(n.p,{children:["The command line specifies the same options as for Node-1 with different ports and Tessera node URL. The ",(0,r.jsx)(n.a,{href:"/23.4.1/public-networks/reference/cli/options#bootnodes",children:(0,r.jsx)(n.code,{children:"--bootnodes"})})," option specifies the enode URL of Node-1."]})]})}function u(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},85162:(e,n,s)=>{s.d(n,{Z:()=>i});s(67294);var r=s(36905);const t={tabItem:"tabItem_Ymn6"};var a=s(85893);function i(e){let{children:n,hidden:s,className:i}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,r.Z)(t.tabItem,i),hidden:s,children:n})}},74866:(e,n,s)=>{s.d(n,{Z:()=>T});var r=s(67294),t=s(36905),a=s(12466),i=s(16550),o=s(20469),l=s(91980),c=s(67392),d=s(50012);function p(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:s}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return p(e).map((e=>{let{props:{value:n,label:s,attributes:r,default:t}}=e;return{value:n,label:s,attributes:r,default:t}}))}(s);return function(e){const n=(0,c.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,s])}function u(e){let{value:n,tabValues:s}=e;return s.some((e=>e.value===n))}function f(e){let{queryString:n=!1,groupId:s}=e;const t=(0,i.k6)(),a=function(e){let{queryString:n=!1,groupId:s}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!s)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return s??null}({queryString:n,groupId:s});return[(0,l._X)(a),(0,r.useCallback)((e=>{if(!a)return;const n=new URLSearchParams(t.location.search);n.set(a,e),t.replace({...t.location,search:n.toString()})}),[a,t])]}function y(e){const{defaultValue:n,queryString:s=!1,groupId:t}=e,a=h(e),[i,l]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:s}=e;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!u({value:n,tabValues:s}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${s.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=s.find((e=>e.default))??s[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:a}))),[c,p]=f({queryString:s,groupId:t}),[y,b]=function(e){let{groupId:n}=e;const s=function(e){return e?`docusaurus.tab.${e}`:null}(n),[t,a]=(0,d.Nk)(s);return[t,(0,r.useCallback)((e=>{s&&a.set(e)}),[s,a])]}({groupId:t}),v=(()=>{const e=c??y;return u({value:e,tabValues:a})?e:null})();(0,o.Z)((()=>{v&&l(v)}),[v]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!u({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);l(e),p(e),b(e)}),[p,b,a]),tabValues:a}}var b=s(72389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=s(85893);function j(e){let{className:n,block:s,selectedValue:r,selectValue:i,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.o5)(),d=e=>{const n=e.currentTarget,s=l.indexOf(n),t=o[s].value;t!==r&&(c(n),i(t))},p=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const s=l.indexOf(e.currentTarget)+1;n=l[s]??l[0];break}case"ArrowLeft":{const s=l.indexOf(e.currentTarget)-1;n=l[s]??l[l.length-1];break}}n?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,t.Z)("tabs",{"tabs--block":s},n),children:o.map((e=>{let{value:n,label:s,attributes:a}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>l.push(e),onKeyDown:p,onClick:d,...a,className:(0,t.Z)("tabs__item",v.tabItem,a?.className,{"tabs__item--active":r===n}),children:s??n},n)}))})}function x(e){let{lazy:n,children:s,selectedValue:t}=e;const a=(Array.isArray(s)?s:[s]).filter(Boolean);if(n){const e=a.find((e=>e.props.value===t));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:a.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==t})))})}function m(e){const n=y(e);return(0,g.jsxs)("div",{className:(0,t.Z)("tabs-container",v.tabList),children:[(0,g.jsx)(j,{...e,...n}),(0,g.jsx)(x,{...e,...n})]})}function T(e){const n=(0,b.Z)();return(0,g.jsx)(m,{...e,children:p(e.children)},String(n))}},57198:(e,n,s)=>{s.d(n,{Z:()=>r});const r=s.p+"assets/images/EnodeStartup-145939e1c789c28e464db82faa0fb3ca.png"},11151:(e,n,s)=>{s.d(n,{Z:()=>o,a:()=>i});var r=s(67294);const t={},a=r.createContext(t);function i(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);