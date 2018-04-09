// Implementação do forEach presente na api padrão do Javascript
aprovados = ['Agatha', 'Marcela', "Danizudo", "Julio"]

Array.prototype.forEach2 = function(funcao){
    let valores = Object.values(this)
    for(let i=0; i < valores.length; i++ ){
        funcao(valores[i], i, valores)
    }
}

aprovados.forEach2(aprovado => console.log(aprovado))