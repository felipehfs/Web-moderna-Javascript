// usando a notação literal
const obj1 = {}
console.log(obj1)

// Object em JS
console.log(typeof Object, typeof new Object);
const obj2 = new Object 
console.log(obj2);

// Funções constrututoras
function Produto(nome, preco, desconto) {
    this.nome = nome 
    this.getPrecoComDesconto = () => {
        return preco * (1 - desconto)
    }
}
const p1 = new Produto("Caneta", 2.89, 0.01);
const p2 = new Produto("Notebook",2900.00, 0.06);
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto());


function criarFuncionario(nome, salarioBase, faltas){
    return {
        nome, 
        salarioBase,
        faltas,
        getSalario(){
            return (salarioBase / 30) * (30 - faltas)
        }
    }
}

let felipe = criarFuncionario("Felipe", 2800.99, 3)
console.log(felipe.getSalario());

const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)

const fromJSON = JSON.parse('{"nome": "Marcos", "idade": 22}')

console.log(fromJSON.idade);
