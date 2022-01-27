var read = require('readline-sync')

console.log('Digite três numeros por favor.\n\n');

var x = read.question('Digite aqui o primeiro ')
var y = read.question('Aqui o segundo ')
var z = read.question('E aqui o terceiro ')


if( isNaN(x) || isNaN (y) || isNaN (z)) {
    console.log('Digite números válidos, por favor.\n\n');
    x = read.question('Digite aqui o primeiro ')
    y = read.question('Aqui o segundo ')
    z = read.question('E aqui o terceiro ')
}

x=parseInt(x)
y=parseInt(y)
z=parseInt(z)

if (x > y && x>z){
    console.log('\n\n\nO primeiro número foi: ', x);
    console.log('\nO segundo número foi: ', y);
    console.log('\nO terceiro número foi: ', z);
    console.log('\nO maior número foi: ',x);
} else if (y > x && y>z){
    console.log('\n\n\nO primeiro número foi: ', x);
    console.log('\nO segundo número foi: ', y);
    console.log('\nO terceiro número foi: ', z);
    console.log('\nO maior número foi: ',y);
} else if (z > x && z>y){
    console.log('\n\n\nO primeiro número foi: ', x);
    console.log('\nO segundo número foi: ', y);
    console.log('\nO terceiro número foi: ', z);
    console.log('\nO maior número foi: ',z);
}