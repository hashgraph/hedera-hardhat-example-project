const { ethers } = require("hardhat");

module.exports = async () => {
  let wallet = (await ethers.getSigners())[0];
  const Greeter = await ethers.getContractFactory("Greeter", wallet);
  const greeter = await Greeter.deploy("initial_msg", { gasLimit: 1000000 });
  const contractAddress = (await greeter.deployTransaction.wait())
    .contractAddress;

  console.log(`Greeter deployed to: ${contractAddress}`);

  return contractAddress;
};
