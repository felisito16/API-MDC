var express = require("express")
var bodyParser = require('body-parser')

var app = express()

// Cargar rutas

// body-parser
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

// configurar CORSE

// rutas
app.get('/getAllUsers', (req, res) => {
    res.status(200).send({
        message: 'Ruta /getAllUsers'
    })
})
app.get('/', (req, res) => {
    res.status(200).send({
        message: 'Ruta /'
    })
})


module.exports = app;