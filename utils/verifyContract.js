const { run } = require("hardhat");

const verifyContract = async (contractAddress, contractPath) => {
  try {
    await run("verify", {
      address: contractAddress,
      contract: contractPath,
    });
  } catch (error) {
    if (error.message.toLowerCase().includes("already verified")) {
      console.log("Contract is already verified.");
    } else {
      console.log(error.message);
    }
  }
};

module.exports = verifyContract;
