const read = require('readline-sync');
console.log('Digite um número:');
let num1 = read.question();
console.log('Digite outro número:');
let num2 = read.question();
num1 = Number(num1); // converte para número
num2 = Number(num2); // eu poderia ter usado parseInt(num2) ou parseFloat(num2)
if (num1 > num2) {
    console.log(num1 + ' é maior que ' + num2);
    console.log('O primeiro número ' + (num1 > num2 ? 'é maior' : 'não é maior')   + ' que o segundo número');
} else if (num1 < num2) {
    console.log(num2 + ' é maior que ' + num1);
    console.log('O primeiro número ' + (num1 > num2 ? 'é maior' : 'não é maior')   + ' que o segundo número');
} else {
    console.log('Os dois números digitados são iguais');
}


