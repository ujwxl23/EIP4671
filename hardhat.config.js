require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-etherscan");

require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */

const PRIVATE_KEY= process.env.PRIVATE_KEY;
const API_URL = process.env.API_URL;
const API_KEY = process.env.API_KEY;

module.exports = {
  solidity: "0.8.18",
  networks: {
    polygon_mumbai: {
      url: API_URL,
      accounts: [PRIVATE_KEY],
    },
  },

  etherscan: {
    apiKey: "68I545G9R2UVH59IQS3IBKA5CC1VCZP7XY", // Replace with your Etherscan API key
  },

  
};
