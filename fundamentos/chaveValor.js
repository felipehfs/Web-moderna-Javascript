// par nome/valor
const saudacao = 'Opa'; // contexto léxico 1

function exec() {
    const saudacao = 'Falaaaaaaaa'; // contexto léxico 2
    return saudacao;
}

console.info(exec());

// Objetos são grupos aninhado de pares nome/valor
const cliente = {
    nome: "Pedro",
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: 'Rua Martins Soares',
        numero: 690,
        complemento: 'A'
    }
};