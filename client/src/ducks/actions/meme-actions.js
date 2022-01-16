import * as api from "../../api/memes-api";
import { FETCH_ALL, UPDATE, DELETE, CREATE } from "../../constants/actionTypes";

// Actions are functions we can use in the view and allow users to use through the ui. They get data from the front end user by passing them in during the function call, make the api call to the correct backend url, then dispatch an action with a type and payload to our reducer which decides what to return to the view. We can call these action on the view with the useDispatch hook.
export const getAllMemes = () => async (dispatch) => {
  try {
    const { data } = await api.fetchMemes();
    dispatch({ type: FETCH_ALL, payload: data });
  } catch (err) {
    console.log(err.message);
  }
};

export const createMeme = (memeData) => async (dispatch) => {
  try {
    const { data } = await api.createMeme(memeData);
    dispatch({ type: CREATE, payload: data });
  } catch (err) {
    console.log(err);
  }
};

export const updateMeme = (id, memeData) => async (dispatch) => {
  try {
    const { data } = await api.updateMeme(id, memeData);
    dispatch({ type: UPDATE, payload: data });
  } catch (err) {
    console.log(err.message);
  }
};

export const deleteMeme = (id) => async (dispatch) => {
  try {
    await api.deleteMeme(id);
    dispatch({ type: DELETE, payload: id });
  } catch (err) {
    console.log(err);
  }
};

export const likeMeme = (id) => async (dispatch) => {
  try {
    const { data } = await api.likeMeme(id);
    dispatch({ type: UPDATE, payload: data });
  } catch (err) {
    console.log(err);
  }
};
