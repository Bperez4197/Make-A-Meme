import mongoose from "mongoose";

const memeSchema = mongoose.Schema({
  creator: String,
  bottomText: String,
  image: String,
  name: String,
  tags: [String],
  topText: String,
  createAt: {
    type: Date,
    default: new Date(),
  },
  likeCount: {
    type: Number,
    default: 0,
  },
});

var MemeMessage = mongoose.model("MemeMessage", memeSchema);

export default MemeMessage;
