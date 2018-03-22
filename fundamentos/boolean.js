let isAtivo = false 
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)
console.log(!!isAtivo)

// Os verdadeiros
console.log('Os verdadeiros:');
console.log(!!-1);
console.log(!!3);
console.log(!![]);
console.log(!!Infinity);
console.log(!! ' ');
console.log(!!(isAtivo = true));
console.log(!!{});

// Os Falsos
console.log("Os falsos: ");
console.log(!!0)
console.log(!!'')
console.log(!!null);
console.log(!!undefined);
console.log(!!(isAtivo = false));

// O Javascript retorna o valor verdadeiro na expressão
console.log('' || null || undefined || 0 ||'epa')

let nome = ''
console.log(nome || "Desconhecido")