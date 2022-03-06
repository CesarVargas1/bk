const { Router } = require('express'),
    router = Router()

router.use('/contact', require('../routes/contact.route')) //ruta contact' llama a una funcion 
router.use('/tablapartido', require('../routes/tablapartido.route'))

module.exports = router