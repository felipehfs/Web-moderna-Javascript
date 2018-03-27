// Função auto executáveis são excelentes para fugir do escopo global
// IIFE -> Immediately Invoked Function Expression
(function() {
    console.log('Será executado na hora!')
    console.log('Foge do escopo mais abrangente!')
})()