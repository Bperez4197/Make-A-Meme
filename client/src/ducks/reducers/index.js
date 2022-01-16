import { combineReducers } from "redux";
import memes from "./memes";

// All of our reducers can be combined into one, which is passed into our create store function, which allows us to access them (our various states ex: useSelector(state => state.memes)) throughout the app
export default combineReducers({
  memes: memes,
});
