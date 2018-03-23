// novo recurso do ES2015
const pessoa = { 
    nome: "Felipe",
    idade: 23, 
    endereco: {
        logradouro: "Rua Martins soares",
        numero: 690,
        bairro: 'Vista Alegre'
    }
};

// desestruturação de objeto
const {nome, idade} = pessoa;

// Criando variáveis com o rótulo personalizado
const {nome:n, idade: i} = pessoa;
console.log(nome, idade);

// Desestruturação com valores padrões
const {nome: nomeCompleto, bemHumorado = true } = pessoa;
console.log(nomeCompleto, bemHumorado);

// Desestruturação de forma aninhada. O importante é  garantir que os valores estejam setados 
const {endereco: {logradouro, numero, cep = null} } = pessoa;
console.log(logradouro, numero, cep);