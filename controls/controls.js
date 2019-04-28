function prueba(req, res) {
    res.status(200).send({
        message: "Esta ruta es una prueba"
    });
}

module.exports = {
    prueba
}