// implementação da função
function calculateMC(weight, height){
    var imc = weight / (height * height);
    if(imc < 18.5){
        console.log("Abaixo do peso");
    }else if(imc >= 18.5 && imc < 25){
        console.log("Peso normal")
    /*}else if(imc >= 18.5 && imc < 25){
        console.log("Peso normal")
    }else if(imc >= 18.5 && imc < 25){
        console.log("Peso normal")
    }*/
}

// invocação da função
calculateIMC(40, 1.8);