function soAsBoasNovas(nota) {
    if(nota >= 7){
        console.log("Aprovado com " + nota);
    }
}

soAsBoasNovas(8.1)
soAsBoasNovas(6.2);

function seForVerdadeEuFalo(valor) {
    if(valor){
        console.log("É verdade... " + valor);
        
    }
}

seForVerdadeEuFalo()
seForVerdadeEuFalo(0)
seForVerdadeEuFalo({})
seForVerdadeEuFalo(-1)
seForVerdadeEuFalo(true)
seForVerdadeEuFalo(null)
seForVerdadeEuFalo(undefined)
seForVerdadeEuFalo(function(){})