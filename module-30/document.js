function add(num1, num2) {
    if (num2 == undefined) {
        num2 = 100;
    }
    return num1 + num2;
};
document.getElementById("ways-not-provide-value-if-button").addEventListener("click", function () {
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);
    if (num1 || num2 == 0 || "") {
        var ans = add(num1, num2);
        document.getElementById("display").innerText = "your result is:- " + ans;
    }
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";

})


document.getElementById("ways-not-provide-value").addEventListener("click", function (event) {
    var ifWay = `
    function add(num1, num2) {
        if (num2 == undefined) {
            num2 = 100;
        }
        var ans = num1 + num2;
        return ans;
    }
    var result = add(<input id="if-way-num1">);
    <button id="if-way-btn" class="btn btn-sm btn-warning">console</button>
    `;
    var orway = `
    function add(num1, num2) {
       num2 = num2 || 100;
        var ans = num1 + num2;
        return ans;
    }
    var result = add(<input id="or-way-num1">);
    <button id="if-way-btn" class="btn btn-sm btn-warning">console-or-way</button>
    `
    var onparameter = `
    function add(num1, num2 = 100) {
        var ans = num1 + num2;
        return ans;
    }
     var result = add(<input id="direct-way-num1">);
    <button id="if-way-btn" class="btn btn-sm btn-warning">console-direct-way</button>
    `
    if (event.target.innerText.includes("if(num2")) {
        document.getElementById("ways-not-provide-value-display").innerHTML = ifWay;
        document.getElementById("display").innerText = "";

    }
    if (event.target.innerText.includes("num2 || 0")) {
        document.getElementById("ways-not-provide-value-display").innerHTML = orway;
        document.getElementById("display").innerText = "";
    }
    if (event.target.innerText.includes("num2 = 33)")) {
        document.getElementById("ways-not-provide-value-display").innerHTML = onparameter;
        document.getElementById("display").innerText = "";
    }
})


function anotherWay(num1) {
    if (num1 != "" || 0) {
        var ans = add(num1);
        document.getElementById("display").innerText = "your result is:- " + ans;
        document.getElementById("if-way-num1").value = "";
    }
}

document.getElementById("ways-not-provide-value-display").addEventListener("click", function (event) {

    if (event.target.innerText == "console") {
        var num1 = parseInt(document.getElementById("if-way-num1").value);
        anotherWay(num1)
    }
    else if (event.target.innerText == "console-or-way") {
        var num1 = parseInt(document.getElementById("or-way-num1").value);
        anotherWay(num1)
    }
    else if (event.target.innerText == "console-direct-way") {
        var num1 = parseInt(document.getElementById("direct-way-num1").value);
        anotherWay(num1)
    }

})

var friend = 0;
document.getElementById("friend-buttton").addEventListener("click", function () {
    friend++;
    var newFriend = `
    <h1 style="margin-bottom:0px;">Friend ${friend}</h1>
    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla atque impedit eligendi repudiandae. Quam fuga optio ex consequuntur laborum molestias!</p>

    `
    var element = document.createElement("div");
    element.innerHTML = newFriend;
    document.getElementById("new-friend").appendChild(element)
})


// var add2 = function add2(num1, num2) {
//     return num1 + num2
// }
// console.log(add2(15, 17))

document.getElementById("make-array").addEventListener("click", function () {
    var numbers = document.getElementById("array-number").value;
    if (numbers != "") {
        numbers = numbers.split(",");
        var newNumbers = [];
        for (var number of numbers) {
            number = parseInt(number);
            newNumbers.push(number)
        }
        document.getElementById("array-display").innerText = `your number is ${newNumbers}`
    }
})
document.getElementById("find-max").addEventListener("click", function () {
    var numbers = document.getElementById("array-number").value;
    if (numbers != "") {
        numbers = numbers.split(",");
        var newNumbers = [];
        for (var number of numbers) {
            number = parseInt(number);
            newNumbers.push(number)
        }
        alert(Math.max(...newNumbers))
    }
})
