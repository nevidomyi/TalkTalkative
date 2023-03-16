const { asyncHandler } = require('../controllers/utils');
const userService = require('../service/userService');

const usersController = {
  create: asyncHandler( 
    async (req, res) => {
      const user = await userService.create(req.body);
      res.json(user);
    }
  ),
  update: asyncHandler(
    async (req, res) => {
      const user = await userService.update(req.body);
      //answer with hashed password, is it bad? 
      res.json(user);
    }
  ),
  delete: asyncHandler(
    async (req, res) => {
      const user = await userService.delete(req.body.id, req.body.password);
      res.json(user);
    }
  ),
  getUser: asyncHandler( 
    async (req, res) => {
      let id = "";
      try {
        await userService.verify(req.headers.authorization);
      } catch (error) {
        throw new Error('Invalid token');
      }

      if (req.params.id === "1") {
        id = await userService.verify(req.headers.authorization);
      } else {
        id = req.params.id;
      }

      const user = await userService.getUser(id);

      console.log(user);

      res.json(user);
    }
  ),
  //getUser, getProfile

  authenticate: asyncHandler(
    async(req, res) => {
      const user = await userService.authenticate(req.body.email, req.body.password);
      res.json(user);
    }
  ),
  verify: asyncHandler(
    async(req, res) => {
      const user = await userService.verify(req.params.token);
      res.json(user);
    }
  )
};

module.exports = usersController;