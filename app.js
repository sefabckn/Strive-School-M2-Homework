//Save this array in a variable called genres: ["Comedy", "Drama", "Romance", "Horror", "Sci-Fi", "Documentary"]
const genres = ["Comedy", "Drama", "Romance", "Horror", "Sci-Fi", "Documentary"]

//Create an unordered list using JavaScript and save it in a variable
let ulList = document.createElement("ul")

//3) Cycle the array and create a list-item via JavaScript for every element
for (i = 0; i < genres.length; i++) {
    let addingElement = document.createElement("li")
    ulList.appendChild(addingElement)
    ulList.innerHTML += genres[i]
}

window.onload = function() {

}