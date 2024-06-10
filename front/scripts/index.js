const createMovie = require("./createMovie");
const cardGenerator = require("./renderCards");
// const URL = "https://students-api.2.us-1.fl0.io/movies";
const API_URI = proccess.env.API_URI;
const API_KEY = proccess.env.API_KEY;

const API_URL = `${API_URI}${API_KEY}`;
const axios = require("axios");

const getMovies = async () => {
  try {
    const { data } = await axios.get(API_URI);
    data.map((movie) => cardGenerator(movie));
  } catch ({ message }) {
    alert(message);
  }
};

document.addEventListener("DOMContentLoaded", () => {
  getMovies();
  const submit = document.getElementById("formCreateMovie");
  submit?.addEventListener("submit", createMovie);
});
