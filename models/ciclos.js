var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var ciclosSchema = Schema({

    nombre_ciclo: String,
    descripcion_ciclo: String,
    duracion_ciclo: Number

});

module.exports = mongoose.model('Ciclos', ciclosSchema);
