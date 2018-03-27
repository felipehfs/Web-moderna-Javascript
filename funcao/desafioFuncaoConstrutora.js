function Pessoa(nome){
    this.nome = nome

    this.falar = function () {
        console.log(`Meu nome é ${this.nome}`)
    }
}

let p1 = new Pessoa("Julio")
p1.falar()