var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var matriculasSchema = Schema({

    nombreCompleto : {
        nombre : String,
        primerApellido : String,
        segundoApellido : String
    },

    fechaNacimiento : {
        dia : Number,
        mes: Number,
        anio: Number
    },

    dni : {
        numero : String,
        tipoDocumentacion : String 
    },

    telefono : String,
    nacionalidad : String

});

module.exports = mongoose.model('Matriculas', matriculasSchema);