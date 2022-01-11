import express from "express";
import mongoose from "mongoose";

import MemeMessage from "../models/memeModel.js";

const router = express.Router();

export const getMemes = async (req, res) => {
  try {
    const memeMessages = await MemeMessage.find();
    res.status(200).json(memeMessages);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const postMeme = async (req, res) => {
  const { creator, bottomText, image, name, tags, topText } = req.body;

  const newMeme = new MemeMessage({
    creator,
    bottomText,
    image,
    name,
    tags,
    topText,
  });

  try {
    await newMeme.save();
    res.status(201).json(newMeme);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const updateMeme = async (req, res) => {
  const { id: _id } = req.params;
  const meme = req.body;

  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send("No meme with that id");

  const updatedMeme = await MemeMessage.findByIdAndUpdate(
    _id,
    { ...meme, _id },
    { new: true }
  );

  res.json(updatedMeme);
};

export const deleteMeme = async (req, res) => {
  const { id: _id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send("No meme with that id");

  await MemeMessage.findByIdAndRemove(_id);

  res.json({ message: "Meme deleted successfully" });
};

export const likeMeme = async (req, res) => {
  const { id: _id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send("No meme with that id");

  const meme = await MemeMessage.findById(_id);
  const likedMeme = await MemeMessage.findByIdAndUpdate(
    _id,
    { likeCount: meme.likeCount + 1 },
    { new: true }
  );

  res.json(likedMeme);
};

export default router;
