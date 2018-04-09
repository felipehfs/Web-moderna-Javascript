function falarDepoisDe(segundos, frase) {
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            resolve(frase)
        }, segundos * 1000)
    })
}

falarDepoisDe(2, "Você foi aonde")
    .then(frase => frase.concat("!?"))
    .then(outraFrase => console.log(outraFrase))
    .catch(err => console.log(err))