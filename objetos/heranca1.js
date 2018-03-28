// O objeto literal não contem o parâmetro prototype apenas o __proto__
// que indica o protótipo pai que o filho herda
const ferrari = {
    modelo: 'F40',
    velMax: 240
}

const volvo = {
    modelo: 'V40',
    velMax: 200
}

console.log(ferrari.prototype);
console.log(ferrari.__proto__, volvo.__proto__);
console.log(ferrari.__proto__ === Object.prototype);
console.log(Object.prototype.__proto__)

function MeuObjeto() { }
console.log(typeof Object, typeof MeuObjeto)
console.log(Object.prototype, MeuObjeto.prototype);
