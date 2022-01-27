const read = require('readline-sync');
console.log('Digite um número:');
let num = read.question(); // leia(num) - do Portugol
console.log("Você digitou: "+num);
// como verificar se num é um número?
if(isNaN(num)){ // NaN significa "Not a Number" - não é um número?
    console.log("Você digitou um número inválido");
} else if (num > 10) { // se (num > 10)
    console.log('O número é maior que 10');
} else if (num < 10) { // senao se (num < 10)
    console.log('O número é menor que 10');
} else { // senao
    console.log('O número é igual a 10');
}

//num = parseInt(num)
/*console.log(typeof(num));
if(typeof(num) != 'number'){ // se (isInteger(num))
    console.log('Número inválido.');
} else {
    console.log('Converti pra inteiro: '+num);
}*/

// como verificar se num é um número inteiro?
// if(num % 1 === 0){ // se (num % 1 === 0)
