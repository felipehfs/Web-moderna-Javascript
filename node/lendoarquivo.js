const fs = require('fs')
const diretorio = __dirname + "/arquivo.json"

// síncrono
const conteudo2 = fs.readFileSync(diretorio, 'utf-8');
console.log('1' + conteudo2)


// assíncrono
fs.readFile(diretorio, 'utf-8', function (err, data) {
    const content = JSON.parse(data);
    if(err){
        throw new err
    }
    console.log(content)
})

fs.readdir(__dirname, (err, arquivos) => {
    console.log(arquivos)
})