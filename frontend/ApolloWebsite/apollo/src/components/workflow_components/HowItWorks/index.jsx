import React from "react";
import Iconsearch from "../Iconsearch";
import "./HowItWorks.css";

function HowItWorks(props) {
  const { browseConcerts1, browseConcerts2 } = props;

  return (
    <div className="how-it-works">
      <Iconsearch />
      <div className="frame-11">
        <div className="browse-concerts h4">{browseConcerts1}</div>
        <div className="browse-concerts-1 poppins-normal-steel-gray-18px">{browseConcerts2}</div>
      </div>
    </div>
  );
}

export default HowItWorks;
