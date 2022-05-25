var numbers = [5, 20, 30, 60, 50, 80, 44, 34, 10, 88];
var max = numbers.filter(x => x > 50);
var min = numbers.filter(x => x < 50);
var mideam = numbers.filter(mideam)
console.log(max)
console.log(min)

function mideam(number) {
    if (number > 30 && number < 70) {
        return number
    }
}
console.log(mideam)

var fnd = numbers.find(x => x > 30);
console.log(fnd)