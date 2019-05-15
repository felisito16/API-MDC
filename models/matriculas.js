var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var matriculasSchema = Schema({

    nombre_completo: {
        nombre: String,
        primer_apellido: String,
        segundo_apellido: String
    }/* ,

    fecha_nacimiento: {
        dia: Number,
        mes: Number,
        anio: Number
    },

    dni: {
        numero: String,
        tipo_documentacion: String
    },

    telefono: String,
    nacionalidad: String,

    domicilio: {
        calle: String,
        numero: Number
    },

    provincia: String,

    localidad: {
        nombre: String,
        codigo_postal: Number
    },

    foto_dni_pasaporte: String,
    foto_seguridad_social: String,
    foto_usuario: String,
    email: String,

    via_acceso: {
        requisitos_academicos: String,
        prueba_acceso: String,
        sin_requisitos_academicos: String
    },

    centro_inscripcion: {
        nombre_centro: String,
        localidad_centro: String,
        codigo_centro: String
    },

    familia_profesional: String,

    ciclo_formativo: {
        curso: String,
        grado: {
            medio: String,
            superior: String
        }
    },

    modulos_profesionales: String,

    //Fecha ==> Inscripcion || Nacimiento || Matriculacion anterior ???
    fecha_inscripcion: {
        dia: Number,
        mes: Number,
        anio: Number,
    },

    firma_interesado: String,
    observaciones: String,
    sello_centro: String,
    anio_escolar: Number,

    acceso_requisitos_academicos: {
        certificado_bachillerato: String,
        certificado_grado_medio: String,
        certificado_prueba_acceso: String,
        fotocopia_certificado: String
    },

    acceso_sin_requisitos: {
        certificado_experiencia_laboral: String
    },

    abono_banco: Number,
    repetidor_cursos: String, //True o false?

    titular_cuenta: String,
    domicilio_cuenta: String,
    banco_cuenta: String,

    cuenta_bancaria: {
        iban: String,
        banco: String,
        sucursal: Number,
        d_c: Number,
        c_c: Number
    },

    firma_titular: String,
    dni_titular: String,
    codigo_postal_titular: String,
    telefono_titular: String,

    pagos_realizados: Number,

    tipo_pago: {
        metalico: String,
        transferencia: Number,
        domiciliacion_bancaria: Number
    },

    gestion_matricula: {
        usuario: String,
        fecha_gestion: {
            dia: Number,
            mes: Number,
            anio: Number
        }
    },

    estado_matricula: String // pendiente, erronea o tramite */

});

module.exports = mongoose.model('Matriculas', matriculasSchema);