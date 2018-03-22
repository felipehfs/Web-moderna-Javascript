// Um objeto é apenas uma coleção chave-valor.
const prod1 = {};
prod1.nome = 'Celular Ultra Mega';
prod1.preco = 4998.90;
prod1['Desconto Legal'] = 0.40; // evitar atributos com espaço

console.log(prod1);

const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.90,
    obj: {
        blablabla: 1,
        obj: {
            blabla: 2
        }
    }
};

const product = '{ "nome": "Camisa", "preco": 45.0 }'
const prod3 = JSON.parse(product);

console.log(prod2);
console.log(prod3);