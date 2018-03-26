// Função construtora funcionando como 
// classes em Java.
function Carro(velocidadeMaxima = 250, delta = 2) {
    // Atributo privado
    let velocidadeInicial = 0;

    // Método público
    this.acelerar = function () {
        if(velocidadeInicial < velocidadeMaxima){
            velocidadeInicial += delta
        } else {
            velocidadeInicial = velocidadeMaxima
        }
    }
    // Método público
    this.freiar = function(){
        if(velocidadeInicial > 0){
            velocidadeInicial -= delta
        } else {
            resetar()
        }
    }
    // Método público
    this.getVelocidade = function () {
        return velocidadeInicial
    }

    // Método privado
    const resetar = function () {
        velocidadeInicial = 0
    }
}

let fiatUno = new Carro();
fiatUno.acelerar()
console.log(fiatUno.getVelocidade()) 

let camaro = new Carro(300, 20);
camaro.acelerar()
camaro.acelerar()
camaro.freiar()
camaro.freiar()
camaro.freiar()
console.log(camaro.getVelocidade());