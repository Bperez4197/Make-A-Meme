import React from "react";
import { useSelector } from "react-redux";
import { CircularProgress } from "@material-ui/core";
import { Meme } from "./Meme/Meme";

import "./styles.scss";

export const Memes = ({ search }) => {
  const memes = useSelector((state) => state.memes);
  const filteredMemes = memes.filter((meme) =>
    meme.creator.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="memes-container">
      {!filteredMemes.length ? (
        <CircularProgress />
      ) : (
        filteredMemes.map((meme) => {
          return (
            <div key={meme._id} className="meme-container">
              <Meme memeData={meme} />
            </div>
          );
        })
      )}
    </div>
  );
};

export default Memes;
