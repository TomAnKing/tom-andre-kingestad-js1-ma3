const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating";

const resultContainer = document.querySelector(".gamesContainer");

async function getGames() {
    try {
        const response = await fetch(url);
    
        const games = await response.json();
    
        const facts = games.results;

        resultContainer.innerHTML = "";
    
        for(let i = 0; 0 < facts.length; i++) {
            if(i===8)
            break

            resultContainer.innerHTML += `<div class="game"><b>Name:</b> ${facts[i].name} 
                                                            <b>Rating:</b>  ${facts[i].rating} 
                                                            <b>Tags:</b> ${facts[i].tags.length}</div>`
        }
    } catch (error) {
        console.log("An error occurred");
        resultContainer.innerHTML = displayError("Failed to load games");
    }
}

getGames();