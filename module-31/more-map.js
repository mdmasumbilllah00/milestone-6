
var students = [
    { name: "md masum billah", fatherName: "samaul", motherName: "fatema", age: 23 },
    { name: "md mahbur rahman", fatherName: "samaul", motherName: "fatema", age: 18 },
    { name: "istiak", fatherName: "ikbal", motherName: "aunt", age: 23 },
    { name: "mim", fatherName: "kamarul", motherName: "mitali", age: 17 }
]

var studentsName = students.map(student => student.name);
console.log(studentsName)
/* map() er kaj holo tinta jotha 
1. kono ekta array theke protita ekta ekta kore element nibe.
2. element gulo ke kono ekta kaj korbe.
3. result guloke ekta notun array hisabe return korbe.
*/

//-------------forEach()-----------------
students.forEach(student => console.log(student.name))

/* forEach() and map() er kaj same same kono ekta array er sob gulo element ke ekta ekta kore dhore kono ekta kaj korbe kintu ekta parthokko holo map() notun ekta array toiri kore dibe kintu forEach() array return korbe na.
*/