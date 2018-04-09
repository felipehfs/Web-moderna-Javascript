// tagged Template - processa o template dentro de uma função
function tag(partes, ...valores) {
    console.log(partes)
    console.log(valores)
    return "Outra string gerada"
}

const nome = "Vinícius"
const situacao = "Desempregado"

console.log(tag`${nome} está ${situacao}.`)