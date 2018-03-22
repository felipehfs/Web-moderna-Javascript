/* 
    Na atribuição por valor temos valores independentes em cada variável,
    na atribuição por referência temos várias variável apontando para o 
    mesmo endereço de memória. 
*/

let valor // Se a variável não é inicializada na memória ele retorna o undefined 
console.log(valor);

valor = null; // ausência de valor
console.log(valor);
// Quando for zerar uma referência é ideal utilizar nulo
console.log(valor.toString()); // Irá retornar um erro.

const produto = {
    nome: "Biscoito"
};

console.log(produto.preco);// Retorna undefined 
produto.preco = undefined; // Evite atribuir undefined
delete produto.preco; // Retirando um valor do object

produto.preco = null; // sem preço
console.log(!!produto.preco);
