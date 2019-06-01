var express = require('express')
var UsersController = require('../controllers/controls')

var api = express.Router()

api.get("/prueba", UsersController.prueba)
api.get("/validarUsuario/:usuario/:pass", UsersController.validarUsuario)
api.get("/matricula/:id", UsersController.consultarMatricula)
// Inicio - 6 primeras pendientes y erroneas
/* api.get("/6erroneas") */
api.get("/matriculaAsignada/:_idUsuario", UsersController.matriculaAsignada)
api.post("/validar", UsersController.validar)
api.post("/save", UsersController.saveUsuario)
api.post("/saveMatricula", UsersController.crearMatricula)
api.post("/cargarMatriculas", UsersController.cargarMatriculas)

module.exports = api;