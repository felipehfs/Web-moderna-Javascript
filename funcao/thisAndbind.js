function Pessoa(){
    this.idade = 0
    // Outra estratégia para amarrar o contexto do this em uma constante
    const self = this
    setInterval(function(){
        self.idade++
        console.log(self.idade)
    }, 1000)
}

new Pessoa