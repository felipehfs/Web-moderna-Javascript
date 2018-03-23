let num1 = 1;
let num2 = 2;
// Pré-incremento tem uma relevância maior que o pós-incremento
num1++;
console.log(num1);
--num1;
console.log(num1);
// Fuja do incremento nas expressões, mantenha o código simples 
// de primeira.
console.log(++num1 === num2--);
console.log(num1 === num2);