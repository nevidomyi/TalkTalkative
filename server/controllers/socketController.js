const Message = require("../models/message");

module.exports = (io) => {
  io.on("connection", (client) => {
    console.log("New socket connection");

    client.on("disconnect", () => {
      console.log("user disconnected");
    });

    client.on("message", (data) => {
      const message = {
          text: data.text,
          username: data.username,
          owner: data.owner,
        },
        m = new Message(message);

      try {
        m.save();
      } catch (error) {
        throw new Error();
      }
      data.timeStamp = new Date();
      io.emit("messageResponse", data);
    });
  });
};
