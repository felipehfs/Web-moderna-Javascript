// Arrow function com o retorno implícito
const soma = (a, b) => a + b

// O this da arrow function é atrelada ao contexto que foi chamada
// sendo incapaz de se alterar com o this.
const contexto = () => {
    return this === exports
}

console.log(contexto())
console.log(contexto.bind(this)())

// Destructuring
let [a, , b] = [1, 2, 3]
console.log(a, b)

let {nome, idade} = {nome: "Ana", idade: 18}
console.log(nome, idade)

// Destructuring com variáveis modificadas
const {carro, ano: m } = {carro: "Fiat", ano: 2002}
console.log(carro, m)


// Rest operador
function media(...notas){
    const total = notas.reduce((acum, atual) => acum + atual)
    return total
}

console.log(media(1, 4, 3, 4))

// Valores padrões em funcões
function mult(a=0, b=0){
    return a * b
}
console.log(mult(8, 7))