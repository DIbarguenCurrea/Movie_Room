const express = require("express"); //Paso 1: Aqui llamo a toda la libreria de Express.
const movieRouter = require("./routes/moviesRoutes");
const homeRouter = require("./routes/homeRoutes");
const app = express(); // Paso 2: Aqui lo instancio. 
const cors = require("cors");
const morgan = require("morgan");

//Aqui colocaremos los Middlewares -- Recordar que ya habia creado los de Routes
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.use("/", homeRouter)
app.use("/movies", movieRouter)

module.exports = app; // Paso 3: Aqui lo exporto.