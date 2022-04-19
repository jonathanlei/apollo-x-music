
// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";
import "./MusicNFT.sol";

contract MusicNFTFactory is Ownable {
    MusicNFT [] public instances;
    // TODO store token ids so they can be checked for uniqueness

    event InstanceCreated(address indexed _from, address indexed _instance, uint256 indexed _instanceNumber);

    address factoryWalletAddress;

    function get(
    ) external {
        // TODO make and pass a payment splitter (https://docs.openzeppelin.com/contracts/2.x/api/payment)

        MusicNFT instance = new MusicNFT();
        instances.push(instance);
        emit InstanceCreated(msg.sender, address(instance), instances.length-1);
    }

    function setWalletAddress(address addr) public onlyOwner {
        factoryWalletAddress = addr;
    }

}