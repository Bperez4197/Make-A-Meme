import axios from "axios";

const url = "https://meme-maker-project.herokuapp.com/memes";

export const fetchMemes = () => axios.get(url);
export const createMeme = (memeData) => axios.post(url, memeData);
export const updateMeme = (id, memeData) =>
  axios.patch(`${url}/${id}`, memeData);
export const deleteMeme = (id) => axios.delete(`${url}/${id}`);
export const likeMeme = (id) => axios.patch(`${url}/${id}/likeMeme`);
