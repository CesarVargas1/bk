const mongoose = require('mongoose'), // busca a mongoose
    config = require('../config/config')

//conectarnos a la base de datos
mongoose.connect(config.urlDb) // Conectar a el link  urlDb de config.js
    /*luego*/
    .then(db => console.log("Connect to DB"))
    /*si hay error*/
    .catch(err => console.log(err))

module.exports = mongoose