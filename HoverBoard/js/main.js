
var container = document.getElementById("container");
var defaultBgColor = "#1c1b1b";
var colorArray = ["Aqua", "Blue", "Brown", "Chartreuse", "DarkOrchid", "DeepPink", "Gold", "LightCoral", "LightSeaGreen", "OrangeRed", "Yellow"];
var totalElement = "500";

for (var i=0; i<totalElement; i++) {
    var element = document.createElement("span");
    container.appendChild(element);
}

container.addEventListener("mouseover", function(event) {
    var target = event.target;
    if (target.tagName.toLowerCase() == "span") {
        changeColor(target, getColor());
        setTimeout(function() {
            changeColor(target, defaultBgColor);
        }, 1000);
    }
});

function getColor() {
    return colorArray[Math.floor(Math.random() * colorArray.length)];
}

function changeColor(target, color) {
    target.style.backgroundColor = color;
}