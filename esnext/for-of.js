// For-of é capaz de fazer a iteração por valor
for(let letra of "Cod3r"){
    console.log(letra)
}

let assuntos = ['Map', "Set", "Promises"]

for(let assunto in assuntos){
    console.log(assunto)
}

const conteudos = new Map([
    ["promises", {abordado: false}],
    ["maps", {abordado: true}],
    ["set", {abordado: true}]
])

for(let conteudo of conteudos){
    console.log(conteudo)
}
console.log("For-of")
for(let [chave, valor] of conteudos){
    console.log(chave, valor.abordado)
}
console.log("Chaves")
for(let chaves of conteudos.keys()){
    console.log(chaves)
}