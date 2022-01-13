import "./App.scss";
import Header from "./components/Header/Header";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import MemesPage from "./pages/Memes/MemesPage";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="memes" element={<MemesPage />} />
      </Routes>
    </div>
  );
}

export default App;
