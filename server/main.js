const express = require('express');
const app = express();
const router = require('./routes/index');
const mongoose = require('mongoose');

mongoose.set('strictQuery', false);
mongoose.connect(
  process.env.MONGODB_URI ||
    'mongodb://127.0.0.1:27017/talktalkative',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

const db = mongoose.connection;

db.once('open', () => {
  console.log('DB succesfully connected by Mongoose!');
});

app.set('port', process.env.PORT || 3001);

app.use(
  express.urlencoded({
    extended: false
  })
);
app.use(express.json());

app.use('/', router);
app.listen(3001, () => {
  console.log('server is active');
});
