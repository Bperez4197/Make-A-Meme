import React, { useState, useEffect } from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import Memes from "../../components/Memes/Memes";
import MemeForm from "../../components/MemeForm/MemeForm";

import "./styles.scss";

export default function MemesPage() {
  const [searchField, setSearchField] = useState("");
  const [open, setOpen] = useState(false);

  const handleChange = (event) => {
    setSearchField(event.target.value);
  };

  const openModal = () => {
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
  };

  useEffect(() => {
    console.log(searchField);
  }, [searchField]);

  return (
    <div className="page-wrapper">
      <div className="page-header">
        <input
          type="text"
          placeholder="Seach by Creator..."
          name="searchField"
          id="searchField"
          onChange={handleChange}
        />
        <button className="create-btn" onClick={openModal}>
          {" "}
          <AddCircleIcon /> &nbsp; Create Meme
        </button>
      </div>
      <Memes search={searchField} />
      <div className={`${open ? "overlay" : "hidden"}`}></div>
      {open ? <MemeForm closeModal={closeModal} /> : ""}
    </div>
  );
}
