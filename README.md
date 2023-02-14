# Hedera Hardhat Example Project

The Hedera Hardhat Example Project demonstrates how to test and deploy a smart contract using the Hedera JSON RPC Relay in a local Hedera environment. It comes with a sample contract, a test for that contract, and a script that deploys that contract.


1. Clone this repo to your local machine:

```shell
git clone https://github.com/hashgraph/hedera-hardhat-example-project.git
```

2. Once you've cloned the repository, open your IDE terminal and navigate to the root directory of the project. Run the following command to install all the necessary dependencies:

```shell
npm install
```

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat run scripts/deploy.js
```
