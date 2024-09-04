import { Link } from "react-router-dom";
import "./navBar.scss";

function NavBar() {
  return (
    <nav id="navigationBar">
      <div className="logo">
        <img src="/images/logo.svg" alt="Coffe Roasters logo" />
      </div>
      <div className="menu">
        <ul id="menuList">
          <li className="home">
            <Link to="/">HOME</Link>
          </li>
          <li className="aboutUs">
            <Link to="/about-us">ABOUT US</Link>
          </li>
          <li className="createYourPlan">
            <Link to="/create-your-plan">CREATE YOUR PLAN</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
