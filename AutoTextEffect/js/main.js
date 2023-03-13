var content = document.getElementById("content");
var text = "We love programming";
var textLength = text.length;
var count = 1;

function contentEffect() {
    content.innerHTML = text.substring(0, count);
    count++;

    if (count == textLength + 1) {
        count = 1;
    }
}

setInterval(contentEffect, 100);