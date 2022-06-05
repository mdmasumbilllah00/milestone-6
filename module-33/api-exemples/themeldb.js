const searchFood = async () => {
    var searchWord = document.getElementById("food-name").value;
    if (searchWord != "") {
        var res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchWord}`)
        var data = await res.json();
        showFoods(data.meals)
    }
    else {
        alert("Please Write a name of food")
    }

    /*var url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchWord}`
   console.log()
   fetch(url)
       .then(res => res.json())
       .then(data => console.log(data.meals))
       */
}

const showFoods = (data) => {
    document.getElementById("food-name").value = "";
    document.getElementById("foods").textContent = "";
    document.getElementById("full-details").textContent = "";
    console.log(data)
    try {
        if (data == null) {
            alert("there is no result of this food")
        }
        if (data.length != 0) {
            data.forEach(food => {
                const element = document.createElement("div");
                element.classList.add("col");
                element.innerHTML = `
                    <div class="card" onclick="showDetails(${food.idMeal})">
                        <img src="${food.strMealThumb}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h3 class="card-title text-center">${food.strMeal}</h3>
                            <p class="card-text">${food.strInstructions.slice(0, 250)}</p>
                        </div>
                    </div>
                 `
                    ;
                document.getElementById("foods").appendChild(element)
            });
        }
    }
    catch (err) {
        alert(err)
    }


}
const showDetails = async (mealId) => {
    var url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
    const res = await fetch(url);
    var data = await res.json();
    showFullDetails(data.meals[0])
}

const showFullDetails = data => {

    document.getElementById("full-details").innerHTML = `
        <div class="card w-75 mx-auto">
            <img src="${data.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${data.strMeal}</h5>
                <p class="card-text">${data.strInstructions.slice(0, 250)}</p>
                <a href="${data.strYoutube}" class="btn btn-primary">see resepis</a>
            </div>
        </div>
   `

}
function myFunction(event) {
    if (event.code == "Enter") {
        searchFood()
    }
}



