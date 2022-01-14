import "./App.scss";
import Header from "./components/Header/Header";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import MemesPage from "./pages/Memes/MemesPage";
import { useState } from "react";

function App() {
  const [isHome, setIsHome] = useState(true);
  return (
    <div>
      <Header isHome={isHome} setIsHome={setIsHome} />
      <Routes>
        <Route path="/" element={<HomePage setIsHome={setIsHome} />} />
        <Route path="memes" element={<MemesPage />} />
      </Routes>
    </div>
  );
}

export default App;
