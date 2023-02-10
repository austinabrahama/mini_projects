
function toggleFun() {
    var menuIconContainer = document.getElementsByClassName("menuIconContainer")[0];
    var navbar = document.getElementsByClassName("sideNav")[0];

    menuIconContainer.classList.toggle("active");
    navbar.classList.toggle("active");
}