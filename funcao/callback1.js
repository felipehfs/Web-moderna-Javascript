const notas = [4.5, 4.8, 5.0, 6.0, 8.9, 9.4]
const notasBaixas = notas.filter(nota => nota < 7)
const impressao = (nota) => console.log(nota)
notasBaixas.forEach(impressao)