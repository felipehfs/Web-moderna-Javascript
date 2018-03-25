const pessoa = {
    saudacao: 'Bom dia!',
    falar(){
        console.log(this.saudacao)
    }
}

pessoa.falar()
const falar = pessoa.falar
falar() // conflito entre paradigmas: funcional e OO

// Amarrando o contexto do bind com o resultado do bind
const falarDePessoa = pessoa.falar.bind(pessoa); 
falarDePessoa()

const falar2 = pessoa.falar
falar2() // undefined