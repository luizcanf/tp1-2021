function olamundo() {
    console.log("Olá, Mundo!\n")
}

olamundo()
olamundo()

/*var variavelNova
console.log(variavelNova)*/
//var msg
function mostrarMsg(msg) {
    console.log(msg)
}

mostrarMsg("Qualquer mensagem?")
mostrarMsg("Uau... qq msg mesmo!")

const read = require('readline-sync');
let msg = read.question("me escreva algo: ");

mostrarMsg(msg)

function mostrarSoma(x, y) {
    console.log("x + y... Soma ou concatenação?")
    console.log(x+y)
}

mostrarSoma(1, "2")
mostrarSoma(1, 2)
mostrarSoma(179, 242)

// no Portugol:
// funcao inteiro soma(inteiro x, inteiro y) { retorna x+y }
function soma(x, y) {
    x = parseInt(x)
    y = parseInt(y)
    return x+y
}

valor = soma('1', 2)
console.log(valor)
console.log(soma(valor, valor*2))

function oPrimeiroEhMaior(x, y) {
    if (x > y) {
        return true
    } else {
        return false
    }
}

valor = 23
while(oPrimeiroEhMaior(valor, 2)) {
    valor = valor/2
    console.log(valor)
}