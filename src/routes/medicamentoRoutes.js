const router = require('express').Router();
const ctrl = require('../controllers/medicamentoController');
const auth = require('../middleware/auth');
const role = require('../middleware/roles');

router.post('/', auth, role(['ADMIN']), ctrl.create);
router.get('/', auth, ctrl.getAll);
router.put('/:id', auth, role(['ADMIN']), ctrl.update);
router.delete('/:id', auth, role(['ADMIN']), ctrl.delete);

module.exports = router;