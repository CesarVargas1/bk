const { send } = require('express/lib/response')
const consumer = require('../io/consumer')
const contact = require('../model/contact')

/* controlador es una funcion que hace algo en especifico
 1. Registre en base de datos la información.
 2. Envie un email notificando que en un tiempo estimado se le dara respuesta.
 3. Colas - RabbitMq  / con las colas cuando hay muchos usuarios no se pierde la informacion 
 4. Notificar en tiempo real, que nos estan contactando. socketio
 5. Reddis - cached
 6. Service Workers - nodejs y angular*/

const ctrlContact = {}
Contact = require('../model/contact') // llamar al modelo
mail = require('../service/mail')
sendMQ = require('../service/send')
    //consumer = require('../io/consumer')

// llega datos via post 
ctrlContact.create = async(req, res) => { //funcion crear usuario
    //desestructuracion}
    const { name, posicion, nacionalidad, numJugador, fechaNacimiento, altura, localia, equipos } = req.body
    const newContact = new Contact({ //se definen los datos de contacto
        name: name,
        posicion: posicion,
        nacionalidad: nacionalidad,
        numJugador: numJugador,
        fechaNacimiento: fechaNacimiento,
        altura: altura,
        localia: localia,
        equipos: equipos
    })
    await newContact.save() // guarda un usuario
        // mail.sendMailContact(req.body) // luego le envia el correo 
        // UNION DE RABBIT Y POSTMAN ENVIO DE INFORMACION  sendMQ.sendToNewQueue("contact", JSON.stringify(req.body)) // guarda toda la informacion desde postman
    res.json({ status: true })
}

ctrlContact.get = async(req, res) => { // va y contulte todos los registros del modelo contacts de line 14
    const contacts = await Contact.find({}) // buscar todo sin condicion ({})
    res.json(contacts) // se crea ruta router.get('/', contactCtrl.get) en contact. route.js
}

ctrlContact.findById = async(req, res) => { // una sola busqueda // findById se agrega la ruta en contact router
    const contacts = await Contact.find({ _id: req.body._id }) // busqueda id  por post
    res.json(contacts) // toda respuesta pasela a json
}

ctrlContact.findById = async(req, res) => { // busqueda id por get en bd
    console.log(req.params._id)
    const contact = await Contact.find({ _id: req.params._id })
    res.json(contact) // toda respuesta pasela a json
}

ctrlContact.remove = async(req, res) => { // eliminar 1 con deleteOne
    console.log(req.params._id);
    await Contact.deleteOne({ _id: req.params._id })
    res.json({ status: true }) // toda respuesta pasela a json
}

ctrlContact.update = async(req, res) => {
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
    await Contact.findOneAndUpdate({ _id: _id }, toUpdate) // busque uno y actualice la bd findOneAndUpdate
    res.json({ status: true }) // toda respuesta pasela a json
}

ctrlContact.search = async(req, res) => { // buscador con cualquier letra un solo campo
    const { name } = req.body // busqueda de un solo campo  pendiente email, subject, message
    const contact = await Contact.find({ name: { $regex: ".*" + name + ".*" } })
    res.json(contact) // toda respuesta pasela a json
}

module.exports = ctrlContact