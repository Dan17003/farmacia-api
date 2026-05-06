const router = require('express').Router();
const ctrl = require('../controllers/compraController');
const auth = require('../middleware/auth');
const role = require('../middleware/roles');


// SOLO ALMACEN Y ADMIN
router.post('/', auth, role(['ADMIN', 'ALMACEN']), ctrl.crearCompra);

module.exports = router;