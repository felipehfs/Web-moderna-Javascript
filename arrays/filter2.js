// Implementação do filter para fins de teste
const produtos = [
    { nome: "Borracha", preco: 2.89, fragil: false},
    { nome: "Caderno", preco: 20.99, fragil: false},
    { nome: "Garrafa de cerveja", preco: 12.89, fragil: true},
    { nome: "Lapís", preco: 4.89, fragil: false}, 
    { nome: "Televisão", preco: 2790.00, fragil: true},
    { nome: "Home theater", preco: 3000.00, fragil: true}
]

Array.prototype.filter2 = function (callback) {
    filtrados = []
    for (let i=0; i < this.length; i++){
        if(callback(this[i])){
            filtrados.push(this[i])
        }
    }
    return filtrados
}

const produtosFrageis = produtos.filter2(p => p.fragil === true)
console.log(produtosFrageis);
