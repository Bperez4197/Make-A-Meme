import "./App.scss";
import Header from "./components/Header/Header";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import MemesPage from "./pages/Memes/MemesPage";
import { useState } from "react";

function App() {
  //intanzialize state in the nearest parent element of the two components that need it if not storing in the redux store
  const [isHome, setIsHome] = useState(true);

  return (
    <div>
      <Header isHome={isHome} setIsHome={setIsHome} />
      {/* setup routes to render the correct page at the corresponding url */}
      <Routes>
        <Route path="/" element={<HomePage setIsHome={setIsHome} />} />
        <Route path="memes" element={<MemesPage />} />
      </Routes>
    </div>
  );
}

export default App;
