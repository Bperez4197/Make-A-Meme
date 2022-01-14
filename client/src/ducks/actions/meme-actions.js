import * as api from "../../api/memes-api";
import { FETCH_ALL, UPDATE, DELETE, CREATE } from "../../constants/actionTypes";

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
