import * as api from "../../api/memes-api";
import { FETCH_ALL, UPDATE, DELETE, CREATE } from "../../constants/actionTypes";

export const getAllMemes = () => async (dispatch) => {
  try {
    const { allMemes } = await api.fetchMemes();
    dispatch({ type: FETCH_ALL, payload: allMemes });
  } catch (err) {
    res.status(404).json({ message: err });
  }
};

export const createMeme = (memeData) => async (dispatch) => {
  try {
    const newMeme = await api.createMeme(memeData);
    dispatch({ type: CREATE, payload: newMeme });
  } catch (err) {
    console.log(err);
  }
};

export const updateMeme = (id, memeData) => async (dispatch) => {
  try {
    const updatedMeme = await api.updateMeme(id, memeData);
    dispatch({ type: UPDATE, payload: updatedMeme });
  } catch (err) {
    console.log(err);
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
