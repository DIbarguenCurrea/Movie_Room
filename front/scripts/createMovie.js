const axios = require("axios");

//Este validateForm lo que hace es que valida todas las propiedades que le paso para que valide la información que le llega y pueda continuar su proceso. 
function validateForm ({
    title, year, director, duration, genre, rate, poster, description
}) {
    if (!title || !year || !director || !duration || !genre[0] || !rate || !poster || !description)
        return "Todos los campos son obligatorios.";
    if (director.length <5 || director.length >50)
        return "Nombre del Director debe contener 5 y 50 caracteres.";
    if (isNaN(rate) || rate < 1 || rate > 10)
        return "El rating debe ser entre (1. y 10).";
    if (!poster.includes("https://"))
        return "El poster debe ser un URL valida.";
    return null;
}

function createMovie (event) {
    event.preventDefault();

    const title = document.getElementById('title').value;
    const year = document.getElementById('year').value;
    const director = document.getElementById('director').value;
    const duration = document.getElementById('duration').value;
    const genre = document.getElementById('genre').value.split(" ");
    const rate = document.getElementById('rate').value;
    const poster = document.getElementById('poster').value;
    const description = document.getElementById('description').value;

    const newMovie = { title, year, director, duration, genre, rate, poster, description};

    const error = validateForm(newMovie);
    if (error) return alert(error);

    //Mensaje alerta - Petición al Back
    // return alert("Datos correctos");
    axios 
        .post("http://localhost:3000/movies", newMovie)
        .then(() => alert("Pelicula creada"))
        .catch((error) => alert("Error al crear una pelicula", error.message));
}

module.exports = createMovie;