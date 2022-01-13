import mongoose from "mongoose";

// mongoose.Schema allows us to create a blueprint object for how our memes should be structured
const memeSchema = mongoose.Schema({
  creator: String,
  bottomText: String,
  image: String,
  name: String,
  tags: [String],
  topText: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
  likeCount: {
    type: Number,
    default: 0,
  },
});

// Make the schema a model using mongoose.model
var MemeMessage = mongoose.model("MemeMessage", memeSchema);

export default MemeMessage;
