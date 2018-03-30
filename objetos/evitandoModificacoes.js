// Object.preventExtensions - faz com que o objeto não receba novos
// atributos, mas permite que eles sejam removidos
const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'promoção'
})

console.log(Object.isExtensible(produto))

produto.nome = "Borracha"
produto.descricao = "Borracha escolar branca"
delete produto.tag 
console.log(produto)

// Object.seal - faz que que o objeto 
// não seja capaz de criar ou excluir
// atributos , sendo possível apenas modifica-los.
const pessoa = { nome: "Juliana", idade: 35}
Object.seal(pessoa)
console.log("Selado: ", Object.isSealed(pessoa));

pessoa.sobrenome = "Silva"
delete pessoa.nome 
pessoa.idade = 29 
console.log(pessoa);

// Object.freeze - Faz com o que os atributos não sejam
// modificados, sem possibilidade de extensão, criação ou extensão.
