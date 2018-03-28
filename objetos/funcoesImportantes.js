const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

console.log(Object.keys(pessoa));
console.log(Object.values(pessoa));
console.log(Object.entries(pessoa));

Object.entries(pessoa).forEach(([key, value]) => console.log(`"${key}": ${value}`))

Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: false, // Visível ao Object.keys
    writable: false,
    value: '01/09/1989'
});

console.log(pessoa.dataNascimento);
pessoa.dataNascimento = '02/10/1994'
console.log(pessoa.dataNascimento);
console.log(Object.keys(pessoa));

// Object assign (es2015)
const dest = {a: 1}
const o1 = {b: 2}
const o2 = {c: 3, a: 4}
const obj = Object.assign(dest, o1, o2)

Object.freeze(obj)
obj.c = 1234
console.log(obj)