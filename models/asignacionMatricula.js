var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var asignacionMatriculaSchema = Schema({

    idUsuario: String,
    idMatricula: String

});

module.exports = mongoose.model('asignacionMatricula', asignacionMatriculaSchema);
