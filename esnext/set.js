// Estrutura de dados não indexada 
// que não aceita repetição
const times = new Set()
times.add("Vasco")
times.add("São Paulo").add("Cruzeiro").add("Palmeiras")
times.add("Flamengo")
times.add("Vasco")

console.log(times)
console.log(times.size)
console.log(times.has("Cruzeiro"))

const nomes = ["Raquel", "Julia", "Mariana", "Mariana", "Thaís"]
const garotas = new Set(nomes)
console.log(garotas)