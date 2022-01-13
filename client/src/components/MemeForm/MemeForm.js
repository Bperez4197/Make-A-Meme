import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import FileBase from "react-file-base64";

import "./styles.scss";

export default function MemeForm({ closeModal }) {
  return (
    <div className="form-container">
      <form onSubmit={() => {}}>
        <div className="form-labels">
          <label htmlFor="creator">Creator</label>
          <label htmlFor="title">Title</label>
          <label htmlFor="topText">Top Text</label>
          <label htmlFor="bottomText" className="bottomTextLabel">
            Bottom Text
          </label>
          <label htmlFor="memeImage">Image</label>
          <label htmlFor="memeTags">tags</label>
        </div>
        <div className="form-inputs">
          <CloseIcon className="closeIcon" onClick={closeModal} />
          <input
            type="text"
            name="creator"
            id="creator"
            placeholder="Your Name"
          />
          <input
            type="text"
            name="title"
            id="title"
            placeholder="Title of your meme"
          />
          <input
            type="text"
            name="topText"
            id="topText"
            placeholder="Top Text of your meme"
          />
          <input
            type="text"
            name="bottomText"
            id="bottomText"
            placeholder="Bottom Text of your meme"
          />
          <FileBase type="file" multiple={false} id="memeImage" />
          <input
            type="text"
            name="memeTags"
            id="memeTags"
            placeholder="tags for your meme"
          />
          <button type="submit" id="submit" onClick={closeModal}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
