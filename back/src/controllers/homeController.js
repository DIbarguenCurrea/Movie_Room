const getHome = (req, res) => {
    res
        .status(200)
        .send(`Estas en el Home`);
}

const postHome = (req, res) => {
    res
        .status(200)
        .send(`Estas en el POST Home`);
}

module.exports = { getHome, postHome };