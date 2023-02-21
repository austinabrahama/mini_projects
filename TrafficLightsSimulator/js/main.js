var lights = ["red", "yellow", "green", "yellow"];
var lightsEle = document.getElementsByClassName("lights");
var lightsEleLen = lightsEle.length;
var maxTimeLimit = 4000;
var minTimeLimit = 2000;


function traffic(light) {
    var timeLimit = maxTimeLimit;
    for (var i=0; i<lightsEleLen; i++) {
        if (lightsEle[i].getAttribute("id") == light) {
            lightsEle[i].classList.add("active");
            timeLimit = i % 2 == 0 ? timeLimit : minTimeLimit; // If it is an alert signal then the time limit is reduced
        } else {
            lightsEle[i].classList.remove("active");
        }
    }

    var light = lights.shift();
    lights.push(light);

    setTimeout(function(){
        traffic(lights[0]);
    }, timeLimit);
}

traffic(lights[0]);