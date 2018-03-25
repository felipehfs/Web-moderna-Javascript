// Função em JS é First-Class Object (Citizens)
// O Javascript trabalha a função como valor.
// Um aspecto muito importante para trabalhar 
// com a programação funcional.

// Criar de forma literal
function fun1() { }

// Armazenar em uma variável
const func2 = function () { }

// Armazenar em um array
const array = [function (a, b) { return a + b }, fun1, func2];

// Armazenar em atributos de um objeto
const obj = {};
obj.falar = function () {
    return 'Opa';
}

// Uma função pode ser usada como parâmetro
function run(func) {
    func()
}

run(function () { console.log("Hello world");   })


// Uma função pode retornar outra função
function somar(a, b) {

    return function(c){
        return console.log(a + b + c);
    }
}

somar(2, 3)(4)