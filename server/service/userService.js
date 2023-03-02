const userValidation = require('../models/userValidation');
const userModel = require('../models/user');

class UserService {
  User = userModel;

  async create (payload) {
    const data = userValidation(payload);
    if (!data.error) {
      return await this.User.create(data);
    } else {
      return data.error;
    }
  }

  async getUser (id) {
    const user = await this.User.findById(id);
    console.log(user);
    return user;
  }
}

module.exports = new UserService();