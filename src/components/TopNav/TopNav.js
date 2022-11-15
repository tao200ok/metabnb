import "./TopNav.css";

import { Link } from "react-router-dom";

import navLogo from "../../assets//img/nav-logo.png";

function TopNav({toggleModal}) {
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
      <a href="#connect" id="connect-button" onClick={toggleModal}>
        Connect wallet
      </a>
    </nav>
  );
}

export default TopNav;
