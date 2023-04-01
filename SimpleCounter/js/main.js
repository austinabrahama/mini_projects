
var counter = document.getElementById("counter");
var time = 10;
var totalSeconds = time * 60;

function updateCounter() {
    var minutes = Math.floor(totalSeconds/60);
    var seconds = Math.floor(totalSeconds % 60);
    seconds = seconds < 10 ? "0" + seconds : seconds;
    counter.innerHTML = minutes + " : " + seconds;
    totalSeconds--;
}

setInterval(updateCounter, 1000);