import "./Nft.css";

function Nft({ info }) {
  const {
    img,
    name,
    price,
    distance,
    availability,
    // stars
  } = info;
  return (
    <div className="nft">
      <img src={img.src} alt={img.alt} />
      <div className="nft-details">
        <div>
          <span className="nft_name">{name}</span>
          <span className="nft_price">
            {price.value} {price.unit} per night
          </span>
        </div>
        <div>
          <span className="nft_distace">
            {distance.value}
            {distance.unit} away
          </span>
          <span className="nft_availability">
            available for {availability.value} {availability.unit} stay
          </span>
        </div>
        <div className="stars">&#9733; &#9733; &#9733; &#9733; &#9733;</div>
      </div>
    </div>
  );
}

export default Nft;
