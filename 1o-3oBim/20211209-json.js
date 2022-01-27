const funcoes = require("./20211209-modulo.js");
let continua = true;
let op = 42;
let nome = "teste"
console.log("Tipo da continua: " + typeof(continua));
console.log("Tipo da op: " + typeof(op));
console.log("Tipo da nome: " + typeof(nome));
console.log("Tipo da funcoes: " + typeof (funcoes));
console.log(funcoes);
let objeto = {}
console.log("Tipo do objeto: " + typeof (objeto));
console.log(objeto);
objeto.nome = "teste";
console.log(objeto);
objeto.num = 12;
console.log(objeto);
objeto.num = 13;
console.log(objeto);
console.log("apenas o valor do atributo num: " + objeto.num);
