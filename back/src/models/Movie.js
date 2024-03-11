const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
    title:  {
        type: String,
        required: true,
        unique: true,
    },
    year:{ 
        type: Number,
        required: true,
        min: [1895, `No hay peliculas previo a {VALUE}`],
    },
    director: String,
    duration: String,
    genre: [String],
    rate: Number,
    poster: {
        type: String,
        validate: {
            validator: function(input) {
                return input.includes("https://")
            },
            menssage: props => `${props.value} no es una url valida`
        }
    },
    description: String
});

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;

