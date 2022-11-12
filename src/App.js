import "./App.css";

import { Routes, Route } from "react-router-dom";

import Footer from "./components/Footer/Footer";
import TopNav from "./components/TopNav/TopNav";

import Home from "./pages/Home/Home";
import PlaceToStay from "./pages/PlaceToStay/PlaceToStay";

function App() {
  return (
    <div className="App">
      <TopNav />
      <main>
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
