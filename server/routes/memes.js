import express from "express";
import {
  getMemes,
  postMeme,
  updateMeme,
  deleteMeme,
  likeMeme,
} from "../controllers/memeController.js";

//express.Router() is a complete middleware and routing system
const router = express.Router();

// Call the http requests on router and pass in a url and a function that performs the logic
router.get("/", getMemes);
router.post("/", postMeme);
router.patch("/:id", updateMeme);
router.delete("/:id", deleteMeme);
router.patch("/:id/likeMeme", likeMeme);

export default router;
