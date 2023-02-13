require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-chai-matchers");
require("@nomiclabs/hardhat-ethers");
require("dotenv").config();

//define hardhat task here, which can be accessed in our test by using hre.run('taskName')
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
  defaultNetwork: "testnet",
  networks: {
    local: {
      url: process.env.RELAY_ENDPOINT,
      accounts: [
        "0x7f109a9e3b0d8ecfba9cc23a3614433ce0fa7ddcc80f2a8f10b222179a5a80d6",
        "0x6ec1f2e7d126a74a1d2ff9e1c5d90b92378c725e506651ff8bb8616a5c724628",
      ],
      chainId: 298,
    },
    testnet: {
      url: process.env.TESTNET_ENDPOINT,
      accounts: [
        "0xb46751179bc8aa9e129d34463e46cd924055112eb30b31637b5081b56ad96129",
        "0x484961ec6c67c270dc5659ea8bb61489967c6acc574d81b1e046e072d5d2436d",
      ],
      chainId: 296,
    },
  },
};
