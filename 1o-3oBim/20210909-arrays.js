// vetor (array)
// Array é um tipo de variável que armazena vários valores em uma única variável.
// No Portugol:
// inteiro vetor[10]
let vetA = []
let vetB = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(vetB)
console.log(vetB[0])
console.log(vetA)
console.log(vetB.length) // tamanho do vetor
console.log(vetA.length)
vetA[0] = 1
vetA[1] = "2"
vetA[3] = true
vetA.push(false)
console.log(vetA.length)
console.log(vetA)
console.log(typeof vetA) // object
const leia = require('readline-sync')
// outros exemplos de object
/*console.log(typeof leia) // object
console.log(leia)*/
// percorrer um vetor e mostrar os valores
for (let index = 0; index < vetA.length; index++) {
    const element = vetA[index];
    console.log(element)
}
// percorrer um vetor e alterar os valores
for (let index = 0; index < vetA.length; index++) {
    vetA[index] = leia.question('Digite um novo valor para a '+(index+1)+'ª posição: ')
    if (!isNaN(vetA[index])) {
        vetA[index] = parseFloat(vetA[index])
    }
}
console.log(vetA)
// matriz (matrix)
let matriz = [vetA, vetB]
console.log(matriz)
