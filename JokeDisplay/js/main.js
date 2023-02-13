var jokeId = document.getElementById("jokeId");
var buttonId = document.getElementById("btn");

buttonId.addEventListener("click", generateJokesFun);

async function generateJokesFun() {
    var jokes = await fetch("https://icanhazdadjoke.com/", {
        headers: {
            'Accept': 'application/json'
        }
    });

    var joke = await jokes.json();
    jokeId.innerHTML = joke.joke;
}

generateJokesFun();