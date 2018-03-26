// As funções fábrica tem como intuito a automação de um objeto
// com determinados atributos.

function criarProduto(nome, preco, desconto = 0.01) {
    let calculaDesconto = function() {
        return this.preco * this.desconto
    }
    
    let valorTotal = function(){
        return this.preco - this.calculaDesconto()
    }

    return {
        nome,
        preco,
        desconto,
        calculaDesconto,
        valorTotal
    }
}

let blusa = criarProduto("Blusa", 145.00, 0.10)
console.log(blusa.valorTotal());
