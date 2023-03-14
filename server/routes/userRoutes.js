const router = require('express').Router();
const usersController = require('../controllers/usersController');

router.post('/new', usersController.create);
router.post('/login', usersController.authenticate);
router.put('/update', usersController.update);
router.delete('/delete', usersController.delete);
router.get('/:id', usersController.getUser);
router.get('/verify/:token', usersController.verify);

module.exports = router;
