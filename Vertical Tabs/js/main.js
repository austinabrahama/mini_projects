function showContent(event, color) {
    
    var button = document.getElementsByClassName("button");
    for(var i=0; i<button.length; i++) {
        button[i].classList.remove("active");
    }

    var content = document.getElementsByClassName("content");
    for(var i=0; i<content.length; i++) {
        content[i].classList.remove("active");
    }

    document.getElementById(color).classList.add("active");
    event.target.classList.add("active");
}

document.getElementById("redBtn").click();