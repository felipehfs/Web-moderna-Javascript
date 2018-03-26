// As funções do Javascript tem consciência do contexto
// da qual foi declarado. Quando for chamado uma variável
// fora de seu escopo, ela irá buscar o escopo mais abrangente
// no local onde foi declarada.
const nome = "Geovanni"

function comprimentar() {
    console.log("Olá " + nome)
}

function saudacao() {
    const nome = "Lucas"
    comprimentar()
}


comprimentar()