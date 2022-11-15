import "./PlaceToStay.css";

import Nfts from "../../components/Nfts/Nfts";

import { placeToStay } from "../../listNfts";

function PlaceToStay() {
  return (
    <article className="place-to-stay">
      <ul>
        <li>
          <a href="#t">Resturant</a>
        </li>
        <li>
          <a href="#t">Cottage</a>
        </li>
        <li>
          <a href="#t">Castle</a>
        </li>
        <li>
          <a href="#t">Fantast city</a>
        </li>
        <li>
          <a href="#t">Beach</a>
        </li>
        <li>
          <a href="#t">Cabins</a>
        </li>
        <li>
          <a href="#t">Off-grid</a>
        </li>
        <li>
          <a href="#t">Farm</a>
        </li>
        <li>
          <span>Location</span>
          <span className="material-symbols-outlined">tune</span>
        </li>
      </ul>
      <Nfts list={placeToStay} />
    </article>
  );
}

export default PlaceToStay;
