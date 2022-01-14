import React, { useState, useEffect } from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import Memes from "../../components/Memes/Memes";
import MemeForm from "../../components/MemeForm/MemeForm";
import { getAllMemes } from "../../ducks/actions/meme-actions";
import { useDispatch } from "react-redux";

import "./styles.scss";

export default function MemesPage() {
  const [searchField, setSearchField] = useState("");
  const [currentId, setCurrentId] = useState(null);
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    setSearchField(event.target.value);
  };

  const openModal = (id) => {
    setOpen(true);
    setCurrentId(id);
  };

  const closeModal = () => {
    setOpen(false);
    setCurrentId(null);
  };

  useEffect(() => {
    dispatch(getAllMemes());
  }, [currentId, dispatch]);

  return (
    <div className="page-wrapper">
      <div className="page-header">
        <input
          type="text"
          placeholder="Seach by Creator..."
          name="searchField"
          id="searchField"
          onChange={handleChange}
          value={searchField}
        />
        <button className="create-btn" onClick={() => openModal(null)}>
          {" "}
          <AddCircleIcon /> &nbsp; Create Meme
        </button>
      </div>
      <Memes openModal={openModal} search={searchField} />
      <div
        className={`${open ? "overlay" : "hidden"}`}
        onClick={open ? () => closeModal() : () => {}}
      ></div>
      {open ? (
        <MemeForm
          currentId={currentId}
          setCurrentId={setCurrentId}
          closeModal={closeModal}
        />
      ) : (
        ""
      )}
    </div>
  );
}
