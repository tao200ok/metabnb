import "./TopNav.css";

import { Link } from "react-router-dom";

import navLogo from "../../assets//img/nav-logo.png";

const toggle = () => {
  const nav = document.getElementById("top-nav");
  nav.classList.toggle("open");
};

function TopNav() {
  return (
    <nav id="top-nav">
      <img id="main-logo" src={navLogo} alt="metabnb logo" />
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/place-to-stay">Place to stay</Link>
        </li>
        <li>
          <Link to="/#">NFTs</Link>
        </li>
        <li>
          <Link to="/#">Community</Link>
        </li>
      </ul>
      <a href="#connect" id="connect-button">
        Connect wallet
      </a>
      <div id="hamburger" onClick={toggle}>
        <div className="line top"></div>
        <div className="line middle"></div>
        <div className="line bottom"></div>
      </div>
    </nav>
  );
}

export default TopNav;
