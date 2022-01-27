const vetor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let somatorio = vetor.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(somatorio);

let multiplicacao = vetor.reduce((accumulator, currentValue) => accumulator * currentValue, 1);
console.log(multiplicacao);