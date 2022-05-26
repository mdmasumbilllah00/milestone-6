/*
1. can you declear valu with let and constent;
2. templet string.
    a. use variable in template string
    b. use object property in template string
3. errer function 
    a with one paraeter. will return the number after dividing by 5
    b. with two parameters will add 2 to ewach number and then multiplay the result.
    c. three parameter will return all three multiplay
    d with multi line arraw function and return each number add 2 ane gun the result;
4. home work ==== js function and arraw function different 
5. take anumbers arry and map to get each element multiplai by 5. must use arraw function.
6. [advance] numbers of array retunt bby using filter arraw function
7. array of objet (products) use find to get the object prich 5000.
8. you have an object use distructuring for a simple object and declear a variable 
9. three name ekta variable hobe jetar third element hobe hobe kono ekta array er third element.
10. kono akta function ase jar tinta parameter ase jar last parameter er default man hobe 7 and this function will return the sum of all parameters.


*/
/*
var products = [
    { name: "radmi", prise: 20000, ram: "6gb", rom: "128gb" },
    { name: "sumsung", prise: 10000, ram: "4gb", rom: "64gb" },
    { name: "howie", prise: 80000, ram: "8gb", rom: "256gb" },
    { name: "oppo", prise: 30000, ram: "6gb", rom: "128gb" }
]
var bigestProduct = products.find(product => product.prise > 20000 && product.prise < 80000);
console.log(bigestProduct.name, bigestProduct.prise, bigestProduct.ram, bigestProduct.rom)

*/
document.getElementById("var-tem-string-btn").addEventListener("click", function () {
    var temString = `${document.getElementById("var-tem-string-npt").value}`;
    document.getElementById("var-tem-string-display").innerHTML = temString;
})
document.getElementById("obj-tem-string-btn").addEventListener("click", function () {
    var name = document.getElementById("obj-tem-string-npt-name").value;
    name = name || "Md Masum Billah";
    var fName = document.getElementById("obj-tem-string-npt-fname").value;
    fName = fName || "Samaul miah";
    var mName = document.getElementById("obj-tem-string-npt-mname").value;
    mName = mName || "Fatema Khatun";
    var age = parseInt(document.getElementById("obj-tem-string-npt-age").value);
    age = age || 23;
    var students = { name: name, fatherName: fName, motherName: mName, age: age };
    var obj = `<h6>var students = {name:${students.name} , fatherName:${students.fatherName} , motherName:${students.motherName} , age:${students.age}} </h6>`
    document.getElementById("obj-tem-string-display").innerHTML = obj;
    document.getElementById("obj-tem-string-npt-name").value = "";
    document.getElementById("obj-tem-string-npt-fname").value = "";
    document.getElementById("obj-tem-string-npt-mname").value = "";
    document.getElementById("obj-tem-string-npt-age").value = "";
})

var divide5Number = x => x / 5;
document.getElementById("arow-oneP-div5-btn").addEventListener("click", function () {
    var number = parseInt(document.getElementById("arow-oneP-div5-npt-num").value);
    var ans = divide5Number(number)
    document.getElementById("arow-oneP-div5-display").innerHTML = "Your ans is " + ans;
});


var twoParaAdd2AndMult = (x, y) => (x + 2) * (y + 2);

document.getElementById("arow-twoP-add2and*all-btn").addEventListener("click", function () {
    var number1 = parseInt(document.getElementById("arow-twoP-add2and*all-npt-num1").value);
    var number2 = parseInt(document.getElementById("arow-twoP-add2and*all-npt-num2").value);
    var ans = twoParaAdd2AndMult(number1, number2)
    document.getElementById("arow-twoP-add2and*all-display").innerHTML = "Your ans is " + ans;
});


var threeParaMulti = (x, y, z) => x * y * z;
document.getElementById("arow-threeP-multi-btn").addEventListener("click", function () {
    var number1 = parseInt(document.getElementById("arow-threeP-multi-npt-num1").value);
    var number2 = parseInt(document.getElementById("arow-threeP-multi-npt-num2").value);
    var number3 = parseInt(document.getElementById("arow-threeP-multi-npt-num3").value);
    var ans = threeParaMulti(number1, number2, number3)
    document.getElementById("arow-threeP-multi-display").innerHTML = "Your ans is " + ans;
});


var threeParaAdd2MultiLine = (x, y, z) => {
    x = x + 2;
    y = y + 2;
    z = z + 2;
    var ans = x * y * z;
    return ans;
}

document.getElementById("arow-threeP-multi-line-btn").addEventListener("click", function () {
    var number1 = parseInt(document.getElementById("arow-threeP-multi-line-npt-num1").value);
    var number2 = parseInt(document.getElementById("arow-threeP-multi-line-npt-num2").value);
    var number3 = parseInt(document.getElementById("arow-threeP-multi-line-npt-num3").value);
    var ans = threeParaAdd2MultiLine(number1, number2, number3)
    document.getElementById("arow-threeP-multi-line-display").innerHTML = "Your ans is " + ans;
});


document.getElementById("number-array-map-multi5-btn").addEventListener("click", function () {
    var numbers = document.getElementById("number-array-map-multi5").value.split(" ");
    var numbers5 = numbers.map(number => number * 5);
    document.getElementById("number-array-map-multi5-display").innerHTML = "Your ans is " + numbers5;

})

document.getElementById("number-array-filter-multi5-btn").addEventListener("click", function () {
    var numbers = document.getElementById("number-array-filter-array").value.split(" ");
    console.log(numbers)
    var condNumber = parseInt(document.getElementById("number-array-filter-condition").value);
    var numbers5 = numbers.filter(number => number > condNumber);
    document.getElementById("number-array-filter-multi5-display").innerHTML = "Your ans is " + numbers5;

})




