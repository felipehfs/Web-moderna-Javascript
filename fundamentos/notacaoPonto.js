console.log(Math.ceil(6.1))

const obj1 = {};
obj1.nome = "Bola";
obj1['nome'] = "Bola2";

// obj1['nome'] = 'Bola2' 
console.log(obj1);

function Obj(nome){
    this.nome = nome;
}

const obj2 = new Obj('cadeira');
const obj3 = new Obj('mesa');

console.log(obj2);
console.log(obj3);