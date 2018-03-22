/*
    A linguagem ganha flexibilidade por causa da tipagem dinâmica mas a tipagem 
    fraca gera bugs difíceis de depurar.

 */

 let qualquer = 'Legal';
 console.log(qualquer);
 console.log(typeof qualquer);

 qualquer = 3.4516;
 console.log(qualquer);
 console.log(typeof qualquer);

 // Evitar nome genérico
 let valor = '';
 let numero = 1;
 let pqp = false; // Produto químico pergigoso ... kkk