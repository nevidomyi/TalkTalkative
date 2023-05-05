const mongoose = require("mongoose");
const { Schema } = mongoose;

const chatSchema = new Schema({
  title: String,
  users: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  ],
  category: {
    type: Schema.Types.ObjectId,
    ref: "Category",
    required: true,
  },
});

module.exports = mongoose.model("Chat", chatSchema);
