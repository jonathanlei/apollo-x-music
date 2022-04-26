import Nav from "../Nav";
import Hero from "../Hero";
import WorkFlow from "../WorkFlow";
import EventSlider from "../EventSlider";
import Footer from "../Footer"
import "./HomePage.css";
function HomePage() {
  return (
    <>
      <Hero></Hero>
      <div className="hero-subheader">
        <div>
          <p> <b className="subheader-text"> ApolloX music </b> is a NFT ticket platform aimed at giving more
          money and value to artists and fans</p>
        </div>
      </div>
      <WorkFlow></WorkFlow>
      <EventSlider></EventSlider>
    </>
  );
}

export default HomePage;
