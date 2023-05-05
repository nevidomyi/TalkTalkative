const messageModel = require("../models/message");
const chatModel = require("../models/chat");
const categoryModel = require("../models/category");

class ChatService {
  Message = messageModel;
  Chat = chatModel;
  Category = categoryModel;

  async isUserBelong(chatId, userId) {
    try {
      const chat = await this.Chat.findById(chatId);
      const userBelong = chat.users.find((user) => user === userId);
      if (userBelong) return true;
      return false;
    } catch (error) {
      console.log(error);
      throw new Error("Chat is undefined");
    }
  }

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

  async addCategory(name) {
    const category = await this.Category.create({ name });
    return category;
  }

  async editCategory(id, name) {
    const category = await this.Category.findByIdAndUpdate(
      id,
      { name },
      { returnDocument: "after" }
    );
    return category;
  }

  async deleteCategory(id) {
    const category = await this.Category.findByIdAndDelete(id);
    return category;
  }

  async addChat(name, userId, categoryId) {
    const chat = await this.Chat.create({
      title: name,
      users: userId,
      category: categoryId,
    });
    return chat;
  }

  async editChat(id, name) {
    const chat = await this.Chat.findByIdAndUpdate(
      id,
      { title: name },
      { returnDocument: "after" }
    );
    return chat;
  }

  async deleteChat(id) {
    const chat = await this.Chat.findByIdAndDelete(id);
    return chat;
  }

  async joinToChat(userId, chatId) {
    const chat = await this.Chat.findByIdAndUpdate(
      chatId,
      { users: userId },
      { returnDocument: "after" }
    );
    return chat;
  }

  async deleteFromChat(userId, chatId) {
    const chat = await this.Chat.findByIdAndUpdate(chatId, {
      $pull: { users: userId },
    });
    return chat;
    // chat.users = chat.users.filter(u => u._id.toString() !== userId)
  }

  //TODO joinToChat, deleteFromChat
}

module.exports = new ChatService();
