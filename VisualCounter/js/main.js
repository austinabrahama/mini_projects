
var counter = document.getElementById("counter");
var targetValue = +counter.getAttribute("data-target");

function updateCounter() {
    counterValue = +counter.innerText;
    if (counterValue < targetValue) {
        counter.innerText = Math.ceil(counterValue + (targetValue / 199));
        setTimeout(updateCounter, 1);
    } else {
        counter.innerText = targetValue;
    }
}

updateCounter();