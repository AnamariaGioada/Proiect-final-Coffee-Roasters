import { Link } from "react-router-dom";
import "./footer.scss";
import LogoOnCream from "../SVG/logoOnCream.svg";
import Facebook from "../SVG/facebook.svg";
import Twitter from "../SVG/twitter.svg";
import Instagram from "../SVG/instagram.svg";

function Footer() {
  return (
    <footer>
      <div className="footerLeft">
        <div className="logo">
          <Link to="/">
            <LogoOnCream />
          </Link>
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
      </div>
      <div id="socialMedia">
        <ul>
          <li className="facebook">
            <a href="https://www.facebook.com/" target="_blank">
              <Facebook />
            </a>
          </li>
          <li className="twitter">
            <a href="https://x.com/?lang=en" target="_blank">
              <Twitter />
            </a>
          </li>
          <li className="instagram">
            <a href="https://www.instagram.com/" target="_blank">
              <Instagram />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
