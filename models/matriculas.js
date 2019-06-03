var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var matriculasSchema = Schema({

    nombre_completo: {
        nombre: String,
        primer_apellido: String,
        segundo_apellido: String
    },

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
        numero: String
    },
    
    provincia: String,
    
    localidad: {
        nombre: String,
        codigo_postal: Number
    },
    
    email: String,                 // DATOS PERSONALES 
    
    centro_inscripcion: {
        nombre_centro: String,
        localidad_centro: String,
        codigo_centro: String
    },

    familia_profesional: String,
    
    ciclo_formativo: {
        ciclo: String,
        curso: String,
        
        grado: {
            medio: Boolean,
            superior: Boolean // DEFECTO
        }

    },

    // DATOS ACADEMICOS
    via_acceso: String,

    //Fecha ==> Inscripcion || Nacimiento || Matriculacion anterior ???
    fecha_inscripcion: {
        dia: Number,
        mes: Number,
        anio: Number,
    },

    estado_matricula: String // POR DEFECTO (pendiente) pendiente, erronea o tramite 

    /*

    foto_dni_pasaporte: String,    // DOCUMENTACION
    foto_seguridad_social: String, // DOCUMENTACION
    foto_usuario: String,          // DOCUMENTACION 

    modulos_profesionales: String, // DOCUMENTACION

    firma_interesado: String, // DOCUMENTACION
    observaciones: String,    // DOCUMENTACION
    sello_centro: String,     // DOCUMENTACION
    anio_escolar: Number,     

    acceso_requisitos_academicos: {         // DOCUMENTACION
        certificado_bachillerato: String,   // DOCUMENTACION
        certificado_grado_medio: String,    // DOCUMENTACION
        certificado_prueba_acceso: String,  // DOCUMENTACION
        fotocopia_certificado: String       // DOCUMENTACION
    },

    acceso_sin_requisitos: {
        certificado_experiencia_laboral: String     // DOCUMENTACION
    },

    abono_banco: Number,                            // FORMAS DE PAGO
    repetidor_cursos: String, //True o false?       // FORMAS DE PAGO

    titular_cuenta: String,                         // FORMAS DE PAGO
    domicilio_cuenta: String,                       // FORMAS DE PAGO
    banco_cuenta: String,                           // FORMAS DE PAGO

    cuenta_bancaria: {                              // FORMAS DE PAGO
        iban: String,                               // FORMAS DE PAGO
        banco: String,                              // FORMAS DE PAGO
        sucursal: Number,                           // FORMAS DE PAGO
        d_c: Number,                                // FORMAS DE PAGO
        c_c: Number                                 // FORMAS DE PAGO
    },

    firma_titular: String,                          // FORMAS DE PAGO
    dni_titular: String,                            // FORMAS DE PAGO
    codigo_postal_titular: String,                  // FORMAS DE PAGO
    telefono_titular: String,                       // FORMAS DE PAGO

    pagos_realizados: Number,                       // FORMAS DE PAGO

    tipo_pago: {
        metalico: String,                           // FORMAS DE PAGO
        transferencia: Number,                      // FORMAS DE PAGO
        domiciliacion_bancaria: Number              // FORMAS DE PAGO
    },

    gestion_matricula: {                            // NO HACER NADA
        usuario: String,
        fecha_gestion: {
            dia: Number,
            mes: Number,
            anio: Number
        }
    },

    */


});

module.exports = mongoose.model('Matriculas', matriculasSchema);