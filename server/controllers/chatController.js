const { asyncHandler } = require("./utils");
const chatService = require("../service/chatService");
const { verifyToken } = require("../service/jwtHandler");

const chatController = {
  isUserBelong: asyncHandler(async (req, res, next) => {
    const userId = await verifyToken(req.headers.Authorization);
    const userBelong = chatService.isUserBelong(req.params.id, userId);
    if (userBelong) next();
    return new Error("Access denied for this user");
  }),

  getMessages: asyncHandler(async (req, res) => {
    const messages = await chatService.getMessages();
    res.json(messages);
  }),

  getChats: asyncHandler(async (req, res) => {
    const chats = await chatService.getChats();
    res.json(chats);
  }),

  getCategories: asyncHandler(async (req, res) => {
    const categories = await chatService.getCategories();
    res.json(categories);
  }),

  addCategory: asyncHandler(async (req, res) => {
    const category = await chatService.addCategory(req.body.name);
    res.json(category);
  }),

  editCategory: asyncHandler(async (req, res) => {
    const category = await chatService.editCategory(
      req.params.id,
      req.body.name
    );
    res.json(category);
  }),

  deleteCategory: asyncHandler(async (req, res) => {
    const category = await chatService.deleteCategory(req.params.id);
    res.json(category);
  }),

  addChat: asyncHandler(async (req, res) => {
    const chat = await chatService.addChat(
      req.body.name,
      req.body.userId,
      req.params.categoryId
    );
    res.json(chat);
  }),

  editChat: asyncHandler(async (req, res) => {
    const chat = await chatService.editChat(req.params.chatId, req.body.name);
    res.json(chat);
  }),

  deleteChat: asyncHandler(async (req, res) => {
    const chat = await chatService.deleteChat(req.params.chatId);
    res.json(chat);
  }),

  // joinToChat: asyncHandler(async (req, res) => {
  //   const chat = await chatService.joinToChat()
  // })
};
module.exports = chatController;
