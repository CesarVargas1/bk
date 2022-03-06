const { send } = require('express/lib/response')
const consumer = require('../io/consumer')
const tablapartido = require('../model/tablapartidok')

const ctrlTablapartido = {}
Tablapartido = require('../model/tablapartidok') // llamar al modelo
mail = require('../service/mail')
sendMQ = require('../service/send')
    //consumer = require('../io/consumer')

// llega datos via post 
ctrlTablapartido.create = async(req, res) => { //funcion crear usuario
    //desestructuracion}
    const { name, posicion, nacionalidad, numJugador, fechaNacimiento, altura, localia, equipos } = req.body
    const newTablapartido = new Tablapartido({ //se definen los datos de contacto
        name: name,
        posicion: posicion,
        nacionalidad: nacionalidad,
        numJugador: numJugador,
        fechaNacimiento: fechaNacimiento,
        altura: altura,
        localia: localia,
        equipos: equipos
    })
    await newTablapartido.save() // guarda un usuario
        // mail.sendMailTablapartido(req.body) // luego le envia el correo 
        // UNION DE RABBIT Y POSTMAN ENVIO DE INFORMACION  sendMQ.sendToNewQueue("tablapartido", JSON.stringify(req.body)) // guarda toda la informacion desde postman
    res.json({ status: true })
}

ctrlTablapartido.get = async(req, res) => { // va y contulte todos los registros del modelo contacts de line 14
    const tablapartidok = await Tablapartido.find({}) // buscar todo sin condicion ({})
    res.json(tablapartidok) // se crea ruta router.get('/', tablapartidoCtrl.get) en tablapartido. route.js
}

ctrlTablapartido.findById = async(req, res) => { // una sola busqueda // findById se agrega la ruta en contact router
    const tablapartidok = await Tablapartido.find({ _id: req.body._id }) // busqueda id  por post
    res.json(tablapartidok) // toda respuesta pasela a json
}

ctrlTablapartido.findById = async(req, res) => { // busqueda id por get en bd
    console.log(req.params._id)
    const tablapartido = await Tablapartido.find({ _id: req.params._id })
    res.json(tablapartido) // toda respuesta pasela a json
}

ctrlTablapartido.remove = async(req, res) => { // eliminar 1 con deleteOne
    console.log(req.params._id);
    await Tablapartido.deleteOne({ _id: req.params._id })
    res.json({ status: true }) // toda respuesta pasela a json
}

ctrlTablapartido.update = async(req, res) => {
    console.log(req.body)
    const { _id, name, numJugador, nacionalidad, altura, posicion, fechaNacimiento, localia, equipos } = req.body // se realiza busqueda por id y actualiza los campos
    let toUpdate = {
        _id: _id,
        name: name,
        numJugador: numJugador,
        nacionalidad: nacionalidad, // tambien sirve la opcion con comillas  "email": email,
        altura: altura,
        posicion: posicion,
        fechaNacimiento: fechaNacimiento,
        localia: localia,
        equipos: equipos
    }
    await Tablapartido.findOneAndUpdate({ _id: _id }, toUpdate) // busque uno y actualice la bd findOneAndUpdate
    res.json({ status: true }) // toda respuesta pasela a json
}

ctrlTablapartido.search = async(req, res) => { // buscador con cualquier letra un solo campo
    const { name } = req.body // busqueda de un solo campo  pendiente email, subject, message
    const tablapartido = await Tablapartido.find({ name: { $regex: ".*" + name + ".*" } })
    res.json(tablapartido) // toda respuesta pasela a json
}

module.exports = ctrlTablapartido