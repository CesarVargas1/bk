const express = require('express'),
    router = express.Router(),
    contactCtrl = require('../controller/contact.controller')

router.get('/', contactCtrl.get) // llama ctrlContact.get  de contact.controlle.js

router.post('/', contactCtrl.create) // crear

//recomienda consulta multiples parametros por post y uno por get
router.post('/findById', contactCtrl.findById) // agrega nueva funcionalidad busqueda/consulta del contact controller ctrlContact.findById

router.post('/search', contactCtrl.search) // buscqueda search post y get
    //router.get('/search', contactCtrl.search)

router.put('/', contactCtrl.update) //ruta para actualizar bd de contactcontroller.js

router.get('/:_id', contactCtrl.findById) // nueva funcionalidad busqueda/consulta del contact por parameto id prueba en postman

router.delete('/:_id', contactCtrl.remove) // se llama la funcion remove para eliminar con el parametro delete id



module.exports = router