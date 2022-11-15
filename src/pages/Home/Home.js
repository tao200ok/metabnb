import "./Home.css";

import Nfts from "../../components/Nfts/Nfts";

import home_1 from "../../assets/img/hero-1.png";
import home_2 from "../../assets/img/hero-2.png";
import home_3 from "../../assets/img/hero-3.png";
import home_4 from "../../assets/img/hero-4.png";
import metamask from "../../assets/img/metamask-banner.svg";
import mbToken from "../../assets/img/mb-token.svg";
import opensea from "../../assets/img/opensea.svg";
import nfts from "../../assets/img/sample-nfts.png";

import { home } from "../../listNfts";

function Home() {
  return (
    <>
      <header className="hero">
        <section className="intro">
          <h1>
            Rent a <span>Place</span> away from <br />
            <span>Home</span> in the <span>Metaverse</span>
          </h1>
          <p>
            we provide you access to luxury and affordable houses in the
            metaverse, get a chance to turn your imagination to reality at your
            comfort zone
          </p>
          <form>
            <input type="text" placeholder="Search for location" />
            <input type="submit" value="Search" />
          </form>
        </section>
        <div className="homes">
          <img className="one" src={home_1} alt="homes in the metaverse" />
          <img className="two" src={home_2} alt="homes in the metaverse" />
          <img className="three" src={home_3} alt="homes in the metaverse" />
          <img className="four" src={home_4} alt="homes in the metaverse" />
        </div>
      </header>
      <div className="banner">
        <img src={mbToken} alt="mb token" />
        <img src={metamask} alt="metamask" />
        <img src={opensea} alt="opensea" />
      </div>
      <article className="nfts">
        <h2>Inspiration for your next adventure</h2>
        <Nfts list={home} />
      </article>
      <article id="showcase" className="showcase">
        <section>
          <h2>Metabnb NFTs</h2>
          <p>
            Discover our NFT gift cards collection. Loyal customers gets amazing
            gift cards which are traded as NFTs. These NFTs gives our cutomer
            access to loads of our exclusive services.
          </p>
          <a href="#learn-more">Learn more</a>
        </section>
        <div className="nft-showcase">
          <img src={nfts} alt="metabnb nft" />
        </div>
      </article>
    </>
  );
}

export default Home;
