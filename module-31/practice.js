class Person {
    name;
    fatherName;
    motherName;
    age;
    constructor(name, fatherName, motherName, age) {
        this.name = name;
        this.fatherName = fatherName;
        this.motherName = motherName;
        this.age = age;
    }
}

class Students extends Person {
    sector;
    constructor(name, fatherName, motherName, age, sector) {
        super(name, fatherName, motherName, age)
        this.sector = sector;
    }
    altNewStu() {
        console.log(this.name, "is our new student", "and is admited on ", this.sector)
    }
}

class Teacher extends Person {
    subject;
    constructor(name, fatherName, motherName, age, subject) {
        super(name, fatherName, motherName, age)
        this.subject = subject;
    }

    altNewTea() {
        console.log(this.name, "is our new teacher", "and her subject is ", this.subject)
    }
}

const stu1 = new Students("Md Masum Billah", "Md Samaul", "Fatema Khatun", 23, "class-5");
const teacher1 = new Teacher("Mist Lakhi ", "Md Sohhidul", "Barison nesa", 40, "english");
console.log(stu1);
console.log(teacher1);
teacher1.altNewTea();
stu1.altNewStu();


