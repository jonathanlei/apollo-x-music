import React, { useEffect, useState } from "react";
import { ethers, BigNumber } from "ethers";
import TicketFactoryABI from "../ABI/TicketFactoryABI.json";
import TicketABI from "../ABI/TicketABI.json";
class smartContractApi {
  static deployedContract = "0xC59bE4ded9CD3B0DAc49ccF4420C632252583334";
  static async connectWallet() {
    if (window.ethereum) {
      // check if i have metamask installed or not
      let accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      return accounts[0];
    }
  }
  static async createEvent(name) {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(
      smartContractApi.deployedContract,
      TicketFactoryABI.abi,
      signer
    );
    const c = await contract.get(name);
    console.log(c);
  }

  static async getEvents(){
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(
      smartContractApi.deployedContract,
      TicketFactoryABI.abi,
      signer
    );
    const c = await contract.getInstances();
    console.log(c, "GETTING Instances!!");
  }
  static async mintTicket( address, contract_address="0x711a39BD45E01e7158DdEd38F512FF2cCf7f5c4f",){
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(
      contract_address,
      TicketABI.abi,
      signer
    );

    const nft = await contract.mintTicket(address);
    console.log(nft);

  }
}

//   const companyMetadata = [{name: "Robin", stakes: 50, tokenURI: ""}, {name: "Another", stakes: 50, tokenURI: ""}]
//   const [companies, setCompanies] = useState(companyMetadata)
//   // CHANGE DEPLOYED CONTRACT ADDRESS
//   const deployedContract = "0xC59bE4ded9CD3B0DAc49ccF4420C632252583334"

//   const connectWallet = async() => {
//      if(window.ethereum) { // check if i have metamask installed or not
//       let accounts = await window.ethereum.request({
//         method: 'eth_requestAccounts',
//       });
//       setAccount(accounts[0])
//      }
//   }

//   const test = async() => {
//     const provider = new ethers.providers.Web3Provider(window.ethereum);
//     const signer = provider.getSigner(); // what is this
//     const contract = new ethers.Contract(deployedContract, FactoryABI.abi, signer);
//     const tt = await contract.getContractAddress("R");
//     console.log(tt);
//   }

//   const getAllCompanies = async() => {
//     const provider = new ethers.providers.Web3Provider(window.ethereum);
//     const signer = provider.getSigner(); // what is this
//     const contract = new ethers.Contract(deployedContract, FactoryABI.abi, signer);
//     const allKids = await contract.getChildren();
//     console.log(allKids);
//   }

//   // Step 1: Create companies
//   const createCompanies = async () => {
//     const provider = new ethers.providers.Web3Provider(window.ethereum);
//     const signer = provider.getSigner(); // what is this
//     const contract = new ethers.Contract(deployedContract, FactoryABI.abi, signer);
//     setFactory(contract);
//     try {
//       for (let i = 0; i < companies.length; i++) {
//         var company = companies[i];
//         await contract.createChild(company.name, company.stakes, company.tokenURI);
//         companies[i].address = await contract.getContractAddress(company.name);
//         setCompanies(companies);
//       }
//       console.log(companies)
//     } catch (err) {
//       console.log("ERROR", err);
//     }
//   }

//   const createCompany = async () => {
//     const provider = new ethers.providers.Web3Provider(window.ethereum);
//     const signer = provider.getSigner();
//     const contract = new ethers.Contract(deployedContract, FactoryABI.abi, signer);
//     const c = await contract.createChild("R", 10, "https");
//     console.log(c);
//   }

//   const mint = async (stakeAmount, companyName) => {
//     const provider = new ethers.providers.Web3Provider(window.ethereum);
//     const signer = provider.getSigner();
//     const contract = new ethers.Contract(deployedContract, FactoryABI.abi, signer);
//     if (account != '') {
//       let c = await contract.mintUserStake(account, stakeAmount, companyName);
//       console.log(c);
//     }
//   }

//   useEffect(() => {
//     // createCompanies();
//   })

//   return (
//     <div>
//       <Router>
//         <Header connectWallet={connectWallet}/>
//         <Routes>
//           <Route path="/" element={<Home/>} />
//           <Route path="/roadmap" element={<Profile/>} />
//           {companies.map((company, index) =>
//            <Route path={`/startup/` + company.name} contract={factory} element={<Startup company={company} account={account} completed={40}></Startup>} />
//           )}
//         </Routes>
//       </Router>
//       <Button onClick={test}> Test </Button>
//       <Button onClick={() => (mint(5, "R"))}> Mint </Button>

//     </div>
//   );
// }

export default smartContractApi;
