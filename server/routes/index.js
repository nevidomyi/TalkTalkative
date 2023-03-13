const router = require('express').Router();
const userRoutes = require('./userRoutes');

router.use('/users', userRoutes);

router.use('/test', (req, res) => {
  if (!req) {
    res.json({
      success: "Server connected successfully"
    })
  }
});

module.exports = router;
