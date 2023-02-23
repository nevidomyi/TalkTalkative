const router = require("express").Router(),
    usersController = require("../controllers/usersController");

router.get('/:id', usersController.getUser);
router.post('/new', usersController.create);

module.exports = router;
