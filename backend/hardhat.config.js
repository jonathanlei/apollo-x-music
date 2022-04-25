require("@nomiclabs/hardhat-waffle");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
 const ALCHEMY_API_KEY = "L3nLG6jAsgUXxU6rLKsFyuAxeVt8HFPI";

 // Replace this private key with your Ropsten account private key
 // To export your private key from Metamask, open Metamask and
 // go to Account Details > Export Private Key
 // Be aware of NEVER putting real Ether into testing accounts
 const GOERLI_PRIVATE_KEY = "b9e068147a9a624dbe5893a5d8b0f29617eb9f8c2e51062ba0976112ae3a4611";
 
 module.exports = {
   solidity: "0.8.4",
   networks: {
     goerli: {
       url: `https://eth-goerli.alchemyapi.io/v2/L3nLG6jAsgUXxU6rLKsFyuAxeVt8HFPI`,
       accounts: [`${GOERLI_PRIVATE_KEY}`]
     }
   }
 };
