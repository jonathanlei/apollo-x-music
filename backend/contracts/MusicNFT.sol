pragma solidity ^0.8.1;


import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "hardhat/console.sol";
import "@openzeppelin/contracts/utils/Base64.sol";

contract MusicNFT is ERC721URIStorage{

    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    function random(string memory input) internal pure returns(uint256) {
        return uint256(keccak256(abi.encodePacked(input)));
    }


    constructor() ERC721 ("Appollo Music", "AMNFT") {
        console.log("This is my NFT Contract, woah");
    }

    function mintTicket() public {
        uint newID = _tokenIds.current();
        string memory finalTokenUri = "https://jsonkeeper.com/b/RUUS";


        
        _safeMint(msg.sender, newID);

        _setTokenURI(newID, finalTokenUri);
        _tokenIds.increment();


        console.log(finalTokenUri);

        console.log("An NFT w/ ID %s has been minted to %s", newID, msg.sender);

    }



}
