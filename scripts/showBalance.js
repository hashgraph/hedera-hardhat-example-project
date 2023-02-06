const { ethers } = require("hardhat");

module.exports = async () => {
  const wallet = (await ethers.getSigners())[0];
  const balance = (await wallet.getBalance()).toString();
  console.log(`The address ${wallet.address} has ${balance} tinybars`);

  return balance;
};
