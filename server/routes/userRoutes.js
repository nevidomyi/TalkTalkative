const router = require("express").Router();
const usersController = require("../controllers/usersController");

router.post("/new", usersController.create);
router.post("/login", usersController.authenticate);
router.get("/profile/", usersController.getProfile);
router.delete("/:id", usersController.delete);
router.put("/:id", usersController.update);
router.get("/:id", usersController.getUser);
router.get("/verify/:token", usersController.verify);

module.exports = router;
