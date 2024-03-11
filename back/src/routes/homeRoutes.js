const { getHome, postHome } = require("../controllers/homeController");
const { Router } = require("express");
const homeRouter = Router(); 

homeRouter.get("/", getHome);
homeRouter.post("/", postHome);

module.exports = homeRouter;


