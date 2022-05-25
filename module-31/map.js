var numbers = [10, 20, 30, 40];
// kono array er som gulo element guloke niye kisu ekta korle setake koyek vabe kora jai jemon.

// --------------1. direce for loop diye kono ekta notun array er modddhe rekhe----------
var newNumbers = [];
for (var number of numbers) {
    var result = number * 2;
    newNumbers.push(result)
}
// console.log(newNumbers)

// ---------------------------2. function er moddhe--------------------------------

/*function doubleItOld(number) {
    return number * 2
}
*/
const doubleItNew = (number => number * 2)

var newNumbers2 = [];
for (var number of numbers) {
    var result = doubleItNew(number);
    newNumbers2.push(result)
}
console.log(newNumbers2)

// ---------------------------3. eseyly with map()--------------------------------
/*
var numbers = [10, 20, 30, 40];
var output = numbers.map(doubleItNew);
console.log(output)
*/
// -----------------------or------

var numbers = [10, 20, 30, 40];
var output = numbers.map(number => number * 2);
console.log(output)