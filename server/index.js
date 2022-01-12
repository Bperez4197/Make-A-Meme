import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import memeRoutes from "./routes/memes.js";

// Make the app an instance of express()
const app = express();
// Tell our app to look for environment variables in the .env file
dotenv.config();

// Tells our app to use the bodyParser middleware so our requests and responses can be in json and urlencoded
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
// Allows requests from different origins (other projects such as the client side)
app.use(cors());

const PORT = process.env.PORT || 5000;

// Tells our app that the memeRoutes should all start with /memes
app.use("/memes", memeRoutes);

// Print a message in the browser so we know its working
app.get("/", (req, res) => {
  res.send("Meme api!");
});

// Connect to the database with the url, if the connection is successful tell the app to listen on a port, if it fails log an error
mongoose
  .connect(process.env.CONNECTION_URL)
  .then(() => app.listen(PORT, console.log(`Server running on port: ${PORT}`)))
  .catch((error) => console.log(error));
