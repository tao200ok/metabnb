import "./Nfts.css";

import Nft from "../Nft/Nft";

function Nfts({list}) {
  return (
    <main className="nfts-container">
      {list.map((nft, index) => (
        <Nft key={index} info={nft} />
      ))}
    </main>
  );
}

export default Nfts;
