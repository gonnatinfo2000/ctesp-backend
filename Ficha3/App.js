// exercicio 3

function started(){
    console.log("Started Download");
}

function update(percentage){
    console.log(percentage + "% of Download");
} 

function completed(){
    console.log("Completed Download");  
}

function performDownload(startedFn, updateFn, completedFn){
    startedFn();
    for (let i = 0; i <= 100; i++) {
        updateFn(i);
    }
    completedFn();
}

performDownload(started, update, completed);

// exercicio 4


var arrayUtils = require("./ArrayUtils");

var array = [1,2,3,4];

// alinea a
var empty = arrayUtils.isEmpty(array);
console.log("O array está vazio? " + empty);

// alinea b
var max = arrayUtils.max(array);
console.log("Máximo do array:" + max);

// alinea c
var min = arrayUtils.min(array);
console.log("Minimo do array:" + min);

// alinea d
var average = arrayUtils.average(array);
console.log("Média do array:" + average);

// alinea e
var value = 7;
var index = arrayUtils.indexOf(array, value);
console.log("Index do número: " + value + " is :" + index);

// alinea f
var subArray = arrayUtils.subArray(array, 0, 2);
console.log("Sub Array:" + subArray);

// alinea g
var isSameLength = arrayUtils.isSameLength(array, []);
console.log("São os dois arrays iguais? " + isSameLength);

// alinea h
var inverted = arrayUtils.reverse(array);
console.log("Array inverted:" + inverted);

// alinea i
var swap = arrayUtils.swap(array, 0, 1);
console.log("Array trocado:" + swap);

// alinea j
var value = 4;
var contains = arrayUtils.contains(array, value);
console.log("O array contém o valor " + value + "? " + contains);

// alinea k
var concatenate = arrayUtils.concatenate(array,[4,5,6]);
console.log("Array concatenado: " + concatenate);