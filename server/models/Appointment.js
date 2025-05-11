const mongoose = require('mongoose');
const appointmentSchema = new mongoose.Schema({
  pet: { type: mongoose.Schema.Types.ObjectId, ref: 'Pet' },
  vet: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  datetime: Date,
  description: String,
  status: { type: String, enum: ['scheduled', 'completed', 'cancelled'], default: 'scheduled' }
});
module.exports = mongoose.model('Appointment', appointmentSchema);