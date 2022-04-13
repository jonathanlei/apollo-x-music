import React from "react";
import IconArrow from "../IconArrow";
import "./HowItWorks3.css";

function HowItWorks3(props) {
  const { browseConcerts1, browseConcerts2 } = props;

  return (
    <div className="how-it-works-2">
      <IconArrow />
      <div className="frame-11-2">
        <div className="browse-concerts-4 h4">{browseConcerts1}</div>
        <div className="browse-concerts-5 poppins-normal-steel-gray-18px">{browseConcerts2}</div>
      </div>
    </div>
  );
}

export default HowItWorks3;
