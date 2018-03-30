function MeuObjeto() {}
console.log(MeuObjeto.prototype)

// O obj1 aponta para o atributo prototype da função MeuObjeto
// Na notação literal o __proto__ aponta para Object.prototype
const obj1 = new MeuObjeto()
const obj2 = new MeuObjeto()

console.log(obj1.__proto__ === obj2.__proto__);
console.log(MeuObjeto.prototype === obj1.__proto__);

MeuObjeto.prototype.nome = "Anonimo"
MeuObjeto.prototype.falar = function () {
    return `Meu nome é ${this.nome}`
}

console.log(obj1.falar());

obj2.nome = "Washington"
console.log(obj2.falar());

const obj3 = {}
obj3.__proto__ = MeuObjeto.prototype
obj3.nome = "Objeto 3"

console.log(obj3.falar());

// Resumindo a loucura ...
console.log((new MeuObjeto).__proto__ === MeuObjeto.prototype);
console.log(MeuObjeto.__proto__ === Function.prototype);
console.log(Function.prototype.__proto__ === Object.prototype);
console.log(Object.prototype.__proto__ === null);
