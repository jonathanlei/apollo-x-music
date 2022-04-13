import React from "react";
import "./HowItWorks4.css";

function HowItWorks4(props) {
  const { browseConcerts1, browseConcerts2 } = props;

  return (
    <div className="how-it-works-3">
      <img
        className="iconqr-code"
        src="https://anima-uploads.s3.amazonaws.com/projects/62559cf3a7af74ec897b2385/releases/62559d2bbd6641122601a6ab/img/icon-qr-code@2x.svg"
      />
      <div className="frame-11-3">
        <div className="browse-concerts-6 h4">{browseConcerts1}</div>
        <div className="browse-concerts-7 poppins-normal-steel-gray-18px">{browseConcerts2}</div>
      </div>
    </div>
  );
}

export default HowItWorks4;
