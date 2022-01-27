// Laço de repetição FOR (para do Portugol)

// loop infinito com for
/*
for(;;) { // No Portugol: para (;;) {}
// for(;true;) { // forma alternativa de criar um loop infinito com for
    // loop infinito
    console.log("Loop infinito")
    console.log("É infinito, mesmo?\nSim.")
}
*/
const read = require('readline-sync')
for(let continuar = true; continuar;) {
// No Portugol:
// para (logico continuar = verdadeiro;continuar;) {}
    console.log("Vamos continuar (S/N)?")
    continuar = read.question()
    if (continuar == 'S' || continuar == 's') 
        continuar = true
    else
        continuar = false
    console.log("valor:"+continuar)
    console.log(" e tipo do dado em continuar: "+typeof continuar)
}

console.log("Agora vou contar de 0 a 10")
let x = 0
for(;x <= 10;x++) {
// No Portugol:
// para (inteiro x = 0; x <= 10; x++) {}
    console.log(x)
}
console.log("Terminei o for...")
console.log(x)

console.log("Agora uma contagem regressiva")
for(let x = 10;x >= 0;x--) {
// No Portugol:
// para (inteiro x = 10;x >= 0;x--) {}
    console.log(x)
}
console.log("DECOLAR!!!")