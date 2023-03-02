const { asyncHandler } = require('../controllers/utils');
const userService = require('../service/userService');

const usersController = {
  create: asyncHandler( async (req, res) => {
      const user = await userService.create(req.body);
      res.json(user);
    }
  ),
  getUser: asyncHandler( async (req, res) => {
      const user = await userService.getUser(req.params.id);
      res.json(user);
    }
  )
};

module.exports = usersController;