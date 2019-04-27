var mongoose = require("mongoose")

mongoose.Promise = global.Promise;
mongoose.connect("mongodb+srv://admin:MdC-7824@cluster0-98qru.gcp.mongodb.net/test" , { useNewUrlParser: true } )
    .then( () => {
        console.log("Conexion establecida");

    }).catch(  err => console.log(err) )