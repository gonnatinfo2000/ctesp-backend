/*var x = 0;
var d = 0.5;
var str = "Hello";

var x = 0.4;
// Exercicio 5

function calculateFinalGrade(praticalGrade, theoreticalGrade) {
   // d++;
   // let local = 0; local = 0;
    var finalGrade = (praticalGrade + theoreticalGrade) / 2;
    return finalGrade;
}

// Estas variáveis representam as entradas da função.
var np = 10;
var nt = 10;

var media = (np + nt) / 2;

var finalG = calculateFinalGrade(np, nt);
console.log(finalG); */

// Exercicio 6

console.log("TESTE");

// alinea 6
function monthByName(monthNumber){

    switch (monthNumber) {
        case 1:
            console.log("January");
            break;
        case 2:
            console.log("February");
            break;
        case 3:
            console.log("March");
            break;
        case 4:
            console.log("April");
            break;
        case 5:
            console.log("May");
            break;
        case 6:
            console.log("June");
            break;
        case 7:
            console.log("July");
            break;
        case 8:
            console.log("August");
            break;
        case 9:
            console.log("September");
            break;
        case 10:
            console.log("October");
            break;
        case 11:
            console.log("November");
            break;
        case 12:
            console.log("December");
            break;
        default:
            console.log("N/A");
            break;
    }
}

monthByName(3);
monthByName(1);
monthByName(2);
monthByName(0);
monthByName(0);


function calculator(operand1, operand2, operator){
    if(operator == '+'){
        console.log(operand1 + operand2);
    }else if(operator == '-'){
        console.log(operand1 - operand2);
        }
}

calculator(2,2,'+');

//alinea 7
function multiplesOfFive(value){
    for(let i = 1; i <= value; i++){
        if(i%5 == 0){
            console.log(i);
        }
    }
}

multiplesOfFive(20);

//alinea 8

function sumOf(value){
    var soma = 0;
    for(let i = 1; i <= value; i++){
        soma = soma + i;
    }        
    console.log("Soma:" + soma);
}

sumOf(3);

//alinea 9

function calculateFact(value){
    //3 * 2 * 1
    var fact = 1;
    for(let i = value; i >= 1; i--){
        fact = fact * i;     
    } 
    //console.log(fact);   
    return fact; 
}

var f = calculateFact(3);
console.log("Fatorial:" + f)

// variavel 10

// Criação de arrays
var array = [1, 1, 6, 1, 1];

// zero-based index

function calculateAverage(array){
    var sum = 0;
    var average = 0;

    for(let i = 0; i < array.length; i++) {
        sum = sum + array[i];
    }
    average = sum / array.length;
    return average;
}

var avg = calculateAverage(array);

function getMax(array){
    var max = array[0];
    for(let i = 1; i < array.length; i++) {
        if(array[i] > max) {
            max = array[i];
        }
    }
    return max;
}

var max = getMax(array);
console.log("Max:" + max);

function getMin(array){
    var min = array[0];
    for(let i = 1; i < array.length; i++) {
        if(array[i] < min) {
            min = array[i];
        }
    }
    return min;
}

var min = getMin(array);
console.log("Min:" + min);

/*
// Indexação do valor
console.log(array[0]);

// Alteração
array[0] = 500;
console.log(array[2]); */