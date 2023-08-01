const { ethers } = require("hardhat");

async function main() {

  // Deploy the EIPCreator contract
  const EIPCreator = await ethers.getContractFactory("EIPCreator");
  const eipCreator = await EIPCreator.deploy();
  await eipCreator.deployed();

  console.log("EIPCreator deployed to:", eipCreator.address);

  console.log("Sleeping.....");
  // Wait for etherscan to notice that the contract has been deployed
  await sleep(40000);

  // Verify the contract after deploying
  await hre.run("verify:verify", {
    address: eipCreator.address,
      constructorArguments: [],
    contract: "contracts/EIPCreator.sol:EIPCreator"
  });

  function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
