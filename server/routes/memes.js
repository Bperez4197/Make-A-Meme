import express from "express";
import {
  getMemes,
  postMeme,
  updateMeme,
  deleteMeme,
  likeMeme,
} from "../controllers/memeController.js";

const router = express.Router();

router.get("/", getMemes);
router.post("/", postMeme);
router.patch("/:id", updateMeme);
router.delete("/:id", deleteMeme);
router.patch("/:id/likeMeme", likeMeme);

export default router;
