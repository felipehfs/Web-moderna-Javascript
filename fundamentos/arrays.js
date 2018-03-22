// Em Java o array é fixo, ele sempre terá tamanho fixo
// O array em Javascript é heterogênio, ele cresce ou diminui não tem tamaho fixo
const valores = [7.7, 8.9, 6.3, 9.2];
console.log(valores[0], valores[3]);

// Se o índice não existir, não dará erro será retornado undefined
console.log(valores[4]);
valores[4] = 8.3; 
console.log(valores.length);
console.log(typeof valores);
