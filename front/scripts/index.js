const createMovie = require("./createMovie");
const cardGenerator = require("./renderCards");
// const URL = "https://students-api.2.us-1.fl0.io/movies";
const URL = "http://localhost:3000/movies";
const axios = require("axios");

const getMovies = async () => {
    try { 
        const { data } = await axios.get (URL);
        data.map(movie => cardGenerator(movie));
    } catch ({ message }) {
        alert(message);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    getMovies();
    const submit = document.getElementById("formCreateMovie");
    submit?.addEventListener("submit", createMovie);  

});