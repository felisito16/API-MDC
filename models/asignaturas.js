var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var asignaturasSchema = Schema({

    nombre_asignatura: String,
    horas_asignatura: Number,
    ciclo: [],
    curso: String

});

module.exports = mongoose.model('Asignaturas', asignaturasSchema);
