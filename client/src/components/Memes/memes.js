import React from "react";
import { useSelector } from "react-redux";
import { CircularProgress } from "@material-ui/core";
import { Meme } from "./Meme/Meme";

import "./styles.scss";

export const Memes = ({ search }) => {
  const memes = useSelector((state) => state.memes);
  // const filteredMemes = memes.filter((meme) => !meme.creator.includes(search));

  return (
    <div className="memes-container">
      {!memes.length ? (
        <CircularProgress />
      ) : (
        memes.map((meme) => {
          console.log(meme);
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
