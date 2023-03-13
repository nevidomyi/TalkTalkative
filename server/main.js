require('dotenv').config();
const express = require('express');
const app = express();
const router = require('./routes/index');
const mongoose = require('mongoose');
const cors = require('cors');

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
app.use(cors());

app.use('/', router);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

const server = app.listen(app.get("port"), () => {
  console.log(`server is active http://localhost:${app.get("port")}`);
});
io = require('socket.io')(server);
require('./controllers/chatController')(io);
