const { json } = require("express");
const Message = require("../models/message");

module.exports = io => {
  io.on("connection", client => {
    console.log("New socket connection");
    
    client.on("disconnect", () => {
      console.log("user disconnected");
    });

    client.on("message", (data) => {
      const message = {
        content: data.content,
      }
      console.log(message);
      io.emit("message", message);
    });

  })
}