
const mongoose = require('mongoose');
const petSchema = new mongoose.Schema({
  name: String,
  breed: String,
  age: Number,
  photo: String,
  owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  medicalHistory: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Record' }]
});
module.exports = mongoose.model('Pet', petSchema);