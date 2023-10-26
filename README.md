# Hedera Hardhat Example Project

This Hedera Hardhat Example Project offers boilerplate code for testing and deploying smart contracts via Hardhat. It includes configuration for both community-hosted and local ([Hedera Local Node](https://github.com/hashgraph/hedera-local-node)) instances of the [Hedera JSON RPC Relay](https://github.com/hashgraph/hedera-json-rpc-relay). 

:fire: Check out the step-by-step tutorial [here](https://docs.hedera.com/hedera/tutorials/smart-contracts/deploy-a-smart-contract-using-hardhat-and-hedera-json-rpc-relays).

## Project Files and Folders

- `hardhat.config.js` - This is the configuration file for your Hardhat project development environment. It centralizes and defines various settings like Hedera networks, Solidity compiler versions, plugins, and tasks.

- `/contracts` - This folder holds all the Solidity smart contract files that make up the core logic of your dApp. contracts are written in `.sol` files.

- `/test` - This folder contains test scripts that help validate your smart contracts' functionality. These tests are crucial for ensuring that our contracts behave as expected.
  
-  `/scripts` - This folder contains essential JavaScript files for tasks such as deploying smart contracts to the Hedera network. 

- `.env.example` - This file is a blueprint for environment variables needed by the project. Copy this file to a `.env` file and fill in the actual values before starting the development server or deploying smart contracts. To facilitate a smooth test setup and deployment process, some variables are pre-filled in this example file.

## Setup

1. Clone this repo to your local machine:

```shell
git clone https://github.com/hashgraph/hedera-hardhat-example-project.git
```

2. Once you've cloned the repository, open your IDE terminal and navigate to the root directory of the project.

```shell
cd hedera-hardhat-example-project
```

3. Once you've cloned the repository, open your IDE terminal and navigate to the root directory of the project. Run the following command to install all the necessary dependencies:

```shell
npm install
```
4. Install the dotenv package used to manage environment variables in a separate `.env` file, which is loaded at runtime

```shell
npm install dotenv
```

5. Rename `.env.example` to `.env`

6. Run the test script from the root directory of the project. The default network is set to "local."

```shell
npx hardhat test
```

8. Deploy the smart contract

```shell
npx hardhat deploy-contract
```

# Contributing
Contributions are welcome. Please see the
[contributing guide](https://github.com/hashgraph/.github/blob/main/CONTRIBUTING.md)
to see how you can get involved.

# Code of Conduct
This project is governed by the
[Contributor Covenant Code of Conduct](https://github.com/hashgraph/.github/blob/main/CODE_OF_CONDUCT.md). By
participating, you are expected to uphold this code of conduct. Please report unacceptable behavior
to [oss@hedera.com](mailto:oss@hedera.com).

# License
[Apache License 2.0](LICENSE)
