import React from "react";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import moment from "moment";

import "./styles.scss";

export const Meme = ({ memeData }) => {
  const {
    creator,
    bottomText,
    image,
    name,
    tags,
    topText,
    createdAt,
    likeCount,
  } = memeData;
  return (
    <div>
      <div id="actual-meme" style={{ backgroundImage: `url(${image})` }}>
        <span>{topText}</span>
        <span>{bottomText}</span>
      </div>
      <div className="meme-data-container">
        <div className="meme-data">
          <h5>Title: {name}</h5>
          <span className="time">{moment(createdAt).fromNow()}</span>
          <h6>Created By: {creator}</h6>
          <span id="tags">{tags.map((tag) => `#${tag} `)}</span>
        </div>
        <div className="meme-btns">
          <span className="meme-btn" onClick={() => {}}>
            <ThumbUpAltIcon />
            &nbsp; Like &nbsp; {likeCount}
          </span>
          <span className="meme-btn" onClick={() => {}}>
            {" "}
            <EditIcon />
            &nbsp; Edit
          </span>
          <span className="meme-btn" onClick={() => {}}>
            <DeleteIcon />
            &nbsp; Delete
          </span>
        </div>
      </div>
    </div>
  );
};
