class Supporter {
    name;
    role = "support web developer";
    adderess = "bangladesh";
    constructor(name, adderess) {
        this.name = name;
        this.adderess = adderess;
    }
    startSession() {
        console.log(this.name, " start a support session")

    }
}
const amir = new Supporter("Amir khan", "Bd");
const salman = new Supporter("salman khan", "dubai");
const sarukh = new Supporter("sarukh khan", "india");
// console.log(amir)
// console.log(salman)
// console.log(sarukh)
// amir.startSession();
// salman.startSession();
// sarukh.startSession();

/*---------------------------------------------------------------------------section ------------------------------------------------------*/
/*---------------------------------------------------------------------------section ------------------------------------------------------*/
/*---------------------------------------------------------------------------section ------------------------------------------------------*/
/*---------------------------------------------------------------------------section ------------------------------------------------------*/
/*---------------------------------------------------------------------------section ------------------------------------------------------*/
class studentClass1 {
    name;
    role;
    village;
    living;
    constructor(name, role, village, living) {
        this.name = name;
        this.role = role;
        this.village = village;
        this.living = living;
    }
    startingStudy() {
        console.log(this.name, " just joined on class one")
    }
}
/*
1. class er kaj holo onek gulo object banano same class er;
2.er subudha holor bar bar kono object er property na likhe class name ke call kore  parameter er vitore sudhu value gulo pathale class ta otometic property guloke set kore dei.
*/


/*................................... kivabe kaj korte hoy
1. prothome "class" keyword likhe "className" likhte hobe pore "{ }" dite hobe;
2. er pore "property" ke declear korte hobe;
    a.jodi property value soho declear kora hoy tahole seta default value hisabe  sobar jonno kaj korbe.
    b.jodi property value declear na kora hoy taholeo somossa nai "constractor()" er moddhe parameter hisabe declear korte hobe.
3. er pore "constractor()" ei namei likhte hobe er moddhe "this" key word diye kono "property" name << this.propertyNaem >>  likhle sei property er value set kora jaeb.
4.
5.ekhon vono ekta variable const ba let pore "variableName" likhe = diye "new" keyword diye oi prothom line er class name diye "()" dite hobe.
6.ekhon "()" er moddhe constractor er moddher nparameter er value pass korte hobe; tahole "variableName" ta ekta object hisabe toiri hoye jabe;
7. ekhon conasole log("variableName") korle out put hisabe oi object ta pawa jaeb
8.
9. classs er moddhe chaile function o lekha jai a khetre
    a. prothome "functionName" likhe tar por "{}" er moddhe function lekha jai.
    b. function er moddhe oporer property thekei kidu ekta nite hobe se khetre abaro "this" keyword bebohar kore "." diye property name dite hobe.
10. pore jei name variable declear kora hoyese sei nam bosiye .diyeclass er vitore thaka function call kora jai
...........................................*/
const masum = new studentClass1("masum", 3, "bhatpara", "malaysia");
const mahabur = new studentClass1("mahabur", 8, "bhatpara", "telepara");
const istiak = new studentClass1("istiak", 2, "khulna", "salna");
const monira = new studentClass1("monira", 1, "bogra", "noljani");
const rabeya = new studentClass1("rabeya", 4, "bangdah", "chowgacha");

// console.log(masum)
// console.log(mahabur)
// console.log(istiak)
// console.log(monira)
// console.log(rabeya)
// masum.startingStudy();
// mahabur.startingStudy();
// istiak.startingStudy();
// monira.startingStudy();
// rabeya.startingStudy();
/*---------------------------------------------------------------------------section ------------------------------------------------------*/
/*---------------------------------------------------------------------------section ------------------------------------------------------*/
/*---------------------------------------------------------------------------section ------------------------------------------------------*/
/*---------------------------------------------------------------------------section ------------------------------------------------------*/
/*---------------------------------------------------------------------------section ------------------------------------------------------*/

class StudentClass2 {
    name = "Md";
    fatherName = "Md";
    motherName = "Mst";
    age = 10;
    subject = "Mathe";
    constructor(name, Fname, Mname, age, subject) {
        this.name = name;
        this.fatherName = Fname;
        this.motherName = Mname;
        this.age = age;
        this.subject = subject
    }

    fun() {
        console.log(this.age)
    }

}

const student1 = new StudentClass2("masum", 'Samaul', 'Fatema', 23, "higher-mathe");
const student2 = new StudentClass2("istiak", 'iqbal', 'aunt', 23, "biology");
const student3 = new StudentClass2("monira", 'vuia', 'monirma', 24, "hisabbiggan");
const student4 = new StudentClass2("rabeya", 'sohidul', 'mami', 25, "quran");
// console.log(student1)
// console.log(student2)
// console.log(student3)
// console.log(student4)
// student1.fun()
// student2.fun()
// student3.fun()
// student4.fun()

class SongClass {
    name = "Md";
    fatherName = "MD";
    motherName = "MsT";
    constructor(name, fatherName, motherName) {
        this.name = name;
        this.fatherName = fatherName;
        this.motherName = motherName;
    }
    alertName() {
        console.log(this.name, "just start our song class")
    }
}
var song1 = new SongClass("Md Masum Billah", "Md samaul Hossen", "Mst Fatema Khatun");

console.log(song1)
song1.alertName();