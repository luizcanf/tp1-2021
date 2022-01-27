procedimento();

/*var
let
(ou "nada")*/
let numero1 = '42'
numero1 = 42
//numero1 = procedimento(); //undefined
console.log("Isto escreve alguma coisa na tela: " + numero1);
console.log("este é um valor do tipo: " + typeof (numero1));

/*const*/
const readline = require("readline-sync");
console.log("Digite um número: ");
numero2 = readline.question();
console.log("\n Vc digitou: " + numero2);
// comando ilegal, pq eu declarei o readline como constante
//readline = 9;

console.log("isto que vc digitou é um valor do tipo: " + typeof (numero2));
numero3 = numero1 + numero2;
console.log("\nOperação + (concantenação): " + numero3);
numero2 = parseFloat(numero2);
numero3 = numero1 + numero2;
console.log("\nOperação + (soma): " + numero3);
console.log("(pq eu converti o valor pra número antes)");
// poderia usar question.questionInt() ou question.questionFloat() pra não precisar converter
procedimento();

function soma(a, b) {
    /*a = parseFloat(a);
    b = parseFloat(b);*/
    return parseFloat(a) + parseFloat(b);
}

function procedimento() {
    console.log("\nOlá, mundo!");
    if (false) {

    }
}

console.log("Vamos somar... digite 2 valores: ");
console.log(soma(readline.question(), readline.question()));