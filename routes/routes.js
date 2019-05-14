var express = require('express')
var UsersController = require('../controls/controls')

var api = express.Router()

api.get("/prueba", UsersController.prueba)
api.get("/validarUsuario/:usuario/:pass", UsersController.validarUsuario)
api.get("/matricula/:id", UsersController.consultarMatricula)
api.post("/validar", UsersController.validar)
api.post("/save", UsersController.saveUsuario)
api.post("/saveMatricula", UsersController.crearMatricula)

module.exports = api;