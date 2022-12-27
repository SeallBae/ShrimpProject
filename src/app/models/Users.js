const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const User = new Schema({
  id: ObjectId,
  username: {type: String, maxLength: 50},
  password: {type: String, maxLength: 50},
  createAt: {type: Date, default: Date.now},
  updateAt: {type: Date, default: Date.now},
});
module.exports = mongoose.model('user_info', User);