const leia = require('readline-sync')
console.log('Digite um valor maior do que zero: ')
let numero = leia.questionFloat()
// if (ehPositivo(valor)) {
//     console.log('Valor válido')
// } else {
//     console.log('Valor inválido')
// }
//while (numero%1!=0) {
while (!ehInteiroEPositivo(numero)) {
    console.log('Valor inválido. Digite novamente: ')
    numero = leia.questionFloat()
}

function ehPositivo(valor) {
    if (valor < 0) {
        return false
    } else {
        return true
    }
}

function ehInteiroEPositivo(valor) {
    if (valor < 0) {
        return false
    } else {
        //return Number.isInteger(valor)
        return valor%1==0
    }
}

