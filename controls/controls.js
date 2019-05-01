var Usuario = require("../models/usuarios")

function prueba(req, res) {
    res.status(200).send({
        message: "Esta ruta es una prueba"
    });
}

function validarUsuario(req, res) {

    var userEmail = req.params.usuario
    var userPass = req.params.pass

    Usuario.find({ "user": userEmail, "pass": userPass }).exec((err, usuario) => {
        if (err) {
            res.status(500).send({
                message: "Error en el servidor"
            })
        } else {
            if (usuario != 0) {
                res.status(200).send({
                    usuario
                })
            } else {
                res.status(200).send({
                    encontrado: false
                })
            }
        }
    })
}

function saveUsuario(req, res) {
    var usuario = new Usuario();

    var params = req.body;

    if (params.user && params.pass) {
        usuario.user = params.user
        usuario.pass = params.pass

        usuario.save((err, userStored) => {
            if (err) {
                res.status(500).send({
                    message: "Error en el servidor"
                })
            } else {
                if (userStored) {
                    res.status(200).send({
                        usuario: userStored
                    })
                } else {
                    res.status(200).send({
                        message: "No se ha guardado el usuario"
                    })
                }
            }
        })
    } else {
        res.status(200).send({
            message: "El nombre de usuario y la contraseña son obligatorios"
        })
    }
}

function validar(req, res) {

    var params = req.body;
    var paramsUsuario = params.user;
    var paramsPass = params.pass;
    Usuario.find({ "user": paramsUsuario, "pass": paramsPass }).exec((err, usuario) => {
        if (err) {
            res.status(500).send({
                message: "Error en el servidor"
            })
        } else {
            if (usuario != 0) {
                res.status(200).send({
                    usuario
                })
            } else {
                res.status(200).send({
                    encontrado: false,
                    paramsUsuario,
                    paramsPass,
                })
            }
        }
    })
}


module.exports = {
    prueba,
    saveUsuario,
    validarUsuario,
    validar
}