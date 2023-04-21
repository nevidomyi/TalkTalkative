const categories = [
  { name: "Commons" },
  { name: "Nosense" },
  { name: "Know how" },
];

const mongoose = require("mongoose");
const myModel = require("./myModel");
const seeds = categories;

mongoose
  .connect("mongodb://localhost/myDatabase", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to mongodb");
    return myModel.insertMany(seeds);
  })
  .then(() => {
    console.log("Seeding complete");
    mongoose.connection.close();
  })
  .catch((err) => console.error(err));
