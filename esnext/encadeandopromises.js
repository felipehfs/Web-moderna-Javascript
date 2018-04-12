const http = require('http')
// Promise.all é capaz de fazer o processamento paralelo de forma assíncrona no nodejs

// Funcão faz a requisicao get da página
function retornaPagina(url){
    return new Promise((resolve, reject)=>{
        http.get(url, function(res){
            let message = '';
            res.on('data', (data) => { message += data})
            res.on('end', () => resolve(message))
            res.on('error', (error)=> reject(error))
        })
    })
}
const extractTitle = (page) =>  /<title>(.*)<\/title>/g.exec(page)[1]

/* 
    Promise.all([retornaPagina('http://www.google.com.br'), retornaPagina('http://www.bing.com') ])
    .then(urls => urls.map(extractTitle))
    .then(titles => titles.forEach(title => console.log(title)))
    .catch(e => console.log(e)) 
*/

const tituloBuscadores = async () => {
    const google = await retornaPagina("http://www.google.com.br/")
    const bing = await retornaPagina("http://www.bing.com")
    return [google, bing]
}

tituloBuscadores()
    .then(pages => pages.map(extractTitle))
    .then(titles => titles.forEach(t => console.log(t)))
