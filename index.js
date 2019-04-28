var mongoose = require("mongoose")
var app = require("./app")/* 
var port = 3800; */

mongoose.Promise = global.Promise;
mongoose.connect("mongodb+srv://admin:MdC-7824@cluster0-98qru.gcp.mongodb.net/test" , /* { useNewUrlParser: true } */ )
    .then( () => {
        console.log("Conexion establecida");
       /*  app.listen(port, () => {
            console.log("El servidor esta corriendo en https://mdcproyecto.herokuapp.com/")
        }) */

    }).catch( err => console.log(err) )