import React from "react";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import "./styles.scss";

export default function Header({ isHome, setIsHome }) {
  return (
    <header>
      <h1>Make A Meme</h1>
      {!isHome ? (
        <Link
          className="nav-item"
          to="/"
          onClick={(prevState) => setIsHome(prevState)}
        >
          <h3>
            <HomeIcon fontSize="large" />
          </h3>
        </Link>
      ) : (
        <Link
          className="nav-item"
          to="/memes"
          onClick={(prevState) => setIsHome(!prevState)}
        >
          <h3>Memes</h3>
        </Link>
      )}
    </header>
  );
}
