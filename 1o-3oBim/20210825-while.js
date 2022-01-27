// Laço de repetição WHILE (Enquanto do Portugol)

// loop infinito com while
// Fonte: http://www.javascripter.net/faq/loopinfinito.htm
/*
while (true) { // No Portugol: enquanto (verdadeiro) {}
    // loop infinito
    console.log("Loop infinito")
    console.log("É infinito, mesmo?\nSim.")
}
*/
const read = require('readline-sync')
let continuar = true
console.log("tipo do dado em continuar: "+typeof continuar)
while(continuar) { // No Portugol: enquanto (continuar) {}
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
while(x <= 10) { // No Portugol: enquanto (x <= 10) {}
    console.log(x)
    x++
}