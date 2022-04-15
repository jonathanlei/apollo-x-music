import './App.css';
import {React, useEffect, useState} from "react";
import Nav from './components/Nav';
import Hero from './components/Hero';
import WorkFlow from "./components/WorkFlow"
import EventSlider from './components/EventSlider';
const OPENSEA_LINK = '';
const TOTAL_MINT_COUNT = 50;

const App = () => {
  // Render Methods

  const [currentAccount, setcurrentAccount] = useState("");

  const checkIfWalletConnected =  async () => {
    const { ethereum } = window;
    
    if (!ethereum) {
      console.log("Make Sure you have metamask");
    } else {
      console.log("We have an ethereum object", ethereum);
    }
    const accounts = await ethereum.request({method: 'eth_accounts'});


    if (accounts.length !== 0) {
      const account = accounts[0];
      console.log("Found an Authorized Account:", account);
      setcurrentAccount(account);
    } else {
      console.log("No account found")
    }
  }

  const connectWallet = async () => {
    try {
      const {ethereum} = window;
      if (!ethereum) {
        console.log("Alert: Get Metamask");
        return;
      }

      const accounts = ethereum.request({method: "eth_requestAccounts"});
      console.log("Connected", accounts[0]);
      setcurrentAccount(accounts[0]);
    } catch (error) {
      console.log(error);
    }

  }


  const renderNotConnectedContainer = () => (
    <button onClick={() => connectWallet()}className="cta-button connect-wallet-button">
      Connect to Wallet
    </button>
  );

  useEffect(() => {
    checkIfWalletConnected();
  }, [])




  return (
    <div className="App">
      <Nav></Nav>
      <Hero></Hero>
      <WorkFlow></WorkFlow>
      <EventSlider/>
      <div className="container">
        <div className="header-container">
          <p className="header gradient-text">Apollo Music</p>
          <p className="sub-text">
            Mint your first NFT Ticket Today!!
          </p>
          {currentAccount === "" ? (
            renderNotConnectedContainer()
          ) : (
            <button onClick={null} className="cta-button connect-wallet-button">
              Mint NFT
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
