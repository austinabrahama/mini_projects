
var container = document.getElementsByClassName("container")[0];
var scrollContainer = document.getElementsByClassName("scrollContainer")[0];
var jumpLoader = document.getElementsByClassName("jumpLoader")[0];
container.addEventListener("scroll", function(event) {
    var clientHeight = event.target.clientHeight;
    var scrollHeight = event.target.scrollHeight;
    var scrollTop = event.target.scrollTop;
    if((clientHeight + scrollTop) > (scrollHeight - 55)) {
        if(!jumpLoader.classList.contains("show")) {
            jumpLoader.classList.add("show");
            setTimeout(function() {
                jumpLoader.classList.add("show");
                generateContent();
            }, 3000);
        }
    }
});

function generateContent() {
    var content = document.createElement("div");
    content.classList.add("scroller")
    scrollContainer.appendChild(content);
    jumpLoader.classList.remove("show");
}