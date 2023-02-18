
var container = document.getElementById("container");
var password = document.getElementById("password");

password.addEventListener("input", function(event) {
    var value = event.target.value;
    var blurValue = 20 - (value.length * 2);
    container.style.filter = `blur(${blurValue}px)`;
});