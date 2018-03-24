// A lambda minMaxRandom retorna um inteiro de um
// respectivo intervalo. Porém, não é validado 
// se o max é menor do que o min por propósitos
// didáticos
const minMaxRandom = (min, max) => Math.floor((Math.random() * (max - min) + min))
let opcao = -1

// O DO While executa o trecho de código pelo menos uma vez 
// independente da  expressão
do {
    opcao = minMaxRandom(-1, 10);
    console.log(opcao);
} while (opcao !== -1);