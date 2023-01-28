function filterFun() {
    var liList = document.getElementsByTagName("li");
    var inputSearch = document.getElementById("inputSearch").value.toLowerCase();

    for (var i=0; i<liList.length; i++) {
        var anchor = liList[i].getElementsByTagName("a")[0];
        if(anchor.innerHTML.toLowerCase().indexOf(inputSearch) > -1) {
            liList[i].style.display = "block";
        } else {
            liList[i].style.display = "none";
        }
    }
}