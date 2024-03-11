const path = require('path')
const outputPath = path.resolve(__dirname, "public");

module.exports = {
    entry: "./scripts/index.js",
    output: {
        path: __dirname + "/public",
        filename: "bundle.js",
    },
};