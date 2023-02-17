require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-chai-matchers");
require("@nomiclabs/hardhat-ethers");
//import dotenv library to access environment variables stored in .env file
require("dotenv").config();

//defines hardhat task here, which can be accessed in our test by using hre.run('taskName')
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
  defaultNetwork: "testnet",
  networks: {
    testnet: {
      //testnet endpoint from TESTNET_ENDPOINT variable in .env the file
      url: process.env.TESTNET_ENDPOINT,
      //test Ethereum account private keys that are accessible for the testnet
      accounts: [
        process.env.TESTNET_OPERATOR_PRIVATE_KEY,
        process.env.TESTNET_RECEIVER_PRIVATE_KEY,
      ],
    },
  },
};
