// Armazenando uma função em uma variável
const imprimirSoma = function (a, b) {
    console.log(a + b);
}

imprimirSoma(2, 4);

// Armazenando uma funcao arrow em uma variável
const soma = (a = 40, b = 2) => {
    return a + b;
}

console.log(soma(2, 3))
// Retorno implícito
const subtracao = (a, b) => a - b;
console.log(subtracao(14, 8));

const imprimir = a => console.log(a);
imprimir(subtracao(3,5))
console.log(soma());
