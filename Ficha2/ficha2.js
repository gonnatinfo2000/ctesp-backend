console.log('\n');

// implementação da função
function calculateIMC(weight, height){
    var imc = weight / (height * height);
    if(imc < 18.5){
        console.log("Abaixo do peso");
    }else if(imc >= 18.5 && imc < 25){
        console.log("Peso normal");
    }else if(imc >= 25 && imc <= 30){
        console.log("Acima oo peso")
    }else if(imc > 30){
        console.log("Obeso")
    }
}

// invocação da função
calculateIMC(100, 1.8);

console.log('\n')

//exercicio 2

function reverserStr(str){
    var splitted = str.split(" ");
    var inverted = "";
    for (let i = 0; i < splitted.length; i++) {
        var item = splitted[i];
    }

    splitted.forEach(item => {
        for (let i = item.length - 1; i >= 0; i--) {
            inverted += item[i];
        }
        inverted +=" ";
    });
    console.log('Frase ao contrário: \n' + inverted);
}

reverserStr("Hoje é Domingo");

console.log('\n')

// exercicio 3

function countVogais(str){
    // SHIFT + ALT + F
    var count = 0;
    var vogais = ['a','e','i','o','u'];
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < vogais.length; j++) {
            if(str[i] == vogais[j]){
                count++;
            }
        }
    }
    return count;
};

var count = countVogais("Hello");
console.log("Vogais na frase:" + count);

console.log('\n')

// exercicio 4
function countLetras(str){
    var lowstr = str.toLowerCase();
    var countA = 0; 
    var countB = 0;
    var countC = 0;
    var countD = 0; 
    var countE = 0;
    var countF = 0;
    var countG = 0; 
    var countH = 0;
    var countI = 0;
    var countJ = 0; 
    var countK = 0;
    var countL = 0;
    var countM = 0; 
    var countN = 0;
    var countO = 0;
    var countP = 0; 
    var countQ = 0;
    var countR = 0;
    var countS = 0;
    var countT = 0; 
    var countU = 0;
    var countV = 0;
    var countW = 0; 
    var countX = 0;
    var countY = 0;
    var countZ = 0;
    var letras = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    for (let i = 0; i < lowstr.length; i++) {
            if(lowstr[i] == letras[0]){
                countA++;
            }else if(lowstr[i] == letras[1]){
                countB++;
            }else if(lowstr[i] == letras[2]){
                countC++;
            }else if(lowstr[i] == letras[3]){
                countD++;
            }else if(lowstr[i] == letras[4]){
                countE++;
            }else if(lowstr[i] == letras[5]){
                countF++;
            }else if(lowstr[i] == letras[6]){
                countG++;
            }else if(lowstr[i] == letras[7]){
                countH++;
            }else if(lowstr[i] == letras[8]){
                countI++;
            }else if(lowstr[i] == letras[9]){
                countJ++;
            }else if(lowstr[i] == letras[10]){
                countK++;
            }else if(lowstr[i] == letras[11]){
                countL++;
            }else if(lowstr[i] == letras[12]){
                countM++;
            }else if(lowstr[i] == letras[13]){
                countN++;
            }else if(lowstr[i] == letras[14]){
                countO++;
            }else if(lowstr[i] == letras[15]){
                countP++;
            }else if(lowstr[i] == letras[16]){
                countQ++;
            }else if(lowstr[i] == letras[17]){
                countR++;
            }else if(lowstr[i] == letras[18]){
                countS++;
            }else if(lowstr[i] == letras[19]){
                countT++;
            }else if(lowstr[i] == letras[20]){
                countU++;
            }else if(lowstr[i] == letras[21]){
                countV++;
            }else if(lowstr[i] == letras[22]){
                countW++;
            }else if(lowstr[i] == letras[23]){
                countX++;
            }else if(lowstr[i] == letras[24]){
                countY++;
            }else if(lowstr[i] == letras[25]){
                countZ++;
            }
        }           

    console.log("Letras na frase:")
    console.log('A:' + countA + ' B:' + countB + ' C:' + countC + ' D:' + countD + ' E:' + countE + '\nF:' + countF + ' G:' + countG + ' H:' + countH + ' I:' + countI + ' J:' + countJ + '\nK:' + countK + ' L:' + countL + ' M:' + countM + ' N:' + countN + ' O:' + countO + '\nP:' + countP + ' Q:' + countQ + ' R:' + countR + ' S:' + countS + ' T:' + countT + '\nU:' + countU + ' V:' + countV + ' W:' + countW + ' X:' + countX + ' Y:' + countY + ' Z:' + countZ);
}

countLetras("Ace A");

console.log('\n')

// exercicio 5

function calculateWorkTime(entry, exit){
    // converte a data para milisegundos desde 1970
    var entryT = entry.getTime();
    var exitT = exit.getTime();

    var miliseconds = (exitT - entry) / 1000;
    var sec = (miliseconds) % 60;
    var min = (miliseconds / 60) % 60;
    var hours = (miliseconds / 3600) % 24;

    // concatenar
    console.log("Total de horas: \nH:" + hours + " M:" + min + " S:" + sec);
}

var entry = new Date("October 13, 2019 08:00:00");
var exit = new Date("October 13, 2019 18:00:00");
calculateWorkTime(entry, exit);

console.log('\n');

// exercicio 6

function drawRectangle(width, height){
    var ast = '*';
    var line = "";
    for (let i = 0; i < width; i++) {
        line += ast;
    }

    for (let j = 0; j < height; j++) {
        console.log(line);
    }
}

console.log("Desenha Retangulos:")
drawRectangle(10, 20);

console.log('\n')

// exercicio 7

function drawTriangle(height){
    var ast = '*';
    var line = "";
    
    for (let i = 0; i <= height; i++) {
        console.log(line);
        line += ast;
    }
}
Sconsole.log("Desenha Triangulos:");
drawTriangle(10);

console.log('\n')

// exercicio 8

function drawBoxes(length){
    var ast = '*';
    var line = "";
    var space = " ";
    var linespace = "";
    var linebox = "";
    for (let i = 0; i <= length; i++) {    
            line += ast;
    }

    for (let j = 0; j <= length - 2; j++) {   
            linespace += space; 
    }

    for (let k = 0; k <= length; k++) {
        if(k == 0){
            console.log(line); 
        }else if(k > 0 && k < length){
            linebox = ast + linespace + ast
            console.log(linebox);      
        }else if(k == length){
            console.log(line);
        }
    }
}

console.log("Desenha Caixas:")
drawBoxes(10);

console.log('\n')

// exercicio 9

// Declaração e inicialização de objetos
 var std1 = {name: "Test1", number:1, grade:12};
 var std2 = {name: "Test2", number:2, grade:2};
 var std3 = {name: "Test3", number:3, grade:19};
 var std4 = {name: "Test4", number:4, grade:10};

 // Declaração e inicialização de um array vazio
 var students = [];

 // Adicionar um objeto ao array
students.push(std1);
students.push(std2);
students.push(std3);
students.push(std4);
console.log('Lista de alunos:');
console.log(students);
console.log('\n')

function listGrades(array){
    console.log('Lista de notas:');
    array.forEach(item => {
        console.log(item.grade);
    });
}

listGrades(students);

function showBestGrade(array){
    var grade = array[0].grade;
    array.forEach(element => {
        if(element.grade > grade){
            grade = element.grade;
        }
    });
    return grade;
}
 
var bestGrade = showBestGrade(students);
console.log("Melhor nota:" + bestGrade);

function showWorstGrade(array){
    var grade = array[0].grade;
    array.forEach(element => {
        if(element.grade < grade){
            grade = element.grade;
        }
    });
    return grade;
}
 
var worstGrade = showWorstGrade(students);
console.log("Pior nota:" + worstGrade)

function showAverageGrade(array){
    var average = 0;
    var allGrades = 0;

    array.forEach(element => {
            allGrades += element.grade;
    });
    average = allGrades / array.length;

    var lowestDifference = Math.abs(average - students[0].grade);
    var studentNumber = 0;
    var studentGrade = 0;

    array.forEach(element => {
            if(Math.abs(average - element.grade) < lowestDifference) {
                studentNumber = element.number;
                studentGrade = element.grade;
            }
    });

    console.log("Aluno próximo da media:" + studentNumber + " Nota:" + studentGrade);
}
 
showAverageGrade(students);

function showNumberWorstGrades(array){
    var count = 0;
    array.forEach(element => {
        if(element.grade < 9.5){
            count++;
        }
    });
    return count;
}
 
var numberWorstGrades = showNumberWorstGrades(students);
console.log("Número de notas negativas:" + numberWorstGrades)

function showNumberBestGrades(array){
    var count = 0;
    array.forEach(element => {
        if(element.grade >= 10){
            count++;
        }
    });
    return count;
}
 
function showNumberBestGrades(array){
    var count = 0;
    array.forEach(element => {
        if(element.grade >= 9.5){
            count++;
        }
    });
    return count;
}
 
var numberBestGrades = showNumberBestGrades(students);
console.log("Número de notas positivas:" + numberBestGrades);

console.log('\n')