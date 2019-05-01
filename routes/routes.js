var express = require('express')
var UsersController = require('../controls/controls')

var api = express.Router()

api.get("/prueba", UsersController.prueba)
//api.get("/validarUsuario/:usuario/:pass", UsersController.validarUsuario)
api.post("/validar", UsersController.validarUsuario)
api.post("/save", UsersController.saveUsuario)

module.exports = api;