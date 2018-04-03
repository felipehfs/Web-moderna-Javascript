const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa'];
pilotos.pop(); // massa quebrou o carro!
console.log(pilotos);

pilotos.push('Verstappen');
console.log(pilotos);

pilotos.shift(); // remove o primeiro!
console.log(pilotos);

pilotos.unshift('Hamilton');
console.log(pilotos);

// Splice remove e adiciona elemento em um índice
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos);

// remover
pilotos.splice(3, 1) 

const algunsPilotos = pilotos.slice(2)
console.log(algunsPilotos);

const algunsPilotos2 = pilotos.slice(2, 4)
console.log(algunsPilotos2);
