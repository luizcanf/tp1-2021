// inclua biblioteca Matematica --> Math
// inclua biblioteca == require(nome da biblioteca)
//  --> Math == declaração de constante (q faremos à esquerda do require)
// const Math = require('mathjs');
const leiaDoJS = require('readline-sync');
//console.
//leiaDoJS.
var numero = leiaDoJS.question('Digite um número: ');
console.log("Vc digitou: "+numero);

console.log('Digite outro número: ');
var numero2 = leiaDoJS.question();
console.log("o outro numero q vc digitou: "+numero2);

var mult = numero * numero2;
console.log("a multiplicação dos dois numeros é: "+mult);

var soma = numero + numero2;
console.log("a soma dos dois numeros é: "+soma);

// https://pt.stackoverflow.com/q/202681/101
// parseInt() converte string para inteiro
// parseFloat() converte string para float
soma = parseInt(numero) + parseFloat(numero2);
//numero = parseFloat(numero);
//numero2 = parseFloat(numero2);
//soma = numero + numero2;
console.log("Desculpa, a soma dos dois numeros é: "+soma);
