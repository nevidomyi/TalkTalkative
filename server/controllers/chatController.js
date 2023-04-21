const { asyncHandler } = require("./utils");
const chatService = require("../service/chatService");

const chatController = {
  getMessages: asyncHandler(async (req, res) => {
    const messages = await chatService.getMessages();
    res.json(messages);
  }),
};
module.exports = chatController;
