const messageModel = require("../models/message");
const chatModel = require("../models/chat");
const categoryModel = require("../models/category");

class ChatService {
  Message = messageModel;
  Chat = chatModel;
  Category = categoryModel;

  async getMessages() {
    const data = await this.Message.find();
    return data;
  }

  async getChats() {
    const data = await this.Chat.find();
    return data;
  }

  async getCategories() {
    const data = await this.Category.find();
    return data;
  }

  // async setChats(user, title, category) {
  //   const data = await this.Chat.create(title, [user], category);
  // }

  //TODO joinToChat, setChats, setCategory, deleteFromChat
}

module.exports = new ChatService();
