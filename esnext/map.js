const tecnologias = new Map();
tecnologias.set("react", {framework: false})
tecnologias.set("angular", {framework: true})

console.log(tecnologias.react) // undefined
console.log(tecnologias.get("react").framework)

// Inicializando um Map com uma matriz de elementos
const chavesVariadas = new Map([
    [function() {     
    }, 'Função'],
    [{}, 'Objeto'],
    [123, 'Número']
])

chavesVariadas.forEach((vl, ch) => {
    console.log(ch, vl)
})

console.log(chavesVariadas.has(123))
chavesVariadas.delete(123)
console.log(chavesVariadas.size)