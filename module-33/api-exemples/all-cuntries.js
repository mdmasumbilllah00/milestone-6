function loadCuntries() {
    fetch("https://restcountries.com/v3.1/all")
        .then(res => res.json())
        .then(data => displayCuntry(data))
}

loadCuntries()

function displayCuntry(cuntries) {
    var allCuntries = [];
    cuntries.forEach(element => {
        allCuntries.push(element.name.common)

        var cuntry = document.createElement("div");
        cuntry.innerHTML = `
            <h1>${element.name.common}</h1>
            <h4>and its capital is ${element.capital}</h4>
            <button onclick="loadCuntryByName('${element.name.common}')">details</button>
        `;
        cuntry.classList.add("cuntry");
        document.getElementById("all-cuntries").appendChild(cuntry)
    });
    var allCuntry = allCuntries.sort();
    allCuntry.forEach(name => {
        var opt = document.createElement("option");
        opt.innerText = `${name}`;
        document.getElementById("cuntries-name").appendChild(opt)
    })
}
const loadCuntryByName = name => {
    const url = `https://restcountries.com/v3.1/name/${name}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayCuntryFlag(data[0]))
}

const displayCuntryFlag = cuntry => {
    const cuntryDetails = document.createElement("div");
    cuntryDetails.innerHTML = `
    <div class="flag text-center">
    <img src="${cuntry.flags.png}" class="w-50">
    <h1 class="mt-3 mb-5">${cuntry.name.common}</h1>
    
</div>
<p class='text-left'> ${cuntry.name.common} is a very populer cuntry in the world. <br>
     It is about ${cuntry.area} ft2. <br>
     <strong> ${cuntry.capital}</strong> is tis capital.  <br>
        ${cuntry.name.common} is one pert of  ${cuntry.name.common}. <br>
         see this map hear <a href="${cuntry.maps.googleMaps}">see map</a> </p>
    `
    document.getElementById("cuntry-flag").appendChild(cuntryDetails)
}

function altName() {
    var cuntry = document.getElementById("cuntries-name").value;
    const url = `https://restcountries.com/v3.1/name/${cuntry}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayCuntryFlag(data[0]))
}