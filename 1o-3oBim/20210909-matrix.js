let vetA = []
let vetB = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// matriz (matrix)
let matX = [vetA, vetB]
console.log(matX)
let matY = [[]]
matX[0][0] = 10
console.log(matX)
console.log(matY)
matY[0][0] = 1
matY[0][1] = 2
matY[0][2] = 3
matY.push([]) 
matY[1][0] = 42
matY[1][1] = 43
console.log(matY)
for (let i = 0; i < matY.length; i++) {
    const vetor = matY[i];
    for (let j = 0; j < vetor.length; j++) {
        const element = vetor[j];
        console.log(element)
    }
}