const router = require("express").Router(),
    usersController = require("../controllers/usersController");

router.post('/new', usersController.create);
router.get('/:id', usersController.getUser);

module.exports = router;
