const userValidation = require('./userValidation');
const userModel = require('../models/user');
const jwtHandler = require('./jwtHandler');

class UserService {
  User = userModel;

  async create (payload) {
    const data = userValidation(payload);
    console.log(data);
    if (!data.error) {
      return await this.User.create(data.value);
    } else {
      return data.error;
    }
  }

  async update (payload) {
    const data = userValidation(payload);
    if (!data.error) {
      return await this.User.findByIdAndUpdate(data.value.id, data.value, {returnDocument: 'after'});
    } else {
      return data.error;
    }
  }

  async delete (id, password) {
    try {
      const user = await this.User.findById(id);
      if (!user) {
        throw new Error('User not found');
      }

      const passwordIsValid = await user.passwordComparison(password);
      if (!passwordIsValid) {
        throw new Error('Invalid password');
      }

      try {
        return this.User.findByIdAndDelete(user.id);
      } catch (e) {
        console.error(e);

        throw new Error("User or password don't match");
      }
    } catch (error) {
      console.error(error);

      throw new Error("User or password don't match");
    }
  }
  

  async getUser (id) {
    try {
      const user = await this.User.findById(id);
      if (!user) {
        throw new Error('User not found');
      }

      const answer = {
        id: user._id.toString,
        username: user.username,
        contact_info: user.contact_info,
        avatar: user.avatar,
        status: user.status,
      }

      return answer;
    } catch (error) {
      console.log(error);

      throw new Error("User can't be found")
    }
  }

  async authenticate (email, password) {
    try {
      const user = await this.User.findOne({email: email});
      if (!user) {
        throw new Error('User not found');
      }
    
      const passwordIsValid = await user.passwordComparison(password);
      if (!passwordIsValid) {
        throw new Error('Invalid password');
      }
    
      const jwt = jwtHandler.issueToken({ userId: user._id });
      if (!jwt.token) {
        throw new Error("Issue token wasn't success");
      }
    
      const answer = {
        id: user._id.toString,
        username: user.username,
        email: user.email,
        contact_info: user.contact_info,
        avatar: user.avatar,
        status: user.status,
        token: jwt.token,
      };

      return answer;
    } catch (error) {
      console.error(error);
  
      throw new Error('Invalid password');
    }
  }

  async verify (token) {
    try {
      const userId = jwtHandler.verifyToken(token);

      const user = await this.User.findById(userId);
      if (!user) {
        throw new Error('User not found');
      }

      return {
        access: true,
        user: user,
      }
    } catch (error) {
      console.error(error);

      throw new Error('Unauthorized access denied');
    } 
  }

}

module.exports = new UserService();