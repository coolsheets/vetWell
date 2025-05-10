const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['owner', 'vet'], default: 'owner' },
  name: String,
});

module.exports = mongoose.model('User', userSchema);