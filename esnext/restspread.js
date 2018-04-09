// operador ... rest(juntar)/ spread(espalhar)
// usar rest com parâmetro de função

// usar spread com objeto
const funcionario = {nome: "Maria", salario: 1432.00}
const clone = {ativo: true, ...funcionario}
console.log(clone)

//usar spread no array
const grupoA = ["João", "Camila", "Jordan"]
const grupoB = ["Pedro", "Karina", ...grupoA]
console.log(grupoB)