Array.prototype.reduce2 = function(callback, valorInicial){
    let indexinicial = valorInicial? 0: 1
    acumulador = this[0] || valorInicial
    for(let i=indexinicial; i < this.length; i++){
        acumulador = callback(acumulador, this[i], i, this)
    }
    return acumulador
}
const alunos = [
    { nome: "Maria", nota: 9.43, bolsista: false},
    { nome: "Felipe", nota: 8.73, bolsista: true},
    { nome: "Julio", nota: 9.32, bolsista: false},
    { nome: "Carlos", nota: 4.23, bolsista: true}
]

const total = alunos.map(aluno => aluno.nota).reduce2((acum, item) => acum + item, 0)
console.log(total)
