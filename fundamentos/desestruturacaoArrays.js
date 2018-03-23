const [a] = [10];
const [n1, n2, , , n3, , n4=0] = [10, 7, 8, 9]
console.log(a);
console.log(n1, n2, n3, n4);

// Desestruturacao em matrizes
const [, [, nota]] = [[1, 3.9, 4.9], [5, 9.4, 3.9]];
console.log(nota);
