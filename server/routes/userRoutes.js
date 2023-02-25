const router = require('express').Router();
const usersController = require('../controllers/usersController');

router.get('/', (req, res) => {
  res.send('Got successful');
});
router.post('/new', usersController.create);
router.get('/:id', usersController.getUser);

//

module.exports = router;
