var express = require('express')
var UsersController = require('../controls/controls')

var api = express.Router()

api.get("/prueba", UsersController.prueba)
api.post("/save", UsersController.saveUsuario)

module.exports = api;