const mongoose = require('mongoose');

const petSchema = new mongoose.Schema({
  name: String,
  species: String,
  breed: String,
  age: Number,
  owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  records: [{
    date: Date,
    type: String,
    notes: String
  }]
});

module.exports = mongoose.model('Pet', petSchema);

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