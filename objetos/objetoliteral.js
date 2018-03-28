const a = 1
const b = 2
const c = 3

const obj1 = {a:a, b:b, c: c}
const obj2 = {a, b, c}
console.log(obj1, obj2);

const algumAtributo = "saldo"
const saldo = 570.00

const obj3 = {[algumAtributo]: saldo}
console.log(obj3);

const obj4 = {
    funcao1: function(){
        // ...
    },
    funcao2() {
        // ...
    }
}

console.log(obj4);