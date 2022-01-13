import React from "react";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import DeleteIcon from "@mui/icons-material/Delete";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import moment from "moment";

export default function Meme(memeData) {
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
    <div className="meme-container">
      <div className="actual-meme" style={{ backgroundImage: `url(${image})` }}>
        <span>{topText}</span>
        <span>{bottomText}</span>
      </div>
      <div className="meme-data-container">
        <div>
          <div>
            <h5>Title: {name}</h5>
            <h6>Created By: {creator}</h6>
            <span>{createdAt}</span>
            <span>{tags}</span>
          </div>
          <div>
            {" "}
            <MoreHorizIcon />
          </div>
        </div>
        <div>
          <span>
            <ThumbUpAltIcon /> &nbsp; Like &nbsp; {likeCount}
          </span>
          <span>
            <DeleteIcon /> &nbsp; Delete
          </span>
        </div>
      </div>
    </div>
  );
}
