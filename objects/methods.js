let person = {
    name: 'Emery',
    sayHi: function(){
        console.log(`Hello, my name is ${this.name}`);
    },
    saySomething(){
        console.log("I am saying something now");
    }
}

person.sayHi();
person.saySomething();

let admin = person;
person = null;

console.log(person);
console.log(admin);

admin.saySomething();

//* This is not bound
let person1 = {
    name: "Mandalorian"
}
let person2 = {
    name: "Dewitt"
}

function sayNo(){
    console.log(`${this.name} said no`);
}

person1.f = sayNo;
person2.f = sayNo;

person1.f();
person2.f();

//

let calculus = {
    read(){
        this.a = +prompt("a",0);
        this.b = +prompt("b",0);
    },
    sum(){
        return console.log(this.a + this.b);
    },
    mul(){
        return console.log(this.a * this.b);
    }
}

calculus.read();
calculus.sum();
calculus.mul();

console.log(calculus);