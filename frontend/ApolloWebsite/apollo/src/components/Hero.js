import "./Hero.css";
import {Link} from "react-router-dom"
function Hero() {
  return (
    <div className="hero">
      <div className="hero-section">
        <h1 className="hero-text">
          Show off your true fandom through concert tickets as NFTs
        </h1>
        <Link to="/events">
        <div className="button">
          <div className="btn-text">Explore Concerts</div>
        </div>
        </Link>
      </div>
    </div>
  );
}

export default Hero;
