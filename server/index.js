import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import memeRoutes from "./routes/memes.js";

const app = express();
dotenv.config();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

const PORT = process.env.PORT || 5000;

app.use("/memes", memeRoutes);

app.get("/", (req, res) => {
  res.send("Meme api!");
});

mongoose
  .connect(process.env.CONNECTION_URL)
  .then(() => app.listen(PORT, console.log(`Server running on port: ${PORT}`)))
  .catch((error) => console.log(error));
