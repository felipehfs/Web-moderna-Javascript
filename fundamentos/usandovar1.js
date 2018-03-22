// O escopo de var é delimitado apenas por uma função.
// Quando você cria uma var fora da função ela está no escopo global.
{
    {
        var code = "Javascript";
    }
}
console.log(code);

function teste(){
    var a = 123;
}
console.log(a);