class AllStudents {
    name;
    fatherName;
    motherName;
    age;
    adderess;
    constructor(name, fatherName, motherName, age, adderess) {
        this.name = name;
        this.fatherName = fatherName;
        this.motherName = motherName;
        this.age = age;
        this.adderess = adderess;
    }
}
class Class1To8 extends AllStudents {
    sector;
    section;
    constructor(name, fatherName, motherName, age, adderess, sector, section) {
        super(name, fatherName, motherName, age, adderess)
        this.sector = sector;
        this.section = section;
    }
    fun() {
        console.log("==>", this.name, " have been just admisioned on", this.sector)
    }

}
class Class9To12 extends AllStudents {
    sector;
    section;
    optionalSubject;
    constructor(name, fatherName, motherName, age, adderess, sector, section, optional) {
        super(name, fatherName, motherName, age, adderess)
        this.sector = sector;
        this.section = section;
        this.optionalSubject = optional;
    }
    fun() {
        console.log("==>", this.name, " have been just admisioned on", this.sector, "and his optional subject is ", this.optionalSubject)
    }

}
class Teacher extends AllStudents {
    sector;
    subject;
    constructor(name, fatherName, motherName, age, adderess, sector, subject) {
        super(name, fatherName, motherName, age, adderess)
        this.sector = sector;
        this.subject = subject;
    }
    fun() {
        console.log("==>", this.name, " have been just admisioned on our school as ateacher  and", this.subject, "are his subjects")
    }

}

var stu1 = new Class1To8("sneha", "kamarul", "mitali", 7, "bhatpara", "class-1", "A");
console.log(stu1);
stu1.fun();

var stu2 = new Class9To12("sneha", "kamarul", "mitali", 7, "bhatpara", "class-9", "science", "higher-mathe");
console.log(stu2);
stu2.fun();

var stu3 = new Teacher("samima", "uncle", "unte", 7, "dhaka", "class 6-10", "bangla");
console.log(stu3);
stu3.fun();