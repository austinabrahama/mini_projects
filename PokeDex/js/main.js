
var container = document.getElementById("container");
var count = 50;
var colorObj = {
    "bug": " #cce6ff",
    "dark": "#ccffff",
    "dragon": "#f2e6d9",
    "electric": "#ccccff",
    "fairy": "#ccffff",
    "fighting": "#ffffcc",
    "fire": "#ffffcc",
    "flying": "#ffccff",
    "ghost": "#ffcce6",
    "grass": "#d6f5d6",
    "ground": "#e6e6e6",
    "ice": "#ccffff",
    "normal": "#ffd6cc",
    "poison": "#ffcce6",
    "psychic": "#e6ffcc",
    "rock": "#ffe6cc",
    "steel": "#e6ccff",
    "water": "#ccccff",
}

function getPokeDex(url) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';
    xhr.onload = function() {
        if(xhr.status === 200) {
            generateElement(null, xhr.response);
        } else {
            alert("Error");
        }
    }
    xhr.send();
}

function callPokeDex() {
    var url = "https://pokeapi.co/api/v2/pokemon/";
    for (var i=0; i<count; i++) {
        getPokeDex(url + (i + 1));
    }
}
callPokeDex();

function generateElement(temp, response) {
    // console.log("response : ", response);
    var ele = document.createElement("div");
    var index = response.id.toString().padStart(3, "0");
    var name = response.name[0].toUpperCase() + response.name.slice(1);
    var type = response.types[0].type.name;
    var color = colorObj[type];
    var templateElement = `<div class='card' style='background-color: ${color};'>
        <div class='imgContainer'><img src='https://img.pokemondb.net/artwork/large/${response.name}.jpg'></div>
        <div class='index'>#${index}</div>
        <div class='name'>${name}</div>
        <small class='type'>Type: ${type}</div>
    </div>`;

    ele.innerHTML = templateElement;
    container.appendChild(ele);
    // console.log(ele)
}