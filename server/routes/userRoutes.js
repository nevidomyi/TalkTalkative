const router = require('express').Router();
const usersController = require('../controllers/usersController');

router.post('/new', usersController.create);
router.get('/:id', usersController.getUser);

module.exports = router;
