function getInteiroAleatorioEntre(min, max) {
    const valor = Math.random() *(max - min) + min;
    return Math.floor(valor);
}

let opcao = 0;
let tentativas = 0;
while(opcao !== -1){
    opcao = getInteiroAleatorioEntre(-1, 10);
    console.log(opcao);
    tentativas++;
}
console.log(`Terminado em ${tentativas} tentativas.`);