// função sem retorno
function imprimirSoma(a, b) {
    console.log(a + b);
}

imprimirSoma(2, 3)
imprimirSoma(2) // O segundo parâmetro vira undefined
imprimirSoma() // Não é obrigado passar parâmetros em Javascript

// Função com retorno
function soma(a, b) {
    return a + b;
}

console.log(soma(2, 3));
console.log(soma()); // undefined + undefined = NaN

