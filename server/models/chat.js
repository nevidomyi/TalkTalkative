const mongoose = require("mongoose");
const { Schema } = mongoose;

const chatSchema = new Schema({
  title: String,
  users: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  category: {
    type: Schema.Types.ObjectId,
    ref: "Category",
  },
});

module.exports = mongoose.model("Chat", chatSchema);
