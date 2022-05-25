// declear variable based on the name of on aoject property
// var myobject = { x: 2, y: 50, z: 100, a: 25, b: 68 };
// const { x, b } = myobject;
// console.log(x, b);

// //destracturing in array
// var [p, q] = [45, 37, 40, 90]
// console.log(p, q)

// var man = { name: "masum", age: 23 };
// var { name, age } = man;
// const { name, age } = { name: "masum", age: 23 }


// chining  jodi object er moddhe man na thake 


var mans = {
    name: "burama", age: 80, village: "vatpara",
    child1: {
        name: "shohidul", age: 65, village: "vatpara",
        child1: {
            name: "samaul", age: 50, village: "vatpara",
            child1: { name: "masum", age: 23, village: "chowgacha" },
            child2: { name: "mahabur", age: 18, village: "chowgacha" },
            child3: { name: "lamia", age: 8, village: "khoringche" }
        }
    }
}
// var { name, age, village } = mans.child1;
console.log(mans.child1)


// kono ekta object er moddhe kono value na pele setar man undefiend pawa jai
var numbers = { x: 10, y: 20 };
console.log(numbers?.z?.k)