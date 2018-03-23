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
const {nome: nomeCompleto, bemHumorado = false } = pessoa;
console.log(nomeCompleto, bemHumorado);