import express from "express";
import {
  getMemes,
  postMeme,
  updateMeme,
  deleteMeme,
  likeMeme,
} from "../controllers/memeController.js";

//express.Router() is a complete middleware and routing system so the server can route to the different urls
const router = express.Router();

// handle the requests and give a response using a function at these urls with these http methods(get,post,patch..)
router.get("/", getMemes);
router.post("/", postMeme);
router.patch("/:id", updateMeme);
router.delete("/:id", deleteMeme);
router.patch("/:id/likeMeme", likeMeme);

export default router;
