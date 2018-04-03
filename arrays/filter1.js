const produtos = [
    { nome: "Borracha", preco: 2.89, fragil: false},
    { nome: "Caderno", preco: 20.99, fragil: false},
    { nome: "Garrafa de cerveja", preco: 12.89, fragil: true},
    { nome: "Lapís", preco: 4.89, fragil: false}, 
    { nome: "Televisão", preco: 2790.00, fragil: true},
    { nome: "Home theater", preco: 3000.00, fragil: true}
]

const maioresQueDoisMil = produto => produto.preco >= 2000
const produtosMaiores = produtos.filter(maioresQueDoisMil)
console.log(produtosMaiores)