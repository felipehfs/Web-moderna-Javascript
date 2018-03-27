// coleção dinâmica de pares chave/valor
const produto = new Object 
produto.nome = 'Cadeira'
produto['marca'] = 'Genérica'
produto.preco = 220

console.log(produto);
delete produto.preco
delete produto.marca 
console.log(produto);
