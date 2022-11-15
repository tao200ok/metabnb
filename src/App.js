import "./App.css";

import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Footer from "./components/Footer/Footer";
import TopNav from "./components/TopNav/TopNav";
import ConnectModal from "./components/ConnectModal/ConnectModal";

import Home from "./pages/Home/Home";
import PlaceToStay from "./pages/PlaceToStay/PlaceToStay";

function App() {
  const [modal, setModal] = useState(false);
  const toggleModal =()=> setModal(!modal);

  return (
    <div className="App">
      <TopNav toggleModal={toggleModal} />
      <main>
        {modal ? <ConnectModal toggleModal={toggleModal} /> : <></>}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/place-to-stay" element={<PlaceToStay />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
