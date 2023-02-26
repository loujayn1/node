const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  email: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const MyData = mongoose.model('userSchema', userSchema);

module.exports = user;
