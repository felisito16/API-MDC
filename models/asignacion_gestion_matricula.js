var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var Asignacion_gestion_matriculaSchema = Schema({

    idUsuario: String,
    idMatricula: String

});

module.exports = mongoose.model('Asignacion_gestiofdfdfn_matricula', Asignacion_gestion_matriculaSchema);
