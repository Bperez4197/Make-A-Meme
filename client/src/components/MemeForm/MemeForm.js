import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import FileBase from "react-file-base64";
import { useDispatch } from "react-redux";
import { createMeme } from "../../ducks/actions/meme-actions";

import "./styles.scss";

export default function MemeForm({ closeModal }) {
  const [memeData, setMemeData] = useState({
    creator: "",
    bottomText: "",
    image: "",
    name: "",
    tags: [],
    topText: "",
  });
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createMeme(memeData));
    clear();
    closeModal();
  };

  const clear = () => {
    setMemeData({
      creator: "",
      bottomText: "",
      image: "",
      name: "",
      tags: [],
      topText: "",
    });
  };

  return (
    <div className="form-container">
      <form noValidate onSubmit={handleSubmit}>
        <div className="form-labels">
          <label htmlFor="creator">Creator</label>
          <label htmlFor="title">Title</label>
          <label htmlFor="topText">Top Text</label>
          <label htmlFor="bottomText" className="bottomTextLabel">
            Bottom Text
          </label>
          <label htmlFor="memeImage">Image</label>
          <label htmlFor="memeTags">tags</label>
          <button className="clear-btn" onClick={clear}>
            Clear
          </button>
        </div>
        <div className="form-inputs">
          <CloseIcon className="closeIcon" onClick={closeModal} />
          <input
            type="text"
            name="creator"
            id="creator"
            placeholder="Your Name"
            value={memeData.creator}
            onChange={(e) =>
              setMemeData({ ...memeData, creator: e.target.value })
            }
          />
          <input
            type="text"
            name="title"
            id="title"
            placeholder="Title of your meme"
            value={memeData.name}
            onChange={(e) => setMemeData({ ...memeData, name: e.target.value })}
          />
          <input
            type="text"
            name="topText"
            id="topText"
            placeholder="Top Text of your meme"
            value={memeData.topText}
            onChange={(e) =>
              setMemeData({ ...memeData, topText: e.target.value })
            }
          />
          <input
            type="text"
            name="bottomText"
            id="bottomText"
            placeholder="Bottom Text of your meme"
            value={memeData.bottomText}
            onChange={(e) =>
              setMemeData({ ...memeData, bottomText: e.target.value })
            }
          />
          <FileBase
            type="file"
            multiple={false}
            id="memeImage"
            onDone={({ base64 }) => setMemeData({ ...memeData, image: base64 })}
          />
          <input
            type="text"
            name="memeTags"
            id="memeTags"
            placeholder="tags for your meme"
            value={memeData.tags}
            onChange={(e) => {
              console.log(memeData);
              return setMemeData({
                ...memeData,
                tags: e.target.value.split(","),
              });
            }}
          />
          <button type="submit" id="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
