class TeamMember {
    name;
    role = "support web developer";
    adderess = "bangladesh";
    constructor(name, adderess = "bangladesh") {
        this.name = name;
        this.adderess = adderess;
    }
}


class Supporter extends TeamMember {
    groupSupportTime;
    constructor(name, adderess, time) {
        super(name, adderess)
        this.groupSupportTime = time;
    }
    startSession() {
        console.log(this.name, " start a support session")

    }
}


class StudentCare extends TeamMember {
    fan;
    constructor(name, adderess, fan) {
        super(name, adderess)
        this.fan = fan;
    }
    buildARotuin(student) {
        console.log(this.name, " build a rotuin for ", student)

    }
}
class naptunDev {
    name;
    role = "app release  web developer";
    adderess = "bangladesh";
    constructor(name, adderess = "bangladesh") {
        this.name = name;
        this.adderess = adderess;
    }
    releaseApp(version) {
        console.log(this.name, " realease app ", version)

    }
}


var masum = new Supporter("Md Masum Billah", "malaysia", 8);
console.log(masum);
masum.startSession();
var alia = new StudentCare("alia bhat", "mumbai", 1000);
console.log(alia)
alia.buildARotuin("masum")
var monira = new naptunDev("monira", "gazipur");
console.log(monira)
monira.releaseApp("3.9")