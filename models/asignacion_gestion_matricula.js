var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var matriculas_gestionSchema = Schema({

    idUsuario: String,
    idMatricula: String

});

module.exports = mongoose.model('asignacion_gestion_matricula', matriculas_gestionSchema);
