function Pessoa(){
    this.idade = 0
    // Outra estrategia para amarrar o contexto
    const self = this
    setInterval(function(){
        self.idade++
        console.log(self.idade)
    }, 1000)
}

new Pessoa