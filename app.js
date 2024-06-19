const express = require('express')//recupero recursos de libreria
const app = express()//instancio clase express
const bodyParser = require('body-parser')//instancio recurso

//especificamos el subdirectorio donde se encuentran las páginas estáticas
app.use(express.static(__dirname + '/public'))

//extended: false significa que parsea solo string (no archivos de imagenes por ejemplo)
app.use(bodyParser.urlencoded({ extended: false }))
//proceso los elementos enviados por formulario
app.post('/mostrarnumeros', (req, res) => {
  let num1 = req.body.numero1
  let num2 = req.body.numero2
  num1 = parseInt(num1)
  num2 = parseInt(num2)
  let pagina = '<!doctype html><html><head></head><body>'
  for (let x = num1; x <= num2; x++)
    pagina += `<a href="/mostrartabla?valor=${x}">${x}</a> - `
  pagina += '</body></html>'
  res.send(pagina)
})
//proceso la solicitud de metodos get barra de vinculos
app.get('/mostrartabla', (req, res) => {
  let num = req.query.valor
  num = parseInt(num)
  let pagina = '<!doctype html><html><head></head><body>'
  for (let x = 1; x <= 10; x++) {
    let tabla = num * x
    pagina += `${num} * ${x} = ${tabla} <br>`
  }
  pagina += '<a href="index.html">Retornar</a>'
  pagina += '</body></html>'
  res.send(pagina)
})


var server = app.listen(8888, () => {
  console.log('Servidor web iniciado')
})