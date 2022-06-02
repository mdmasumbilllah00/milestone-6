function postData() {
    fetch("https://jsonplaceholder.typicode.com/posts", {
        method: 'POST',
        body: JSON.stringify({
            title: "this is post title",
            post: "this is orginal post therte is 4 methode on json those are 1. get 2.POST 3.PATCH 4.PUT ",
            userName: "msmasumbillah0000"
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },

    })
        .then(res => res.json())
        .then(data => console.log(data.post))
}
postData()
// intervew er jonno sikhte hobe **************http get vs post********
// crud operation search diye dekhte hobe 

function loadShopingProducts() {
    fetch("https://mdmasumbilllah00.github.io/json/shapingmal.json")
        .then(res => res.json())
        .then(data => displayShopingProducts(data))
}
loadShopingProducts()
function displayShopingProducts(products) {
    products.forEach(element => {
        console.log(element)
    });
}
