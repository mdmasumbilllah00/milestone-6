function loadPost() {
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res => res.json())
        .then(posts => displayPost(posts))
}
function displayPost(post) {
    document.getElementById("posts").innerHTML = "";
    post.forEach(element => {
        const div = document.createElement("div");
        div.classList.add("post");
        div.innerHTML = `
        <h1 style="text-align:center;">id-${element.id}</h1>
        <h2>${element.title}</h2>
        <p>${element.body}</p>
    `
        document.getElementById("posts").appendChild(div);
    });
}
