// A tagged template - é capaz de processar e alterar 
// a string final
// A função real formata a string para o formato de moeda brasileiro.
function real(partes, ...valores){
    const resultado = []
    valores.forEach((valor, indice) =>{
        valor = isNaN(valor)? valor: `R$${valor.toFixed(2).replace('.', ',')}`
        resultado.push(partes[indice], valor)
    })
    resultado.push(partes[partes.length - 1])
    return resultado.join('')
}

const valorTotal = 344.02
console.log(real`O valor total é ${valorTotal}.`)