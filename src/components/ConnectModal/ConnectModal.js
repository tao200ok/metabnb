import "./ConnectModal.css";

import metamask from "../../assets/img/metamask-connect.png";
import walletconnect from "../../assets/img/wallet-connect.png";
import rightPointingArrow from "../../assets/img/modal-right-arrow.png";
import closeButton from "../../assets/img/modal-close-button.png";

function ConnectModal({ toggleModal }) {
  return (
    <div className="modal-container">
      <div className="modal-body" onClick={() => { console.log('do nothing')}}>
        <div className="modal-header">
          <h1>Connect Wallet</h1>
          <img src={closeButton} alt="close button icon" onClick={toggleModal} />
        </div>
        <h2>Choose your preferred wallet:</h2>
        <div className="wallet-button">
          <img src={metamask} alt="metamask icon" />
          <p>Metamask</p>
          <img src={rightPointingArrow} alt="right pointing arrow" />
        </div>
        <div className="wallet-button">
          <img src={walletconnect} alt="walletconnect icon" />
          <p>WalletConnect</p>
          <img src={rightPointingArrow} alt="right pointing arrow" />
        </div>
      </div>
    </div>
  );
}

export default ConnectModal;
