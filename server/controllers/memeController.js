import express from "express";
import mongoose from "mongoose";

import MemeMessage from "../models/memeModel.js";

const router = express.Router();

export const getMemes = async (req, res) => {
  try {
    // store all the memes in a variable using model.find()
    const memeMessages = await MemeMessage.find();
    //return the memes in json
    res.status(200).json(memeMessages);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const postMeme = async (req, res) => {
  // destructure the keys for the meme from the request's body
  const { creator, bottomText, image, name, tags, topText } = req.body;

  // create the new meme as an instance of the meme model and pass in the key/values
  const newMeme = new MemeMessage({
    creator,
    bottomText,
    image,
    name,
    tags,
    topText,
  });

  try {
    // await the new meme being saved to the database
    await newMeme.save();
    // return the new meme in json
    res.status(201).json(newMeme);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const updateMeme = async (req, res) => {
  // get the meme's id from the request's parameters
  const { id: _id } = req.params;
  // get the rest of the meme from the request's body
  const meme = req.body;

  // Make sure it is a valid mongoose/mongodb id
  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send("No meme with that id");

  // await finding the meme to update, pass in the id as first arg, destructure the meme and include the id all as an object as second arg, new: true as third arg means return the new meme rather than the original
  const updatedMeme = await MemeMessage.findByIdAndUpdate(
    _id,
    { ...meme, _id },
    { new: true }
  );

  //return the updated meme as json
  res.json(updatedMeme);
};

export const deleteMeme = async (req, res) => {
  // get the id from the request's parameters
  const { id: _id } = req.params;

  // Make sure it is a valid mongoose/mongodb id
  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send("No meme with that id");

  // wait for the meme to be found and removed
  await MemeMessage.findByIdAndRemove(_id);

  // return a json message indicating the deletion succeeded
  res.json({ message: "Meme deleted successfully" });
};

export const likeMeme = async (req, res) => {
  // get the id from the request's parameters
  const { id: _id } = req.params;

  // Make sure it is a valid mongoose/mongodb id
  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send("No meme with that id");

  // get the meme by its id so we can use its properties for the liked meme
  const meme = await MemeMessage.findById(_id);
  // find the meme and update it passing in the id, the updated property, and whether you want the updated meme or the original
  const likedMeme = await MemeMessage.findByIdAndUpdate(
    _id,
    { likeCount: meme.likeCount + 1 },
    { new: true }
  );

  // return the liked meme in json
  res.json(likedMeme);
};

export default router;
