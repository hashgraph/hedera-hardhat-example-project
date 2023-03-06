# Hedera Hardhat Example Project

The Hedera Hardhat Example Project demonstrates how to test and deploy a Hedera smart contract using a community instance of the [Hedera JSON RPC Relay](https://github.com/hashgraph/hedera-json-rpc-relay). For more information about Hardhat projects check out their docs [here](https://hardhat.org/hardhat-runner/docs/guides/project-setup). 

> :fire: Check out the step-by-step tutorial [here](https://docs.hedera.com/hedera/tutorials/smart-contracts/deploy-a-smart-contract-using-hardhat).

## Project Files and Folders

- `hardhat.config` - The Hardhat project configuration file reqiured for the project. This includes the Hedera testnet account private key, community JSON-RPC relay URL, and defines the Hardhat tasks.

- `/contracts` - The folder that contains the Greeter smart contract. 

- `/test` - The folder that contains the test file that tests the Greeter.sol smart contract.

-  `/scripts` - The folder that contains the Hardhat project scripts.

- `.env` - The file that stores the environment variables like the testnet account private key and community JSON-RPC url

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

5. Get your Hedera testnet account hex encoded private key from the [Hedera Developer Portal](https://portal.hedera.com/register) and update the `.env.example` `TESTNET_OPERATOR_PRIVATE_KEY`

6. Rename `.env.example` to `.env`

7. Run the test script from the root directory of the project. The default network is set to "testnet."

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
