import React from "react";
import HowItWorks from "../HowItWorks";
import HowItWorks2 from "../HowItWorks2";
import HowItWorks3 from "../HowItWorks3";
import HowItWorks4 from "../HowItWorks4";
import "./HowItWorksSection.css";

function HowItWorksSection(props) {
  const { title, howItWorksProps, howItWorks2Props, howItWorks3Props, howItWorks4Props } = props;

  return (
    <div className="how-it-works-section">
      <h1 className="title h2">{title}</h1>
      <div className="how-it-works-container">
        <HowItWorks
          browseConcerts1={howItWorksProps.browseConcerts1}
          browseConcerts2={howItWorksProps.browseConcerts2}
        />
        <HowItWorks2
          browseConcerts1={howItWorks2Props.browseConcerts1}
          browseConcerts2={howItWorks2Props.browseConcerts2}
        />
        <HowItWorks3
          browseConcerts1={howItWorks3Props.browseConcerts1}
          browseConcerts2={howItWorks3Props.browseConcerts2}
        />
        <HowItWorks4
          browseConcerts1={howItWorks4Props.browseConcerts1}
          browseConcerts2={howItWorks4Props.browseConcerts2}
        />
      </div>
    </div>
  );
}

export default HowItWorksSection;
