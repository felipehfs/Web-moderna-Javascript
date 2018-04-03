const alunos = [
    { nome: "Maria", nota: 9.43, bolsista: false},
    { nome: "Felipe", nota: 8.73, bolsista: true},
    { nome: "Julio", nota: 9.32, bolsista: false},
    { nome: "Carlos", nota: 4.23, bolsista: true}
]

const total = alunos.map(aluno => aluno.nota)
.reduce((acumulador, nota) => acumulador + nota);
console.log(total)