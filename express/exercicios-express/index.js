const express = require('express');
const app = express();
const saudacao = require("./saudacaomid");
const bodyParser = require('body-parser');

const usuarioApi = require("./api/usuario");
require("./api/produto")(app, "com param!")

app.use(bodyParser.text())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
// os parametros são flexíveis no JS
app.use(saudacao("Felipe"))

app.use((req, res, next) => {
    console.log("Antes....");
    next();
})


app.post("/usuario", usuarioApi.salvar)
app.get("/usuario", usuarioApi.obter)


app.get( "/opa", (req, res) => {
    console.log("Durante...")
    res.json({ data: [{ id: 4, name: "Ana", position: 4},
              { id: 34, name: "Bia", position: 2},
              { id: 65, name: "Carlos", position: 4}
    ],
    count: 30,
    skip: 0,
    limit: 3,
    status: 200
})
    // res.json({
    //    name: "iPad 32Gb",
    //    price: 1889.00,
    //    discount: 0.12
    // })
    // res.send("Estou <b>bem<b>")
});

app.post("/clientes/relatorio", (req, res) => {
    res.send(`Cliente relatório: completo ${req.query.completo} ano = ${req.query.ano}`)
});


app.get("/clientes/:id", (req, res) => {
    res.send(`Cliente ${req.params.id} selecionado!`)
});

app.post("/corpo", (req, res) => {
   /*  let corpo = "";
    req.on('data', function(parte) {
        corpo += parte
    })

    req.on("end", function() {
        res.send(corpo)
    }) */
    res.send(JSON.stringify(req.body))
})

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Running: ${PORT}`);
});