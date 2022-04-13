import React from "react";
import IconWallet from "../IconWallet";
import "./HowItWorks2.css";

function HowItWorks2(props) {
  const { browseConcerts1, browseConcerts2 } = props;

  return (
    <div className="how-it-works-2">
      <IconWallet />
      <div className="frame-11-2">
        <div className="browse-concerts-2 h4">{browseConcerts1}</div>
        <div className="browse-concerts-3 poppins-normal-steel-gray-18px">{browseConcerts2}</div>
      </div>
    </div>
  );
}

export default HowItWorks2;
