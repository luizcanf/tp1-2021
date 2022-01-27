const leia = require("readline-sync");

function soma(a, b) {
    return a + b;
}

let continua = true;
while (continua) {
    console.log("Calculadora");
    console.log("Digite a operação que você quer realizar:");
    console.log("1- Soma\n2- Subtração\n3- Multiplicação\n4- Divisão");
    let op = leia.question();
    op = parseInt(op);
    console.log("Digite um número: ");
    let x = leia.question();
    x = parseFloat(x);
    //console.log("Você digitou "+x);
    console.log("Digite outro número: ");
    let y = leia.question();
    y = parseFloat(y);
    switch (op) {
        case 1: console.log("Resultado da Soma: " + soma(x, y));
            break;
        case 2: console.log("Resultado da Subtração: " + (x - y));
            break;
        case 3: console.log("Resultado da Multiplição: " + (x * y));
            break;
        case 4: console.log("Resultado da Divisão: " + (x / y));
            break;
        default: console.log("Operação inválida!");
    }

    console.log("\nDeseja continuar? (S/N) ");
    continua = leia.question();
    MARIOLAEHBOM // Uppercase (Maiúsculo)
    mariolaehbom // Lowercase (Minúsculo)
    MariolaEhBom // Camelcase (CamelCase)
    continua = continua.toLowerCase();
    if (continua.charAt(0) === 's') {
        continua = true;
    } else {
        continua = false;
    }
}