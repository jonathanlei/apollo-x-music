
// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";
import "./MusicNFT.sol";
import "hardhat/console.sol";


contract MusicNFTFactory is Ownable {
    MusicNFT [] public instances;

    event InstanceCreated(address indexed _from, address indexed _instance, uint256 indexed _instanceNumber);

    address factoryWalletAddress;

    function get(
        string memory name
    ) external {

        MusicNFT instance = new MusicNFT(name);
        instances.push(instance);
        emit InstanceCreated(msg.sender, address(instance), instances.length-1);
    }

    function setWalletAddress(address addr) public onlyOwner {
        factoryWalletAddress = addr;
    }

    function getInstances() public view returns(address[] memory) {
        address[] memory list = new address[](instances.length);
        for(uint i = 0; i < instances.length; i++){
            list[i] = address(instances[i]);
        }
        return list;
    }
}