var studentts = { name: "masum", roll: "3", classes: "ten", nature: "sweet" }
// var name = studentts.name;
// var roll = studentts.roll;
// var classes = studentts.classes;
// var nature = studentts.nature;
//----------upore code guloke nicer moto shortcut a lekha jai-------------------
//----------upore code guloke nicer moto shortcut a lekha jai-------------------
//----------upore code guloke nicer moto shortcut a lekha jai-------------------
//----------upore code guloke nicer moto shortcut a lekha jai-------------------
var { name, roll, classes, nature } = studentts;

// console.log(name) //same is = console.log(student.name)
// console.log(roll)
// console.log(classes)

// var mans = {
//     name: "burama", age: 80, village: "vatpara",
//     child1: {
//         name: "shohidul", age: 65, village: "vatpara",
//         child1: {
//             name: "samaul", age: 50, village: "vatpara",
//             child1: { name: "masum", age: 23, village: "chowgacha" },
//             child2: { name: "mahabur", age: 18, village: "chowgacha" },
//             child3: { name: "lamia", age: 8, village: "khoringche" }
//         },
//         child2: {
//             name: "sukhi", age: 45, village: "shapur",
//             child1: { name: "rana", age: 27, village: "shapur" },
//             child2: { name: "sumaiya", age: 18, village: "shapur" }
//         }
//     },
//     child2: {
//         name: "hanef", age: 62, village: "vatpara",
//         child1: {
//             name: "faruk", age: 38, village: "vatpara",
//             child1: { name: "farjana", age: 13, village: "vatpara" },
//             child2: { name: "farhana", age: 11, village: "vatpara" }
//         },
//         child2: {
//             name: "manik", age: 34, village: "vatpara",
//             child1: { name: "forhad", age: 10, village: "vatpara" },
//             child2: { name: "faria", age: 7, village: "vatpara" }
//         }
//     }
// }

// var name = mans.child1.child1.child1.name;
// var names = mans.child2.child1.child1.name;
// console.log(name)
// console.log(names)

// var { name2, age, village } = mans;
// console.log(name, age, village)

var company = {
    name: "top glove",
    woner: { name: "tan sri", age: 63 },
    factory: { malaysia: 30, japan: 2, chaina: 5 }
}
var { malaysia, japan, chaina } = company.factory;