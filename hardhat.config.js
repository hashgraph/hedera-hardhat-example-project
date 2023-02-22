require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-chai-matchers");
require("@nomiclabs/hardhat-ethers");
//import dotenv library to access environment variables stored in .env file
require("dotenv").config();

//define hardhat task here, which can be accessed in our test file (test/rpc.js) by using hre.run('taskName')
task("show-balance", async () => {
  const showBalance = require("./scripts/showBalance");
  return showBalance();
});

task("transfer-hbars", async () => {
  const transferHbar = require("./scripts/transferHbar");
  return transferHbar();
});

task("deploy-contract", async () => {
  const deployContract = require("./scripts/deployContract");
  return deployContract();
});

task("contract-view-call", async (taskArgs) => {
  const contractViewCall = require("./scripts/contractViewCall");
  return contractViewCall(taskArgs.contractAddress);
});

task("contract-call", async (taskArgs) => {
  const contractCall = require("./scripts/contractCall");
  return contractCall(taskArgs.contractAddress, taskArgs.msg);
});

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  mocha: {
    timeout: 3600000,
  },
  solidity: {
    version: "0.8.9",
    settings: {
      optimizer: {
        enabled: true,
        runs: 500,
      },
    },
  },
  //this specifies which network should be used when running Hardhat tasks
  defaultNetwork: "local",
  networks: {
    local: {
      //local JSON-RPC relay endpoint from the RELAY_ENDPOINT variable in the project .env the file
      url: process.env.RELAY_ENDPOINT,
      //two local node Hedera account ECDSA private keys
      //the public address for the account is derived from the private key
      accounts: [
        process.env.LOCAL_OPERATOR_PRIVATE_KEY, 
        process.env.LOCAL_RECEIVER_PRIVATE_KEY,
      ],
    },
    testnet: {
      //HashIO testnet endpoint from the TESTNET_ENDPOINT variable in the project .env the file
      url: "https://testnet.hashio.io/api",
      //two Hedera testnet account ECDSA private keys
      //the public address for the account is derived from the private key
      accounts: [ 
        "0xb46751179bc8aa9e129d34463e46cd924055112eb30b31637b5081b56ad96129",
     //   "0x484961ec6c67c270dc5659ea8bb61489967c6acc574d81b1e046e072d5d2436d", 
      ],
    },
  },
};
