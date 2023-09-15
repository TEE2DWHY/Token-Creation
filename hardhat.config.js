require("dotenv").config();
require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
const GOERLI_URL = process.env.GOERLI_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY;
module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    goerli: {
      url: GOERLI_URL,
      chainId: 5,
      accounts: [PRIVATE_KEY],
    },
    hardhat: {
      chainId: 31337,
    },
  },
  etherscan: {
    apiKey: ETHERSCAN_API_KEY,
  },
  solidity: "0.8.19",
};
