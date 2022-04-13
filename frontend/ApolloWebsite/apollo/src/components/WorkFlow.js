import React from 'react';
import "./WorkFlow.css";
function WorkFlow() {
  return (
    <div className="how-it-works-section" >
      <h1 className="title h2" >
        How it works
      </h1>
      <div className="how-it-works-container" >
        <HowItWorks
          browseConcerts1="Browse concerts"
          browseConcerts2="Explore from a variety of cities"
          
        />
        <HowItWorks2
          browseConcerts1="Purchase tickets"
          browseConcerts2="Purchase with a blockchain wallet"
          
        />
        <HowItWorks3
          browseConcerts1="Get NFT ticket"
          browseConcerts2="Concert ticket is an NFT with value"
          
        />
        <HowItWorks4
          browseConcerts1="Scan QR code"
          browseConcerts2="Scan at concert event"
          
        />
      </div>
    </div>
  );
}

export default WorkFlow;

function HowItWorks(props) {
  const { browseConcerts1, browseConcerts2 } = props;

  return (
    <div className="how-it-works" >
      <Iconsearch  />
      <div className="frame-11" >
        <div className="browse-concerts h4" >
          {browseConcerts1}
        </div>
        <div className="browse-concerts-1 poppins-normal-steel-gray-18px" >
          {browseConcerts2}
        </div>
      </div>
    </div>
  );
}


function Iconsearch() {
  return (
    <div className="iconsearch" >
      <img
        className="union"
        
        src="https://anima-uploads.s3.amazonaws.com/projects/62559cf3a7af74ec897b2385/releases/62559d2bbd6641122601a6ab/img/union@2x.svg"
      />
    </div>
  );
}


function HowItWorks2(props) {
  const { browseConcerts1, browseConcerts2 } = props;

  return (
    <div className="how-it-works-1" >
      <IconWallet  />
      <div className="frame-11-1" >
        <div className="browse-concerts-2 h4" >
          {browseConcerts1}
        </div>
        <div className="browse-concerts-3 poppins-normal-steel-gray-18px" >
          {browseConcerts2}
        </div>
      </div>
    </div>
  );
}


function IconWallet() {
  return (
    <div className="icon-wallet" >
      <div className="overlap-group" >
        <div className="ellipse-161" ></div>
      </div>
    </div>
  );
}


function HowItWorks3(props) {
  const { browseConcerts1, browseConcerts2 } = props;

  return (
    <div className="how-it-works-2" >
      <IconArrow  />
      <div className="frame-11-2" >
        <div className="browse-concerts-4 h4" >
          {browseConcerts1}
        </div>
        <div className="browse-concerts-5 poppins-normal-steel-gray-18px" >
          {browseConcerts2}
        </div>
      </div>
    </div>
  );
}


function IconArrow() {
  return (
    <div className="icon-arrow" >
      <img
        className="union-1"
        
        src="https://anima-uploads.s3.amazonaws.com/projects/62559cf3a7af74ec897b2385/releases/62559d2bbd6641122601a6ab/img/union-1@2x.svg"
      />
    </div>
  );
}


function HowItWorks4(props) {
  const { browseConcerts1, browseConcerts2 } = props;

  return (
    <div className="how-it-works-3" >
      <img
        className="iconqr-code"
        
        src="https://anima-uploads.s3.amazonaws.com/projects/62559cf3a7af74ec897b2385/releases/62559d2bbd6641122601a6ab/img/icon-qr-code@2x.svg"
      />
      <div className="frame-11-3" >
        <div className="browse-concerts-6 h4" >
          {browseConcerts1}
        </div>
        <div className="browse-concerts-7 poppins-normal-steel-gray-18px" >
          {browseConcerts2}
        </div>
      </div>
    </div>
  );
}

