const dbConfig = require("./src/config/dbConfig.js");
const app = require("./src/server.js"); //Aqui llamo el app creado en server.js
const PORT = 3000; // Creación del puerto.

const startServer = async () => {
    try {
        await dbConfig();
        app.listen(PORT, () => {
         console.log(`Server listening on http://localhost:${PORT}`);
    });
    } catch (error) {
        console.log(error);
    }
};

startServer();