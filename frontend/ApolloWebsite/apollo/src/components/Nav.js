import "./Nav.css";
import { Link } from "react-router-dom";
function Nav() {

  function handleClick(){
    
  }
  return (
    <div className="Navigation">
      <Link to="/">
        <img src="images/Logo.png" alt="" className="logo"></img>
      </Link>
      <div className="sign-up">
        <h3 className="sign-up-text"> connect wallet</h3>
      </div>
    </div>
  );
}
export default Nav;
