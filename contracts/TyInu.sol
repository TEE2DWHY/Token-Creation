// TyInu.sol

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract TyInu is ERC20 {
    uint256 initialSupply = 50;

    constructor() ERC20("TyInu", "TYI") {
        _mint(msg.sender, initialSupply);
    }
}

// Contract Address : https://goerli.etherscan.io/address/0x9D0E878D1cB21a4445e60660cCF2b87ac5296B29#code
