function searchFood() {
    var foodName = document.getElementById("food-name").value;
    if (foodName == "") {
        alert("please write something")
    }
    else {
        var url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${foodName}`;
        fetch(url)
            .then(res => res.json())
            .then(data => displayFood(data.meals))
    }

    document.getElementById("food-name").value = ""
}
const displayFood = data => {
    // document.getElementById("foods").innerHTML = "";
    document.getElementById("foods").textContent = "";
    if (data == null) {
        alert("there is no food with this name ")
    }
    else {
        data.forEach(data => {
            var card = document.createElement("div");
            card.classList.add("col");
            card.innerHTML = `
        <div class="card" onclick="showDetails(${data.idMeal})">
            <img src="${data.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${data.strMeal}</h5>
                <p class="card-text">${data.strInstructions.slice(0, 250)}</p>
            </div>
        </div>
        `;
            document.getElementById("foods").appendChild(card);
        })
    }

}
function showDetails(mealId) {
    var url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
    fetch(url)
        .then(res => res.json())
        .then(data => console.log(data.meals[0]))
}

