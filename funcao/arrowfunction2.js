function contextoThis(param){
    return this == param;
}

console.log(contextoThis(global));

const obj = {};

const outroContextothis = contextoThis.bind(obj);
console.log(outroContextothis(global));

// O this fica atrelado ao pacote e não ao objeto global
const arrowContexto = context => context === this;
console.log(arrowContexto(global));
console.log(arrowContexto(module.exports));

// Tentando amarrar o contexto do bind na arrow
// mas o contexto do this não se altera e continua sendo o 
// module.exports
const outroArrowContexto = arrowContexto.bind(obj);
console.log(outroArrowContexto(module.exports));
