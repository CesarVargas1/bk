const express = require('express'),
    router = express.Router(),
    //tablapartidoCtrl = require('../controller/tablapartidok.controller')
    tablapartidoCtrl = require('../controller/tablapartidok.controller')
    //contactCtrl = require('../controller/contact.controller')

router.get('/', tablapartidoCtrl.get) // llama ctrlContact.get  de contact.controlle.js

router.post('/', tablapartidoCtrl.create) // crear

//recomienda consulta multiples parametros por post y uno por get
router.post('/findById', tablapartidoCtrl.findById) // agrega nueva funcionalidad busqueda/consulta del contact controller ctrlContact.findById

router.post('/search', tablapartidoCtrl.search) // buscqueda search post y get
    //router.get('/search', contactCtrl.search)

router.put('/', tablapartidoCtrl.update) //ruta para actualizar bd de contactcontroller.js

router.get('/:_id', tablapartidoCtrl.findById) // nueva funcionalidad busqueda/consulta del contact por parameto id prueba en postman

router.delete('/:_id', tablapartidoCtrl.remove) // se llama la funcion remove para eliminar con el parametro delete id



module.exports = router