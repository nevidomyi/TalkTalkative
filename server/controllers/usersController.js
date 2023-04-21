const { asyncHandler } = require("../controllers/utils");
const userService = require("../service/userService");

const usersController = {
  create: asyncHandler(async (req, res) => {
    const user = await userService.create(req.body);
    res.json(user);
  }),
  update: asyncHandler(async (req, res) => {
    const user = await userService.update(req.headers.authorization, req.body);
    res.json(user);
  }),
  delete: asyncHandler(async (req, res) => {
    const user = await userService.delete(req.body.id, req.body.password);
    res.json(user);
  }),
  getUser: asyncHandler(async (req, res) => {
    try {
      await userService.verify(req.headers.authorization);
    } catch (error) {
      throw new Error("Invalid token");
    }

    const user = await userService.getUser(req.params.id);
    res.json(user);
  }),

  getProfile: asyncHandler(async (req, res) => {
    let id = "";

    try {
      id = await userService.verify(req.headers.authorization);
    } catch (error) {
      throw new Error("Invalid token");
    }

    const user = await userService.getUser(id);
    res.json(user);
  }),
  //getUser, getProfile

  authenticate: asyncHandler(async (req, res) => {
    const user = await userService.authenticate(
      req.body.email,
      req.body.password
    );
    res.json(user);
  }),
  verify: asyncHandler(async (req, res) => {
    const user = await userService.verify(req.params.token);
    res.json(user);
  }),
};

module.exports = usersController;
