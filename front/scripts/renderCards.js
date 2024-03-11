const cardContainer = document.getElementById("cards-container");

function cardGenerator ({ poster, title, year, director, duration, genre, rate, description}) {
    const cardDiv = document.createElement("div");
    cardDiv.classList.add("movie-container");
    cardDiv.innerHTML = `
        <img src="${poster}" alt="${title}"/>
        <h3><a href="#porDefinir" target="_blank">${title}</a></h3>
        <h4>Año: ${year}</h4>    
        <h4>Director: ${director}</h4>    
        <h4>Duración: ${duration}</h4>    
        <h4>Géneros: ${genre.join (" - ")}</h4>
        <h4>Rating: ${rate}</h4>
        <h5>Descripción: ${description}</h5>
        `
    
    cardContainer?.appendChild(cardDiv);
}

module.exports = cardGenerator;