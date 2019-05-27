var express = require('express')
var UsersController = require('../controllers/controls')

var api = express.Router()

api.get("/prueba", UsersController.prueba)
api.get("/validarUsuario/:usuario/:pass", UsersController.validarUsuario)
api.get("/matricula/:id", UsersController.consultarMatricula)
// Inicio - 6 primeras pendientes y erroneas
/* api.get("/6erroneas") */
api.get("/6pendientes", UsersController.pendientesInicio)
api.post("/validar", UsersController.validar)
api.post("/save", UsersController.saveUsuario)
api.post("/saveMatricula", UsersController.crearMatricula)

module.exports = api;