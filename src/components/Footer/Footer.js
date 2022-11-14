import "./Footer.css";

import footerLogo from "../../assets/img/footer-logo.svg";
import fb from "../../assets/img/fb.svg";
import ig from "../../assets/img/ig.svg";
import twt from "../../assets/img/twtr.svg";

function Footer() {
  return (
    <footer className="footer">
      <div className="logo-container">
        <img src={footerLogo} alt="metabnb logo" id="main-logo" />
        <div>
          <ul id="social-links">
            <li>
              <a href="#fb"><img src={fb} alt="facebook icon" /></a>
            </li>
            <li>
              <a href="#ig"><img src={ig} alt="instagram icon" /></a>
            </li>
            <li>
              <a href="#twtr"><img src={twt} alt="twitter icon" /></a>
            </li>
          </ul>
          <p>&copy; 2022 Metabnb</p>
        </div>
      </div>

      <ul className="links-container">
        <h3>Community</h3>
        <li><a href="#nfts">NFTs</a></li>
        <li><a href="#tokens">Tokens</a></li>
        <li><a href="#landlords">Landlords</a></li>
        <li><a href="#discord">Discord</a></li>
      </ul>
      <ul className="links-container">
        <h3>Places</h3>
        <li><a href="#castle">Castle</a></li>
        <li><a href="#farm">Farm</a></li>
        <li><a href="#beach">Beach</a></li>
        <li><a href="#learn-more">Learn more</a></li>
      </ul>
      <ul className="links-container">
        <h3>About us</h3>
        <li><a href="#roadmap">Road map</a></li>
        <li><a href="#creator">Creator</a></li>
        <li><a href="#career">Career</a></li>
        <li><a href="#contact-us">Contact us</a></li>
      </ul>
    </footer>
  );
}

export default Footer;
