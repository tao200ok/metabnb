import "./Nfts.css";

import Nft from "../Nft/Nft";

import nft_1 from "../../assets/img/nft-1.png";

let nft_list = [
  {
    name: "Desert King",
    price: {
      value: 1,
      unit: "MBT",
    },
    distance: {
      value: 2345,
      unit: "km",
    },
    rating: 5,
    availability: {
      value: 2,
      unit: "weeks",
    },
    img: {
      src: nft_1,
      alt: "an nft",
    },
  },
  {
    name: "Desert King",
    price: {
      value: 1,
      unit: "MBT",
    },
    distance: {
      value: 2345,
      unit: "km",
    },
    rating: 5,
    availability: {
      value: 2,
      unit: "weeks",
    },
    img: {
      src: nft_1,
      alt: "an nft",
    },
  },
  {
    name: "Desert King",
    price: {
      value: 1,
      unit: "MBT",
    },
    distance: {
      value: 2345,
      unit: "km",
    },
    rating: 5,
    availability: {
      value: 2,
      unit: "weeks",
    },
    img: {
      src: nft_1,
      alt: "an nft",
    },
  },
  {
    name: "Desert King",
    price: {
      value: 1,
      unit: "MBT",
    },
    distance: {
      value: 2345,
      unit: "km",
    },
    rating: 5,
    availability: {
      value: 2,
      unit: "weeks",
    },
    img: {
      src: nft_1,
      alt: "an nft",
    },
  },
  {
    name: "Desert King",
    price: {
      value: 1,
      unit: "MBT",
    },
    distance: {
      value: 2345,
      unit: "km",
    },
    rating: 5,
    availability: {
      value: 2,
      unit: "weeks",
    },
    img: {
      src: nft_1,
      alt: "an nft",
    },
  },
  {
    name: "Desert King",
    price: {
      value: 1,
      unit: "MBT",
    },
    distance: {
      value: 2345,
      unit: "km",
    },
    rating: 5,
    availability: {
      value: 2,
      unit: "weeks",
    },
    img: {
      src: nft_1,
      alt: "an nft",
    },
  },
  {
    name: "Desert King",
    price: {
      value: 1,
      unit: "MBT",
    },
    distance: {
      value: 2345,
      unit: "km",
    },
    rating: 5,
    availability: {
      value: 2,
      unit: "weeks",
    },
    img: {
      src: nft_1,
      alt: "an nft",
    },
  },
  {
    name: "Desert King",
    price: {
      value: 1,
      unit: "MBT",
    },
    distance: {
      value: 2345,
      unit: "km",
    },
    rating: 5,
    availability: {
      value: 2,
      unit: "weeks",
    },
    img: {
      src: nft_1,
      alt: "an nft",
    },
  },
];

function Nfts() {
  return (
    <main className="nfts-container">
      {nft_list.map((nft, index) => (
        <Nft key={index} info={nft} />
      ))}
    </main>
  );
}

export default Nfts;
