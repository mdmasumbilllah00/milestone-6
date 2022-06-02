const loadQuotes = () => {
    fetch("https://api.kanye.rest")
        .then(res => res.json())
        .then(data => displayQuotes(data))
}

const displayQuotes = quates => {
    const newKanyea = document.createElement("p");
    newKanyea.innerText = quates.quote;
    document.getElementById("quote").appendChild(newKanyea)
}