let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Mostrando o array
//console.log(numeros);

// Mostrando os elementos do array
for (let i = 0; i < numeros.length; i++) {
    let elemento = numeros[i];
    console.log(elemento);
}


// Mostrando os elementos do array, com o forEach
numeros.forEach(function (elemento) {
    console.log(elemento);
});