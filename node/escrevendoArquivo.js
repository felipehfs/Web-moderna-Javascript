const fs = require("fs");

const produtos = {
    categorias: [
        {mesa: [
            {
                nome: "Pano de prato",
                preco: 14.50
            },
            {
                nome: "Planta de plástico",
                preco: 9.90
            }
        ]
        }]
}

fs.writeFile(__dirname + '/produtos.json', JSON.stringify(produtos), err => {
    console.log(err || "arqGravado com sucesso!")
})