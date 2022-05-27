// fetch('https://jsonplaceholder.typicode.com/todos/1')
//     .then(response => response.json())
//     .then(json => console.log(json))

function loadData() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => console.log(json))
}

/*--------------kono ekta data baire theke niye aste gele 3 ta kaj korte hoy jotha------------------
1. fathc("ekane") er moddhe kon jiaga theke niye asbo sei link bosate hobe.
2. .then(response => response.json()) eta dite hobe. tahole amra ekta string peye jabo jeta array te convert hobe.
3. tar pore .then() er moddhe ****json => console.log(json)*** eta bosabo

*/

// 32.4  Load More Data, More API, Send Data To Function

function loadUsers() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => displayUsers(data))
}
function loadPost() {
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res => res.json())
        .then(data => console.log(data))
}



// 32-5 Dynamically Display Loaded Data On Your Website
function displayUsers(data) {
    // for (var man of data) {
    //     var list = document.createElement("li");
    //     list.innerText = man.name;
    //     document.getElementById("users-name").appendChild(list)
    // }
    data.forEach(man => {
        var list = document.createElement("li");
        list.innerText = `Name:-${man.name}       Email:-${man.email}`;
        document.getElementById("users-name").appendChild(list)
    })
}


//// practice 

function loadPhotos() {
    fetch("https://jsonplaceholder.typicode.com/photos")
        .then(res => res.json())
        .then(photos => displayPhotos(photos))
}

function displayPhotos(photos) {
    photos.length = 50;
    photos.forEach(photo => {
        var img = document.createElement("img");
        var link = document.createAttribute("src");
        link.value = photo.thumbnailUrl;
        var clas = document.createAttribute("class");
        clas.value = "mrgin"
        img.setAttributeNode(link);
        img.setAttributeNode(clas);
        document.getElementById("photos").appendChild(img);
    })
}



// practice two

function loadAlbum() {
    fetch("https://jsonplaceholder.typicode.com/albums")
        .then(res => res.json())
        .then(albums => displayAlbum(albums))
}
function displayAlbum(albums) {
    albums.forEach(album => {
        var list = document.createElement("li");
        list.innerText = album.title;
        document.getElementById("albums-name").appendChild(list)
    })
}
