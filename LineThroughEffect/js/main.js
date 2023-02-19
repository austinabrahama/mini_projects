
var textEle = document.getElementsByTagName("h1")[0];
var text = textEle.innerHTML;
var textArray = text.split("");

var newEle = document.createElement("h1");
newEle.classList.add("overlay");

newEle.innerHTML = textArray.map(value => {
    return `<span style='${showRandomly()}'>${value}</span>`;
}).join("");
document.body.appendChild(newEle);


function showRandomly() {
    return (Math.random() < 0.5) ? 'visibility: hidden;' : 'visibility: visible;';
}

