// Desestruturação de objetos nos paramêtros da função
function rand({min = 0, max = 1000}){
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor);
}

const range = {max: 50, min: 34}

console.log(rand(range));
console.log(rand({min: 2}));
console.log(rand({}));
console.log(rand());
