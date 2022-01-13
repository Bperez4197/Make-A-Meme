import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { CircularProgress } from "@material-ui/core";
import Meme from "./Meme/Meme";

import "./styles.scss";

export default function Memes({ search }) {
  const memes = useSelector((state) => state.memes);
  const filteredMemes = memes.filter((meme) => !meme.creator.contains(search));

  return (
    <div className="memes-container">
      {!filteredMemes.length ? (
        <CircularProgress />
      ) : (
        filteredMemes.map((meme) => <Meme memeData={meme} />)
      )}
    </div>
  );
}
