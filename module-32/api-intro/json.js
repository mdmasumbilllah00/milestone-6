
// waht is api?===> API is the acronym for Application Programming Interface, which is a software intermediary that allows two applications to talk to each other.
// javascript object notation == JSON

const user = { id: 11, name: "md masum billah", job: "web-devaloper" };
const stringifieg = JSON.stringify(user);

// console.log(user)
// console.log(stringifieg)


// complex object
const shop = {
    name: "MS Shoping Mall",
    adderess: "Bhatpara",
    products: ["laptops", "mobiles", "pepsi"],
    isExpensive: false,
    woner: {
        name: "md Masum Billa",
        profation: "actor"
    },
    profit: 1000
};
//---------------make string from an object by ***JSON.stringify()*** function----------
const shopStringified = JSON.stringify(shop);
// kono object ke stringifi korle seta r object thakbe na 
// console.log(shop)
console.log(shopStringified);
//---------------make object from JSON string by***JSON.parse()*** function----------

const converted = JSON.parse(shopStringified);
console.log(converted);
// backend theke kono ekta object ke stringifi kore dibe setake amake parse kore niye object kore nite hobe 
// ------------*********summary*******------
/*
1. kono ekata object ke JSON.stringify("object") diye call korle kono ekta object ke string kora jai
2. kono ekta josn string ke JSON.parse() diye object kora jabe 
*/



//   32-3 Json Placeholder, Get Data, Display Data On UI



