import { FETCH_ALL, UPDATE, DELETE, CREATE } from "../../constants/actionTypes";

export default (memes = [], action) => {
  switch (action.type) {
    case UPDATE:
      return memes.map((meme) =>
        meme._id === action.payload._id ? action.payload : meme
      );
    case DELETE:
      return memes.filter((meme) => meme._id != action.payload);
    case FETCH_ALL:
      return action.payload;
    case CREATE:
      return [...memes, action.payload];
    default:
      return memes;
  }
};
