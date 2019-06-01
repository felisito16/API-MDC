var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var matriculas_gestionSchema = Schema({

    _idUsuario: String,
    _idMatricula: String

});

module.exports = mongoose.model('matriculas_gestion', matriculas_gestionSchema);
