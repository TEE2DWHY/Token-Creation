require("dotenv").config();
const { ethers, network } = require("hardhat");
const verifyContract = require("../utils/verifyContract");

const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY;

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const main = async () => {
  try {
    const tokenFactory = await ethers.getContractFactory("TyInu");
    console.log("Contract is being deployed...");
    const token = await tokenFactory.deploy();
    if (network.config.chainId === 5 && ETHERSCAN_API_KEY) {
      await token.waitForDeployment(6);
      console.log(`Contract is deployed at address: ${token.target}`);

      console.log("Waiting for 1 minute before verifying the contract...");
      await delay(60000); // 1 minute delay

      await verifyContract(token.target, "contracts/TyInu.sol:TyInu");
    }
  } catch (error) {
    console.log(error);
  }
};

main();

// const updateContract = async () => {
//   try {
//     const [deployer] = await ethers.getSigners();

//     // Replace with the address of the already deployed contract
//     const contractAddress = "YOUR_CONTRACT_ADDRESS_HERE";

//     // Import the ABI of the contract
//     const contractFactory = await ethers.getContractFactory("TyToken");
//     const contract = await ethers.getContractAt("TyToken", contractAddress);

//     // You can now interact with the contract
//     console.log(`Connected to contract at address: ${contract.address}`);

//     // Example: Call a function on the contract
//     const totalSupply = await contract.totalSupply();
//     console.log(`Total supply: ${totalSupply.toString()}`);

//     // Example: Modify the contract state
//     const newSupply = 100; // New total supply
//     const tx = await contract.connect(deployer).mint(newSupply);
//     await tx.wait();

//     console.log(`Updated total supply to ${newSupply}`);

//     if (network.config.chainId === 5 && ETHERSCAN_API_KEY) {
//       await verifyContract(contract.address);
//     }
//   } catch (error) {
//     console.error(error);
//   }
// };

module.exports = main;
