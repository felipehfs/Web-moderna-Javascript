/*
    v e v -> v
    v e f -> f
    f e ? => f

    v ou ? -> v
    f ou v -> v
    f ou f -> f

    v xor v -> f
    v xor f -> v
    f xor v -> v
*/
let passarNaFaculdade = true;
let conseguirUmEmprego = true;

let serUmEngenhoDeSoftware = passarNaFaculdade && conseguirUmEmprego;
console.log(serUmEngenhoDeSoftware);