var express = require('express')
var UsersController = require('../controllers/controls')

var api = express.Router()

api.get("/matricula/:id", UsersController.consultarMatricula)
// Inicio - 6 primeras pendientes y erroneas
/* api.get("/6erroneas") */
api.get("/matriculaAsignada/:idUsuario", UsersController.matriculaAsignada)
api.post("/validar", UsersController.validar)
api.post("/save", UsersController.saveUsuario)
api.post("/saveMatricula", UsersController.crearMatricula)
api.post("/cargarMatriculas", UsersController.cargarMatriculas)
api.post("/cargarMatriculasAsignadas/:idUsuario", UsersController.cargarMatriculasAsignadas)
api.delete("/deleteMatricula/:id", UsersController.deleteMatricula)
api.put("/asignarMatricula/:id", UsersController.asignarMatricula)

module.exports = api;