/* Smooth transition of panel */
var accordion = document.getElementsByClassName("accordion");
for(var index=0; index<accordion.length; index++) {
    accordion[index].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.height) {
            panel.style.height = null;
        } else {
            panel.style.height = panel.scrollHeight + "px";
        }
    });
}