// exemplo filter 1
var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function buscarNumerosPares (value) {
if (value % 2 == 0)
return value;
}
var numerosPares = numeros.filter(buscarNumerosPares);
console.log(numerosPares);

// exemplo filter 1 - ARROW FUNCTION
var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var retorno = numeros.filter(pares => (pares %2)== 0);
console.log(retorno);

// exemplo filter 2
var estados = ["São Paulo", "Minas Gerais", "Rio de Janeiro", "Rio Grande do Norte", "Santa Catarina", "Acre"];
function retornaEstado (value){
if (value.charAt(0) == "S")
return value;
}
var resultado = estados.filter(retornaEstado);
console.log(resultado);

// exemplo filter 2 - ARROW FUNCTION
var resultado = estados.filter( estadosComS => (estadosComS.charAt(0) == "S"));
console.log(resultado);

// exemplo filter 3
var produtos = [
{id: 1, descricao: "Smartphone", categoria: "Eletrônico"},
{id: 2, descricao: "Notebook", categoria: "Eletrônico"},
{id: 3, descricao: "Geladeira", categoria: "Eletrodoméstico"},
{id: 4, descricao: "Liquidificador", categoria: "Eletrodoméstico"},
{id: 5, descricao: "Fogão", categoria: "Eletrodoméstico"}
]
function retornaEletronico (value){
if (value.categoria == "Eletrônico")
return value;
}
var produtosEletronico = produtos.filter(retornaEletronico);
produtosEletronico.forEach(produtoEletro => {
console.log(produtoEletro);
})

// exemplo filter 3 - ARROW FUNCTION
var produtosEletrodomestico = produtos.filter(produto => produto.categoria == "Eletrodoméstico");
produtosEletrodomestico.forEach(produto => {
console.log(produto);
});

// exemplo filter 4
var produtos = [
{id: 1, descricao: "Smartphone", categoria: "Eletrônico"},
{id: 2, descricao: "Notebook", categoria: "Eletrônico"},
{id: 3, descricao: "Geladeira", categoria: "Eletrodoméstico"},
{},
{id: null },
{id: NaN},
{id: 'undefined' },
{id: 4, descricao: "Liquidificador", categoria: "Eletrodoméstico"},
{id: 5, descricao: "Fogão", categoria: "Eletrodoméstico"}
]
function filtrarPorDescricao(value) {
if ('id' in value && typeof(value.id) === 'number' && !isNaN(value.id)) {
return value;
}
}
var produtosValidos = produtos.filter(filtrarPorDescricao);
produtosValidos.forEach(produto => {
console.log(produto);
})

/* Exemplos extraídos do site: https://blog.betrybe.com/javascript/javascript-filter/ */