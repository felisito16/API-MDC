var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var matriculas_gestionSchema = Schema({

    _idUsuario: String,
    _idMatricula: String

});

module.exports = mongoose.model('asignacion_gestion_matricula', matriculas_gestionSchema);
