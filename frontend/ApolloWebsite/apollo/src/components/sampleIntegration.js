import React, {useEffect, useState} from 'react';
import {ethers, BigNumber} from 'ethers';
import FactoryABI from './ABI/FactoryABI.json';
import {BrowserRouter as Router,Route, Routes} from 'react-router-dom';
import Home from "./views/Home";
import Mint from "./views/Mint";
import Profile from "./views/Profile";
import Header from "./Layout/Header";
import { Button } from "@chakra-ui/button"
import Startup from "./views/Startup";


function App() {
  const [account, setAccount] = useState('')
  const [factory, setFactory] = useState(null)
  const companyMetadata = [{name: "Robin", stakes: 50, tokenURI: ""}, {name: "Another", stakes: 50, tokenURI: ""}]
  const [companies, setCompanies] = useState(companyMetadata)
  // CHANGE DEPLOYED CONTRACT ADDRESS
  const deployedContract = "0x053BF3D6e471880763e8dbDfEDe978296B443707"

  const connectWallet = async() => {
     if(window.ethereum) { // check if i have metamask installed or not 
      let accounts = await window.ethereum.request({
        method: 'eth_requestAccounts',
      });
      setAccount(accounts[0])
     }
  }

  const test = async() => {
    const provider = new ethers.providers.Web3Provider(window.ethereum); 
    const signer = provider.getSigner(); // what is this 
    const contract = new ethers.Contract(deployedContract, FactoryABI.abi, signer);
    const tt = await contract.getContractAddress("R"); 
    console.log(tt); 
  }

  const getAllCompanies = async() => {
    const provider = new ethers.providers.Web3Provider(window.ethereum); 
    const signer = provider.getSigner(); // what is this 
    const contract = new ethers.Contract(deployedContract, FactoryABI.abi, signer);
    const allKids = await contract.getChildren(); 
    console.log(allKids); 
  }

  // Step 1: Create companies 
  const createCompanies = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum); 
    const signer = provider.getSigner(); // what is this 
    const contract = new ethers.Contract(deployedContract, FactoryABI.abi, signer); 
    setFactory(contract); 
    try {
      for (let i = 0; i < companies.length; i++) {
        var company = companies[i]; 
        await contract.createChild(company.name, company.stakes, company.tokenURI); 
        companies[i].address = await contract.getContractAddress(company.name); 
        setCompanies(companies); 
      }
      console.log(companies)
    } catch (err) {
      console.log("ERROR", err); 
    }
  }

  const createCompany = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum); 
    const signer = provider.getSigner(); 
    const contract = new ethers.Contract(deployedContract, FactoryABI.abi, signer); 
    const c = await contract.createChild("R", 10, "https"); 
    console.log(c); 
  }

  const mint = async (stakeAmount, companyName) => {
    const provider = new ethers.providers.Web3Provider(window.ethereum); 
    const signer = provider.getSigner(); 
    const contract = new ethers.Contract(deployedContract, FactoryABI.abi, signer); 
    if (account != '') {
      let c = await contract.mintUserStake(account, stakeAmount, companyName); 
      console.log(c); 
    }
  }
  
  useEffect(() => {
    // createCompanies(); 
  })

  return (
    <div>
      <Router>
        <Header connectWallet={connectWallet}/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/roadmap" element={<Profile/>} />
          {companies.map((company, index) => 
           <Route path={`/startup/` + company.name} contract={factory} element={<Startup company={company} account={account} completed={40}></Startup>} /> 
          )}
        </Routes>
      </Router> 
      <Button onClick={test}> Test </Button> 
      <Button onClick={() => (mint(5, "R"))}> Mint </Button> 

    </div>
  );
}

export default App;