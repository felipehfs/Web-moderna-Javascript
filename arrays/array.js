// No Javascript não existe um tipo primitivo para lidar com os arrays.
// Logo o array é um objeto com uma estrutura indexável
console.log(typeof Array, typeof new Array, typeof []);

let aprovados = new Array("Bia", "Carlos", "Josefa");
console.log(aprovados);

// Parâmetros fora da capacidade do array retorna undefined
console.log(aprovados[3]);

aprovados[3] = "Felipe";
aprovados.push("Paulo");
console.log(aprovados.length);
aprovados.sort();
console.log(aprovados);

// Coloca o undefined no 2º índice
delete aprovados[1];
console.log(aprovados);

// O splice é usado tanto para a exclusão quanto exclusão do elemento em um índice
// graças ao valor inserido no segundo parâmentro
aprovados = ["Marcos", "José", "Bia"];
aprovados.splice(0, 1, "Felipe", "Marcelo");
console.log(aprovados);
