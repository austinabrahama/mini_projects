
var progressDone = document.getElementsByClassName("progress-done")[0];
setTimeout(function() {
    progressDone.style.opacity = 1;
    var percentage = progressDone.getAttribute("data-done") + "%";
    progressDone.style.width = percentage;
    progressDone.innerHTML = percentage;
}, 500);