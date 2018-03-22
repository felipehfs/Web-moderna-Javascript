const peso1 = 1.0 // Valor inteiro
const peso2 = Number('2.1') // Valor de ponto flutuante

// Somente o número quebrado que não é considerado um integer pelo javascript
console.log(peso1, peso2)
console.log(Number.isInteger(peso1));
console.log(Number.isInteger(peso2));

const numeroTinhoso = 666
// Número convertido para binário e hexadecimal
console.log(numeroTinhoso.toString(2)) 
console.log(numeroTinhoso.toString(16))