import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./styles.scss";

export default function Header() {
  const [isHome, setIsHome] = useState(true);

  return (
    <header>
      <h1>Make A Meme</h1>
      {isHome ? (
        <Link className="nav-item" to="/" onClick={() => setIsHome(false)}>
          <h3>Home</h3>
        </Link>
      ) : (
        <Link className="nav-item" to="/memes" onClick={() => setIsHome(true)}>
          <h3>Memes</h3>
        </Link>
      )}
    </header>
  );
}
