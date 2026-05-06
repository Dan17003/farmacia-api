const router = require('express').Router();
const ctrl = require('../controllers/ventaController');
const auth = require('../middleware/auth');
const role = require('../middleware/roles');

router.post('/', (req, res, next) => {
  console.log("ENTRÓ A /ventas");
  next();
}, auth, role(['ADMIN', 'VENDEDOR']), ctrl.crearVenta);

module.exports = router;