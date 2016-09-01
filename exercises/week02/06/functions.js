function a() {
    var jeppe = {fname:"Jeppe", lname:"Mononen"};
    console.log(jeppe.fname + " " + jeppe.lname);
}


function b() {
    var jeppe = {fname:"Jeppe", lname:"Mononen"};
    for(var name in jeppe) {
        console.log(name + " " + jeppe[name]);
    }

}

function c() {
    var jeppe = {fname:"Jeppe", lname:"Mononen"};
    var mikko = {fname:"Mikko", lname:"Mallikas"};
    var jaska = {fname:"Jaska", lname:"Jokunen"};
    var personList = [jeppe, mikko, jaska];

    for(var person in  personList) {
        for(var name in personList[person]) {
            console.log(name + " " + personList[person][name]);
        }
    }
}

function d() {

    var Person = function (fname_, lname_) {
        this.fname = fname_;
        this.lname = lname_;
        this.age = 0;

        this.setAge = function(age_) {
            this.age = age_;
        }
    }

    var person = new Person("Martti", "Lutteri");
    person.setAge(15);
    document.write(person.fname + " " + person.lname + " " + person.age);
    console.log(window);
}
