// O else if é a mesma coisa que um if aninhado 
// ao else só que menos confuso e bugado na hora
// de ler. Porém, sempre depende do algoritmo...
Number.prototype.entre = function (inicio, fim) {
    return this >= inicio && this <= fim;
}

// A função imprimirResultado faz um review 
// sobre a situação da nota do aluno
const imprimirResultado = function (nota) {
    if(nota.entre(9, 10)){
        console.log("Quadro de Honra!");
    } else if(nota.entre(7, 8.99)) {
        console.log("Aprovado");
    } else if(nota.entre(4, 6.99)) {
        console.log("Recuperação");
    }else if(nota.entre(0, 3.99)){
        console.log("Reprovação");
    } else {
        console.log("Não aprovado");
    }
}

imprimirResultado(10);
imprimirResultado(20);