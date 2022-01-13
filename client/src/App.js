import "./App.scss";
import Header from "./components/Header/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Memes from "./pages/Memes/Memes";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="memes" element={<Memes />} />
      </Routes>
    </div>
  );
}

export default App;
