const read = require('readline-sync');
console.log('Digite um número:');
let num = read.question();
console.log("Você digitou: "+num);
if(isNaN(num)){
    console.log("Você digitou um número inválido");
} else {
    switch(num){ // escolha(num)
        case 1: // caso 1:
            console.log("Você digitou o número 1");
            break; // pare
        case 2: // caso 2:
            console.log("Você digitou o número 2");
            break; // pare
        default: // caso contrario:
            console.log("Você não digitou nem 1, nem 2.");
    }
}