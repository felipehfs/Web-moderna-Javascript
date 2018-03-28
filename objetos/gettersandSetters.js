// Usando o encapsulamento disponível antes do es2015

const sequencia = {
    _valor: 1, // convenção
    get valor() { return this._valor++ },
    set valor(valor) { 
        if(valor > this._valor){
            this._valor = valor
        } 
    },
}

console.log(sequencia.valor)
sequencia.valor = 2000
console.log(sequencia.valor)
sequencia.valor = 1990
console.log(sequencia.valor)