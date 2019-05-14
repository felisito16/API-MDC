var Usuario = require("../models/usuarios")
var Matricula = require("../models/matriculas")
var Ciclo = require("../models/ciclos")
var Asignatura = require("../models/asignaturas")

function prueba(req, res) {
    res.status(200).send({
        message: "Esta ruta es una prueba"
    });
}

function validarUsuario(req, res) {

    var userEmail = req.params.usuario
    var userPass = req.params.pass

    Usuario.find({ "user": userEmail, "pass": userPass }).exec((err, usuario) => {
        if (err) {
            res.status(500).send({
                message: "Error en el servidor"
            })
        } else {
            if (usuario != 0) {
                res.status(200).send({
                    usuario
                })
            } else {
                res.status(200).send({
                    encontrado: false
                })
            }
        }
    })
}

function saveUsuario(req, res) {
    var usuario = new Usuario();

    var params = req.body;

    if (params.user && params.pass) {
        usuario.user = params.user
        usuario.pass = params.pass

        usuario.save((err, userStored) => {
            if (err) {
                res.status(500).send({
                    message: "Error en el servidor"
                })
            } else {
                if (userStored) {
                    res.status(200).send({
                        usuario: userStored
                    })
                } else {
                    res.status(200).send({
                        message: "No se ha guardado el usuario"
                    })
                }
            }
        })
    } else {
        res.status(200).send({
            message: "El nombre de usuario y la contraseña son obligatorios"
        })
    }
}

function validar(req, res) {

    var params = req.body;

    var paramsUsuario = params.user;
    var paramsPass = params.pass;

    Usuario.find({ "user": paramsUsuario, "pass": paramsPass }).exec((err, usuario) => {
        if (err) {
            res.status(500).send({
                message: "Error en el servidor"
            })
        } else {
            if (usuario != 0) {
                res.status(200).send({
                    usuario
                })
            } else {
                res.status(200).send({
                    encontrado: false,
                    params
                })
            }
        }
    })
}

function crearMatricula(req, res) {
    var matricula = new Matricula();

    var params = req.body;

    var nombre = params.nombre
    var primerApellido = params.primerApellido
    var segundoApellido = params.segundoApellido

    matricula.nombre_completo.nombre = nombre
    matricula.nombre_completo.primer_apellido = primerApellido
    matricula.nombre_completo.segundo_apellido = segundoApellido

    matricula.save((err, matriculaStore) => {
        if (err) {
            res.status(500).send({
                message: "Error en el servidor"
            })
        } else {
            if (matriculaStore) {
                res.status(200).send({
                    matricula: matriculaStore
                })
            } else {
                res.status(200).send({
                    message: "No se ha guardado la matricula"
                })
            }
        }
    })
}

function consultarMatricula(req, res) {
    var params = req.params

    if (params.id) {
        var id = params.id

        Matricula.findOne({ "_id": { "$oid": id } }).exec(function (err, matricula) {
            if (err) {
                res.status(500).send({
                    message: "Error en el servidor",
                    messageError : err,
                    id : id,
                    paramid : params.id,
                    matricula : matricula
                })
            } else {
                if (matricula != 0) {
                    res.status(200).send({
                        matricula : matricula
                    })
                } else {
                    res.status(200).send({
                        message : "Matricula no encontrada"
                    })
                }
            }
        })
    }
}

// Nombre completo
/* params.nombre ? matricula.nombre_completo.nombre = params.nombre : ""
params.primerApellido ? matricula.nombre_completo.primer_apellido = params.primerApellido : "";
params.segundoApellido ? matricula.nombre_completo.segundo_apellido = params.segundoApellido : ""; */

// Fecha nacimiento
/* var arrFechaNacimiento = params.fechaNacimiento.split("/")
matricula.fecha_nacimiento.dia = parseInt(arrFechaNacimiento[0])
matricula.fecha_nacimiento.mes = parseInt(arrFechaNacimiento[1])
matricula.fecha_nacimiento.anio = parseInt(arrFechaNacimiento[2])

// DNI
matricula.dni.numero = params.numDNI
matricula.dni.tipo_documentacion = params.tipo_documentacion

// Telefono
matricula.telefono = params.telefono
 
// Nacionalidad
matricula.nacionalidad = params.nacionalidad

// Domicilio
matricula.domicilio.calle = params.calleDom
matricula.domicilio.numero = params.numeroDom
 
// Provincia
matricula.provincia = params.provincia

// Localidad
matricula.localidad.nombre = params.nombreLocalidad
matricula.localidad.codigo_postal = params.cpLocalidad

// Enlace foto dni
matricula.foto_dni_pasaporte = params.enlaceFotoDNI
 
// Enlace foto seguridad social
matricula.foto_seguridad_social = params.enlaceFotoSeguridadSocial

// Enlace usuario
matricula.foto_usuario = params.enlaceFotoUsuario

// Email
matricula.email = params.email

// Via acceso
matricula.via_acceso.requisitos_academicos = params.requisitosAcademicos
matricula.via_acceso.prueba_acceso = params.pruebaAcceso
matricula.via_acceso.sin_requisitos_academicos = params.sinRequisitosAcademicos

// Centro de inscripcion
matricula.centro_inscripcion.nombre_centro = params.nombreCentroInscripcion
matricula.centro_inscripcion.localidad_centro = params.localidadCentroInscripcion
matricula.centro_inscripcion.codigo_centro = params.codigoCentro

// Familia profesional
matricula.familia_profesional = params.familiaProfesiona

// Ciclo formativo
matricula.ciclo_formativo.curso = params.cicloSeleccionado
matricula.ciclo_formativo.grado.medio = params.medio
matricula.ciclo_formativo.grado.superior = params.superior

// Modulos profesionales
matricula.modulos_profesionales = params.modulosProfesionales

// Fecha de inscripcion
matricula.fecha_inscripcion.dia = params.diaInscripcion
matricula.fecha_inscripcion.mes = params.mesInscripcion
matricula.fecha_inscripcion.anio = params.anioInscripcion

// Firma interesado
matricula.firma_interesado = params.enlaceFirmaInteresado

// Observaciones
matricula.observaciones = params.observaciones

// Sello del centro
matricula.sello_centro = params.selloCentro

// Año escolar
matricula.firma_interesado = params.enlaceFirmaInteresado

// Acceso requisitos academicos
matricula.acceso_requisitos_academicos.certificado_bachillerato = params.certificadoBachillerato
matricula.acceso_requisitos_academicos.certificado_grado_medio = params.certificadoGradoMedio
matricula.acceso_requisitos_academicos.certificado_prueba_acceso = params.certificadoPruebaAcceso
matricula.acceso_requisitos_academicos.fotocopia_certificado = params.fotoCopiaCertificado

// Acceso sin requisitos
matricula.acceso_sin_requisitos.certificado_experiencia_laboral = params.certificadoExperienciaLaboral

// Abono banco
matricula.abono_banco = params.abonoBanco

// Repetidor cursos
matricula.repetidor_cursos = params.repetidor

// Titular cuenta
matricula.titular_cuenta = params.titularCuenta

// Domicilio cuenta
matricula.domicilio_cuenta = params.domCuenta

// Banco de la cuenta
matricula.banco_cuenta = params.bancoCuenta

// Datos cuenta bancario
matricula.cuenta_bancaria.iban = params.cuentaBancariaIban
matricula.cuenta_bancaria.banco = params.cuentaBancariaBanco
matricula.cuenta_bancaria.sucursal = params.cuentaBancariaSucursal
matricula.cuenta_bancaria.d_c = params.cuentaBancariaD_C
matricula.cuenta_bancaria.c_c = params.cuentaBancariaC_C

// Firma titular
matricula.firma_titular = params.firmaTitular

// DNI Titular
matricula.dni_titular = params.dniTitular

// Codigo postal del titular
matricula.codigo_postal_titular = params.codigoPostalTitular

// Telefono del titular
matricula.telefono_titular = params.telefonoTitular

// Pagos realizados
matricula.pagos_realizados = params.pagosRealizados

// Tipo de pago
matricula.tipo_pagos.metalico = params.metalico
matricula.tipo_pagos.transferencia = params.transferencia
matricula.tipo_pagos.domiciliacion_bancaria = params.domiciliacionBancaria

// Gestion matricula
matricula.gestion_matricula.usuario = params.user
matricula.gestion_matricula.fecha_gestion.dia = params.diaFechaGestion
matricula.gestion_matricula.fecha_gestion.mes = params.mesFechaGestion
matricula.gestion_matricula.fecha_gestion.anio = params.anioFechaGestion

// Estado de la matricula actual
matricula.estado_matricula = params.estadoMatricula */

module.exports = {
    prueba,
    saveUsuario,
    validarUsuario,
    validar,
    crearMatricula,
    consultarMatricula
}

// Funciones ADICIONALES

// Funcion SHA512

function SHA512(str) {

    function int64(msint_32, lsint_32) {
        this.highOrder = msint_32;
        this.lowOrder = lsint_32;
    }

    var H = [new int64(0x6a09e667, 0xf3bcc908), new int64(0xbb67ae85, 0x84caa73b), new int64(0x3c6ef372, 0xfe94f82b), new int64(0xa54ff53a, 0x5f1d36f1), new int64(0x510e527f, 0xade682d1), new int64(0x9b05688c, 0x2b3e6c1f), new int64(0x1f83d9ab, 0xfb41bd6b), new int64(0x5be0cd19, 0x137e2179)];
    var K = [new int64(0x428a2f98, 0xd728ae22), new int64(0x71374491, 0x23ef65cd), new int64(0xb5c0fbcf, 0xec4d3b2f), new int64(0xe9b5dba5, 0x8189dbbc), new int64(0x3956c25b, 0xf348b538), new int64(0x59f111f1, 0xb605d019), new int64(0x923f82a4, 0xaf194f9b), new int64(0xab1c5ed5, 0xda6d8118), new int64(0xd807aa98, 0xa3030242), new int64(0x12835b01, 0x45706fbe), new int64(0x243185be, 0x4ee4b28c), new int64(0x550c7dc3, 0xd5ffb4e2), new int64(0x72be5d74, 0xf27b896f), new int64(0x80deb1fe, 0x3b1696b1), new int64(0x9bdc06a7, 0x25c71235), new int64(0xc19bf174, 0xcf692694), new int64(0xe49b69c1, 0x9ef14ad2), new int64(0xefbe4786, 0x384f25e3), new int64(0x0fc19dc6, 0x8b8cd5b5), new int64(0x240ca1cc, 0x77ac9c65), new int64(0x2de92c6f, 0x592b0275), new int64(0x4a7484aa, 0x6ea6e483), new int64(0x5cb0a9dc, 0xbd41fbd4), new int64(0x76f988da, 0x831153b5), new int64(0x983e5152, 0xee66dfab), new int64(0xa831c66d, 0x2db43210), new int64(0xb00327c8, 0x98fb213f), new int64(0xbf597fc7, 0xbeef0ee4), new int64(0xc6e00bf3, 0x3da88fc2), new int64(0xd5a79147, 0x930aa725), new int64(0x06ca6351, 0xe003826f), new int64(0x14292967, 0x0a0e6e70), new int64(0x27b70a85, 0x46d22ffc), new int64(0x2e1b2138, 0x5c26c926), new int64(0x4d2c6dfc, 0x5ac42aed), new int64(0x53380d13, 0x9d95b3df), new int64(0x650a7354, 0x8baf63de), new int64(0x766a0abb, 0x3c77b2a8), new int64(0x81c2c92e, 0x47edaee6), new int64(0x92722c85, 0x1482353b), new int64(0xa2bfe8a1, 0x4cf10364), new int64(0xa81a664b, 0xbc423001), new int64(0xc24b8b70, 0xd0f89791), new int64(0xc76c51a3, 0x0654be30), new int64(0xd192e819, 0xd6ef5218), new int64(0xd6990624, 0x5565a910), new int64(0xf40e3585, 0x5771202a), new int64(0x106aa070, 0x32bbd1b8), new int64(0x19a4c116, 0xb8d2d0c8), new int64(0x1e376c08, 0x5141ab53), new int64(0x2748774c, 0xdf8eeb99), new int64(0x34b0bcb5, 0xe19b48a8), new int64(0x391c0cb3, 0xc5c95a63), new int64(0x4ed8aa4a, 0xe3418acb), new int64(0x5b9cca4f, 0x7763e373), new int64(0x682e6ff3, 0xd6b2b8a3), new int64(0x748f82ee, 0x5defb2fc), new int64(0x78a5636f, 0x43172f60), new int64(0x84c87814, 0xa1f0ab72), new int64(0x8cc70208, 0x1a6439ec), new int64(0x90befffa, 0x23631e28), new int64(0xa4506ceb, 0xde82bde9), new int64(0xbef9a3f7, 0xb2c67915), new int64(0xc67178f2, 0xe372532b), new int64(0xca273ece, 0xea26619c), new int64(0xd186b8c7, 0x21c0c207), new int64(0xeada7dd6, 0xcde0eb1e), new int64(0xf57d4f7f, 0xee6ed178), new int64(0x06f067aa, 0x72176fba), new int64(0x0a637dc5, 0xa2c898a6), new int64(0x113f9804, 0xbef90dae), new int64(0x1b710b35, 0x131c471b), new int64(0x28db77f5, 0x23047d84), new int64(0x32caab7b, 0x40c72493), new int64(0x3c9ebe0a, 0x15c9bebc), new int64(0x431d67c4, 0x9c100d4c), new int64(0x4cc5d4be, 0xcb3e42b6), new int64(0x597f299c, 0xfc657e2a), new int64(0x5fcb6fab, 0x3ad6faec), new int64(0x6c44198c, 0x4a475817)];
    var W = new Array(64);
    var a, b, c, d, e, f, g, h, i, j;
    var T1, T2; var charsize = 8;

    function utf8_encode(str) {
        return unescape(encodeURIComponent(str));
    }

    function str2binb(str) {
        var bin = []; var mask = (1 << charsize) - 1; var len = str.length * charsize; for (var i = 0; i < len; i += charsize) { bin[i >> 5] |= (str.charCodeAt(i / charsize) & mask) << (32 - charsize - (i % 32)); }
        return bin;
    }

    function binb2hex(binarray) {
        var hex_tab = '0123456789abcdef';
        var str = '';
        var length = binarray.length * 4;
        var srcByte;
        for (var i = 0; i < length; i += 1) {
            srcByte = binarray[i >> 2] >> ((3 - (i % 4)) * 8);
            str += hex_tab.charAt((srcByte >> 4) & 0xF) + hex_tab.charAt(srcByte & 0xF);
        }
        return str;
    }
    function safe_add_2(x, y) { var lsw, msw, lowOrder, highOrder; lsw = (x.lowOrder & 0xFFFF) + (y.lowOrder & 0xFFFF); msw = (x.lowOrder >>> 16) + (y.lowOrder >>> 16) + (lsw >>> 16); lowOrder = ((msw & 0xFFFF) << 16) | (lsw & 0xFFFF); lsw = (x.highOrder & 0xFFFF) + (y.highOrder & 0xFFFF) + (msw >>> 16); msw = (x.highOrder >>> 16) + (y.highOrder >>> 16) + (lsw >>> 16); highOrder = ((msw & 0xFFFF) << 16) | (lsw & 0xFFFF); return new int64(highOrder, lowOrder); }
    function safe_add_4(a, b, c, d) { var lsw, msw, lowOrder, highOrder; lsw = (a.lowOrder & 0xFFFF) + (b.lowOrder & 0xFFFF) + (c.lowOrder & 0xFFFF) + (d.lowOrder & 0xFFFF); msw = (a.lowOrder >>> 16) + (b.lowOrder >>> 16) + (c.lowOrder >>> 16) + (d.lowOrder >>> 16) + (lsw >>> 16); lowOrder = ((msw & 0xFFFF) << 16) | (lsw & 0xFFFF); lsw = (a.highOrder & 0xFFFF) + (b.highOrder & 0xFFFF) + (c.highOrder & 0xFFFF) + (d.highOrder & 0xFFFF) + (msw >>> 16); msw = (a.highOrder >>> 16) + (b.highOrder >>> 16) + (c.highOrder >>> 16) + (d.highOrder >>> 16) + (lsw >>> 16); highOrder = ((msw & 0xFFFF) << 16) | (lsw & 0xFFFF); return new int64(highOrder, lowOrder); }
    function safe_add_5(a, b, c, d, e) { var lsw, msw, lowOrder, highOrder; lsw = (a.lowOrder & 0xFFFF) + (b.lowOrder & 0xFFFF) + (c.lowOrder & 0xFFFF) + (d.lowOrder & 0xFFFF) + (e.lowOrder & 0xFFFF); msw = (a.lowOrder >>> 16) + (b.lowOrder >>> 16) + (c.lowOrder >>> 16) + (d.lowOrder >>> 16) + (e.lowOrder >>> 16) + (lsw >>> 16); lowOrder = ((msw & 0xFFFF) << 16) | (lsw & 0xFFFF); lsw = (a.highOrder & 0xFFFF) + (b.highOrder & 0xFFFF) + (c.highOrder & 0xFFFF) + (d.highOrder & 0xFFFF) + (e.highOrder & 0xFFFF) + (msw >>> 16); msw = (a.highOrder >>> 16) + (b.highOrder >>> 16) + (c.highOrder >>> 16) + (d.highOrder >>> 16) + (e.highOrder >>> 16) + (lsw >>> 16); highOrder = ((msw & 0xFFFF) << 16) | (lsw & 0xFFFF); return new int64(highOrder, lowOrder); }
    function maj(x, y, z) { return new int64((x.highOrder & y.highOrder) ^ (x.highOrder & z.highOrder) ^ (y.highOrder & z.highOrder), (x.lowOrder & y.lowOrder) ^ (x.lowOrder & z.lowOrder) ^ (y.lowOrder & z.lowOrder)); }
    function ch(x, y, z) { return new int64((x.highOrder & y.highOrder) ^ (~x.highOrder & z.highOrder), (x.lowOrder & y.lowOrder) ^ (~x.lowOrder & z.lowOrder)); }
    function rotr(x, n) { if (n <= 32) { return new int64((x.highOrder >>> n) | (x.lowOrder << (32 - n)), (x.lowOrder >>> n) | (x.highOrder << (32 - n))); } else { return new int64((x.lowOrder >>> n) | (x.highOrder << (32 - n)), (x.highOrder >>> n) | (x.lowOrder << (32 - n))); } }
    function sigma0(x) { var rotr28 = rotr(x, 28); var rotr34 = rotr(x, 34); var rotr39 = rotr(x, 39); return new int64(rotr28.highOrder ^ rotr34.highOrder ^ rotr39.highOrder, rotr28.lowOrder ^ rotr34.lowOrder ^ rotr39.lowOrder); }
    function sigma1(x) { var rotr14 = rotr(x, 14); var rotr18 = rotr(x, 18); var rotr41 = rotr(x, 41); return new int64(rotr14.highOrder ^ rotr18.highOrder ^ rotr41.highOrder, rotr14.lowOrder ^ rotr18.lowOrder ^ rotr41.lowOrder); }
    function gamma0(x) { var rotr1 = rotr(x, 1), rotr8 = rotr(x, 8), shr7 = shr(x, 7); return new int64(rotr1.highOrder ^ rotr8.highOrder ^ shr7.highOrder, rotr1.lowOrder ^ rotr8.lowOrder ^ shr7.lowOrder); }
    function gamma1(x) { var rotr19 = rotr(x, 19); var rotr61 = rotr(x, 61); var shr6 = shr(x, 6); return new int64(rotr19.highOrder ^ rotr61.highOrder ^ shr6.highOrder, rotr19.lowOrder ^ rotr61.lowOrder ^ shr6.lowOrder); }
    function shr(x, n) { if (n <= 32) { return new int64(x.highOrder >>> n, x.lowOrder >>> n | (x.highOrder << (32 - n))); } else { return new int64(0, x.highOrder << (32 - n)); } }
    str = utf8_encode(str); strlen = str.length * charsize; str = str2binb(str); str[strlen >> 5] |= 0x80 << (24 - strlen % 32); str[(((strlen + 128) >> 10) << 5) + 31] = strlen; for (var i = 0; i < str.length; i += 32) {
        a = H[0]; b = H[1]; c = H[2]; d = H[3]; e = H[4]; f = H[5]; g = H[6]; h = H[7]; for (var j = 0; j < 80; j++) {
            if (j < 16) { W[j] = new int64(str[j * 2 + i], str[j * 2 + i + 1]); } else { W[j] = safe_add_4(gamma1(W[j - 2]), W[j - 7], gamma0(W[j - 15]), W[j - 16]); }
            T1 = safe_add_5(h, sigma1(e), ch(e, f, g), K[j], W[j]); T2 = safe_add_2(sigma0(a), maj(a, b, c)); h = g; g = f; f = e; e = safe_add_2(d, T1); d = c; c = b; b = a; a = safe_add_2(T1, T2);
        }
        H[0] = safe_add_2(a, H[0]); H[1] = safe_add_2(b, H[1]); H[2] = safe_add_2(c, H[2]); H[3] = safe_add_2(d, H[3]); H[4] = safe_add_2(e, H[4]); H[5] = safe_add_2(f, H[5]); H[6] = safe_add_2(g, H[6]); H[7] = safe_add_2(h, H[7]);
    }
    var binarray = [];

    for (var i = 0; i < H.length; i++) {
        binarray.push(H[i].highOrder);
        binarray.push(H[i].lowOrder);
    }
    return binb2hex(binarray);
}