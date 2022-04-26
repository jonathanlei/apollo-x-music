import "./Nav.css";
import { Link } from "react-router-dom";
import UserContext from "./usercontext";
import { useContext } from "react";
function Nav({ connectWallet }) {
  let currentUser = useContext(UserContext);
  function handleClick() {
    if (!currentUser) {
      connectWallet();
    }
  }
  return (
    <div className="Navigation">
      <Link to="/">
        <img src="images/Logo.png" alt="" className="logo"></img>
      </Link>
      <div className="sign-up" onClick={handleClick}>
        <h3 className="sign-up-text">
          {" "}
          {currentUser
            ? currentUser.substring(0, 11) + "..."
            : "connect wallet"}
        </h3>
      </div>
    </div>
  );
}
export default Nav;
