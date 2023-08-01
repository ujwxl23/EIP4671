// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

import "contracts/ERC4671.sol";

contract EIPCreator is ERC4671 {
    constructor() ERC4671("EIP Creator Test", "EIP") {}

    function giveThatManABadge(address owner) external {
        require(_isCreator(), "You must be the contract creator");
        _mint(owner);
    }

    function _baseURI() internal pure override returns (string memory) {
        return "https://eips.ethereum.org/ntt/";
    }
}
