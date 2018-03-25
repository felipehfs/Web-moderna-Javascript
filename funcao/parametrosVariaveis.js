// Antes do es2015 era feito mais ou menos assim
function soma() {
    let total = 0
    for(var i in arguments) {
        total += arguments[i]
    }
    return total
}

console.log(soma(1, 3, 5, 8, 9));
console.log(soma())