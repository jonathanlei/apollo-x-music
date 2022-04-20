//SPDX-License-Identifier: MIT

pragma solidity ^0.8.1;


import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "hardhat/console.sol";
import "@openzeppelin/contracts/utils/Base64.sol";
import './ERC2981ContractWideRoyalties.sol';


contract MusicNFT is ERC721URIStorage, ERC2981ContractWideRoyalties{

    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;
    string eventname;

    function random(string memory input) internal pure returns(uint256) {
        return uint256(keccak256(abi.encodePacked(input)));
    }


    constructor(string memory eventName) ERC721 ("Appollo Music", "AMNFT") {
        eventname = eventName;
        console.log("This is my NFT Contract, woah");
    }


    function supportsInterface(bytes4 interfaceId)
        public
        view
        virtual
        override(ERC721, ERC2981Base)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }

    function setRoyalties(address recipient, uint256 value) public {
        _setRoyalties(recipient, value);
    }

    function mintTicket(
        address to
    ) external {

        uint newID = _tokenIds.current();
        string memory finalTokenUri = "https://jsonkeeper.com/b/RUUS";
        _safeMint(to, newID);
        _setTokenURI(newID, finalTokenUri);
        _tokenIds.increment();


        console.log(finalTokenUri);

        console.log("An NFT w/ ID %s has been minted to %s", newID, msg.sender);

    }

    function getEvent() public view returns(string memory) {
        return eventname;
    }



}





