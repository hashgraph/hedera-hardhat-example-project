const { ethers } = require("hardhat");

module.exports = async () => {
  //Assign the first signer, which comes from the first privateKey from our configuration in hardhat.config.js, to a wallet variable.
  const wallet = (await ethers.getSigners())[0];
  //Wallet object (which is essentially signer object) has some built in functionality like getBalance, getAddress and more
  const balance = (await wallet.getBalance()).toString();
  console.log(`The address ${wallet.address} has ${balance} tinybars`);

  return balance;
};
