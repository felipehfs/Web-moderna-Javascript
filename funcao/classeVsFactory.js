class Pessoa {
    constructor(nome) {
        this.nome = nome
    }

    falar(){
        console.log(`Meu nome é ${this.nome}.`)
    }
}
// Classe 
const p1 = new Pessoa("Marcelo")
p1.falar()

// Cria pessoa tem consciência do seu contexto léxico 
// podendo ser usado no DOM sem alterar seu contexto.
const criaPessoa = nome => {
    return {
        falar: () => console.log(`Meu nome é ${nome}.`)
    }
}

const p2 = criaPessoa("Felipe")
p2.falar()
