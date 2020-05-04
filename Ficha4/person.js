// FICHA DE TRABALHO Nº4 | Back-End

// exercicio 3

function Person(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
}

// adicionar função ao prototype
Person.prototype.greet = function() {
    console.log("Hello " + this.firstName + " " + this.lastName + " " + this.age);
}

// adicionar atributo ao prototype
Person.prototype.age = 0;

var john = new Person("John", "Doe");
john.age = 22;
var mary = new Person("Maria", "Paula");
mary.age = 23;

console.log(john.age);
console.log(mary.age);

john.greet();
mary.greet();

console.log(john.__proto__);
console.log(mary.__proto__);
console.log(john.__proto__ == mary.__proto__);
console.log(john.firstName == mary.firstName);