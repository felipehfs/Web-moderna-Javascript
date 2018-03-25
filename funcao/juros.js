// Calcula o juros compostos
const montanteJurosCompostos = (c, i, n) => c * Math.pow((1 + i), n);
const jurosCompostos = (c, i, n) => montanteJurosCompostos(c, i, n) - c

// Calcula o juros simples
const jurosSimples = (c, i, n) =>  c * i * n;
const montanteJurosSimples = (c, i, n) => jurosSimples(c, i, n) + c

function calculaJuros(c, i, n, tipo) {
    let montante, juros;
    if(tipo === 'compostos'){
        montante = montanteJurosCompostos(c, i, n);
        juros = jurosCompostos(c, i, n);
    } else if (tipo === 'simples') {
        montante = montanteJurosSimples(c, i, n);
        juros = jurosSimples(c, i, n);
    } else {
        throw new Error("Tipo enviado é inválido")
    }
    return `Juros ${tipo}:\n Montante: R$ ${montante.toFixed(2)}, Juros: R$ ${juros.toFixed(2)}`;
}

console.log(calculaJuros(2000.00, 0.05, 8, "simples"))
console.log(calculaJuros(2000.00, 0.03, 3, "compostos"));
console.log(calculaJuros(3000.00, 0.04, 12, "compostos"));