// FICHA DE TRABALHO Nº4 | Back-End

// exercicio 6

var config = require("./config");

// require do módulo emitter
var emitter = require("./emitter");

// criação da instancia da classe emitter
var emtr = new emitter();

// registar o listener para o evento LOGIN
emtr.on(config.LOGIN, function(){
    console.log("welcome user");
});

// executar o listener para o evento LOGIN
emtr.emit(config.LOGIN);

// exercicio 2

var person  = {
    name: "David",
    age: 22,
    gender: "M"
};

person.profession = "Coder";

console.log("Name:" + person.name);
var string_json = JSON.stringify(person);
console.log(string_json);

var str = JSON.parse('{"name":"David","age":22,"gender":"M"}');

console.log("Name:" + str.name);
console.log("Age:" + str.age);
console.log("Gender:" + str.gender);

str.age = 222;

console.log("Age:" + str.age);
