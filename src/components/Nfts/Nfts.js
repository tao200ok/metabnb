import "./Nfts.css";

import Nft from "../Nft/Nft";

function Nfts({list}) {
  return (
    <section className="nfts-container">
      {list.map((nft, index) => (
        <Nft key={index} info={nft} />
      ))}
    </section>
  );
}

export default Nfts;
