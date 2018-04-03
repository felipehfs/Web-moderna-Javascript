// Map2 - 
Array.prototype.map2 = function (callback) {
    let valoresMapeados = []

    for (let i=0; i < this.length; i++){ 
        valoresMapeados.push(callback(this[i], i, this))
    }
    return valoresMapeados
}

let carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 13.90 }',
    '{ "nome": "Kit de Lapis", "preco": 41.22 }',
    '{ "nome": "Caneta", "preco": 7.50 }'
]

const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco

const valores = carrinho.map2(paraObjeto).map2(apenasPreco)
console.log(valores)