const mongoose = require('mongoose');
const { Schema } = mongoose;
const bcrypt = require("bcrypt");
const userSchema = new Schema(
  {
    username: String,
    password: String,
    email: String,
    contact_info: String,
    avatar: String,
    status: Number,
  },
  {
    timestamps: true
  }
);

//Hashing and salting password for saving

userSchema.pre("save", function(next) {
  const user = this;

  bcrypt
    .hash(user.password, 10)
    .then(hash => {
      user.password = hash;
      next();
    })
    .catch(error => {
      console.log(`Error in hashing password: ${error.message}`);
      next(error);
    });
});

userSchema.pre('findOneAndUpdate', function(next) {
  const user = this._update;

  bcrypt
    .hash(user.password, 10)
    .then(hash => {
      user.password = hash;
      next();
    })
    .catch(error => {
      console.log(`Error in hashing password: ${error.message}`);
      next(error);
    });
})

//Comparing hashed password in DB and hashed value from client side

userSchema.methods.passwordComparison = async function(inputPassword) {
  return await bcrypt.compare(inputPassword, this.password).catch((r) => r);
};

module.exports = mongoose.model('User', userSchema);