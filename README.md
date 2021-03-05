# mudrex-ropsten subgraph


Based on the example subgraph [https://github.com/graphprotocol/example-subgraph](https://github.com/graphprotocol/example-subgraph).

 For more information see the docs on [https://thegraph.com/docs/](https://thegraph.com/docs/).


# Setup
```
yarn install
pip install eth-brownie
brownie compile

//deploy subgraph
yarn codegen
yarn deploy

//brownie deployment
export WEB3_INFURA_PROJECT_ID=...
brownie console
```