const { ethers } = require("hardhat");

module.exports = async (address, msg) => {
  const wallet = (await ethers.getSigners())[0];
  const greeter = await ethers.getContractAt("Greeter", address, wallet);
  const updateTx = await greeter.setGreeting(msg, { gasLimit: 1000000 });

  console.log(`Updated call result: ${msg}`);

  return updateTx;
};
