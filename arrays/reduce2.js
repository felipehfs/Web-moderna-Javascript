const alunos = [
    { nome: "Maria", nota: 9.43, bolsista: false},
    { nome: "Felipe", nota: 8.73, bolsista: true},
    { nome: "Julio", nota: 9.32, bolsista: false},
    { nome: "Carlos", nota: 4.23, bolsista: true}
]

// Desafio 1: Todos são bolsistas?
const todosBolsistas = alunos.map(a => a.bolsista)
.reduce((acum, bolsista)=> acum && bolsista)

const algumBolsista = alunos.map(a => a.bolsista)
.reduce((acum, bolsista) => acum || bolsista)
console.log(todosBolsistas, algumBolsista)