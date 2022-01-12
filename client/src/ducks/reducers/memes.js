import { FETCH_ALL, UPDATE, DELETE, CREATE } from "../../constants/actionTypes";

export default (memes = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;
    case UPDATE:
      return memes.map((meme) =>
        meme._id === action.payload.id ? action.payload : meme
      );
    case DELETE:
      return memes.filter((meme) => meme._id != action.payload);
    case CREATE:
      return [...memes, action.payload];
  }
};
