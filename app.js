var express = require("express")
var cors = require("cors")
var bodyParser = require('body-parser')

var app = express()

// Cargar rutas
var controls_router = require("./routes/routes")

// body-parser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// configurar CORSE
app.use(cors());

// rutas
app.use("/", controls_router)

module.exports = app;

// Por si queremos da a otros sitios acceso a CORS
/* var allowedOrigins = ['http://localhost:3000',
                      'http://yourapp.com'];
app.use(cors({
  origin: function(origin, callback){
    // allow requests with no origin 
    // (like mobile apps or curl requests)
    if(!origin) return callback(null, true);
    if(allowedOrigins.indexOf(origin) === -1){
      var msg = 'The CORS policy for this site does not ' +
                'allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  }
})); */