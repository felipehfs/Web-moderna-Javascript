// O Hoisting é um comportamento de elevação da variável no escopo
// gerando efeito estranhos e perda capilar.

console.log('a =', a); // a =  Undefined
var a = 2;
console.log('a = ', a);