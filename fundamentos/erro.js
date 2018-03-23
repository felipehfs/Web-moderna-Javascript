function tratarErroELancar(params) {
    // Pode lançar erro com qualquer tipo
    // throw 666 
    throw new Error("Nome not found!!");
}

function shout(obj) {
    try{
        console.log(obj.nome.toUpperCase());
    } catch(e){
        tratarErroELancar(e)
    }
}

const obj = {nome: "Roberto Carlos"};
shout(obj);
shout();