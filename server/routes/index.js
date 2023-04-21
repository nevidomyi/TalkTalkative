const router = require("express").Router();
const userRoutes = require("./userRoutes");
const chatRoutes = require("./chatRoutes");

router.use("/users", userRoutes);
router.use("/chat", chatRoutes);

router.use("/test", (req, res) => {
  if (!req) {
    res.json({
      success: "Server connected successfully",
    });
  }
});

module.exports = router;
