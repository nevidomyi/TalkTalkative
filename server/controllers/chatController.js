const { asyncHandler } = require("./utils");
const chatService = require("../service/chatService");

const chatController = {
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
};
module.exports = chatController;
