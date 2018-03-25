// Valores padrões antes do es2015
function soma1(a, b, c) {
    a = a || 1
    b = b || 1
    c = c || 1
    return a + b + c
}

console.log(soma1());
console.log(soma1(3));
console.log(soma1(0, 0, 0)); // Zero retorna 3 por ser falso

function soma2(a, b, c) {
    a = a !== undefined ? a : 1
    b = 1 in arguments ? b : 1
    c = isNaN(c) ? 1 : c // Alternativa mais segura

    console.log("Soma")
    console.log(a + b + c)
}

soma2()

function soma3(a = 1, b = 1, c = 1) {
    return a + b + c
}

soma3()