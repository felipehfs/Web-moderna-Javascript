// Algoritmos de ordenação Quick sort - Complexidade de algoritmo O(n log n)
function quicksort(array){
    try {
        if(array.length < 2){
            return array;
        } else {
            let pivo = array[0];
            let menores = array.slice(1).filter(item => item <= pivo);
            let maiores = array.slice(1).filter(item => item > pivo);
            return quicksort(menores).concat(pivo, quicksort(maiores));
        }
    } catch(e) {
        console.log(e);   
    }
}