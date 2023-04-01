
var container = document.getElementById("container");
// var targetValue = +counter.getAttribute("data-target");

var rows = 15;
var columns = 15;
var elemArray = [];
function generateCircle() {
    for ( var i=0; i<rows; i++) {
        var tempArray = [];
        for ( var j=0; j<columns; j++) {
            var elem = document.createElement("div");
            elem.classList.add("circle");
            container.appendChild(elem);
            tempArray.push(elem);
        }
        elemArray.push(tempArray);
    }

    elemArray.forEach(function(outer, i) {
        outer.forEach(function(inner, j) {
            inner.addEventListener("click", function() {
                addGrow(i, j);
            });
        });
    });
}

generateCircle();

function addGrow(i, j) {
    if (elemArray[i] && elemArray[i][j]) {
        if(!elemArray[i][j].classList.contains("grow")) {
            elemArray[i][j].classList.add("grow");
            setTimeout(function() {
                addGrow(i+1, j);
                addGrow(i-1, j);
                addGrow(i, j+1);
                addGrow(i, j-1);
            }, 100);

            setTimeout(function() {
                elemArray[i][j].classList.remove("grow");
            }, 300);
        }
    }
}