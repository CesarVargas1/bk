const mongoose = require('mongoose') //libreria u orm para conectarnos con mongodb y hacer consultas,

const tablapartidokSchema = new mongoose.Schema({
    // se definen los campos igual nombre a front del ContactComponent 
    name: { type: String, lowercase: true }, // se define una coneccion, conforma de nombre typo string y puede llevar atributos como este que cambia a minuscula lowercase: true
    numJugador: String,
    nacionalidad: String, // se puede hacer una funcion de validacion del email valido entre otras
    altura: String,
    posicion: String,
    fechaNacimiento: String,
    localia: String,
    equipos: String

})

module.exports = mongoose.model('tablapartidok', tablapartidokSchema) // se esporta contact