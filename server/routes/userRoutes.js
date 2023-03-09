const router = require('express').Router();
const usersController = require('../controllers/usersController');

router.post('/new', usersController.create);
router.post('/login', usersController.authenticate);
router.put('/edit', usersController.update);
router.delete('/delete', usersController.delete);
router.get('/:token', usersController.verify);
// router.get('/:id', usersController.getUser);

module.exports = router;
