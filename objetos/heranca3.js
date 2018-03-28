const pai = {nome: "Pedro", corDeCabelo: "Preto"}
const filha1 = Object.create(pai, {
    nome: {
        writable: false,
        enumerable: true,
        value: "Cassia"
    },
})

const filha2 = Object.create(pai)
filha2.nome = "Josefa"
console.log(`Filha2: tem nome ${filha2.nome} e cor de cabelo ${filha2.corDeCabelo}`);

console.log(Object.keys(filha1));
console.log(Object.keys(filha2));

for(let key in filha2){
    filha2.hasOwnProperty(key)?console.log(key): console.log(`Herança: ${key}`)
}