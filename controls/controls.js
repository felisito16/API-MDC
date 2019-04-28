var Usuario = require("../models/usuarios")

function prueba(req, res) {
    res.status(200).send({
        message: "Esta ruta es una prueba"
    });
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
            message : "El nombre de usuario y la contraseña son obligatorios"
        })
    }
}

module.exports = {
    prueba,
    saveUsuario
}