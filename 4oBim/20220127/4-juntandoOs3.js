var compras = [
    { id: 1, descricao: "Smartphone", categoria: "Eletrônico", preco: 1500, quantidade: 2 },
    { id: 2, descricao: "Notebook", categoria: "Eletrônico", preco: 10000, quantidade: 3 },
    { id: 3, descricao: "Geladeira", categoria: "Eletrodoméstico", preco: 3000, quantidade: 2 },
    { id: 4, descricao: "Liquidificador", categoria: "Eletrodoméstico", preco: 40, quantidade: 1 },
    { id: 5, descricao: "Fogão", categoria: "Eletrodoméstico", preco: 500, quantidade: 1 },
]

// Sugestão original do Copilot (com o reduce eliminando a necessidade do map):
//let subtotalEletronicos = compras.filter(element => element.categoria == "Eletrônico").reduce((acc, element) => acc + (element.preco * element.quantidade), 0);

// Quebrando o código em partes:
let eletronicosNaCompra = compras.filter(produto => produto.categoria == "Eletrônico");
console.table(eletronicosNaCompra);
let gastosComEletronicos = eletronicosNaCompra.map(produto => produto.preco * produto.quantidade)
console.table(gastosComEletronicos);
let subtotalEletronicos = gastosComEletronicos.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(subtotalEletronicos);