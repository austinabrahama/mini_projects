
var mealContainer = document.getElementById("mealContainer");
var image = document.getElementById("image");
var textContainer = document.getElementById("textContainer");
url = "https://themealdb.com/api/json/v1/1/random.php";

function getRandomMeal() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';
    xhr.onload = function() {
        if(xhr.status === 200) {
            generateResultInDOM(null, xhr.response);
        } else {
            alert("Error");
        }
    }
    xhr.send();
}

function generateResultInDOM(temp, response) {
    meals = response.meals[0];
    // console.log("response : ", meals);
    image.src = meals.strMealThumb;
    textContainer.innerHTML = meals.strInstructions;

}