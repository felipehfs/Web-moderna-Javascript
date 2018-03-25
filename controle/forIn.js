// O ForIn do Javascript retorna o índice do array
// em outras linguagens ela funciona como um for each
// mas aqui é diferente hehehehehehehehe. 
// OBS: Não use isso daqui!
let notas = [10.0, 9.9, 7.8, 9.7];

for(let nota in notas){
    console.log(notas[nota]);
}

let pessoa = {nome: 'Claudia Gomes', idade: 23};

for (let key in pessoa){
    console.log(key, pessoa[key]);
}