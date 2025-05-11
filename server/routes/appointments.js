const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const Appointment = require('../models/Appointment');
const Pet = require('../models/Pet');

// Book appointment (OWNER)
router.post('/', auth, async (req, res) => {
  try {
    if (req.user.role !== 'owner') return res.status(403).json({ message: 'Forbidden' });

    const { pet, vet, datetime, description } = req.body;

    // Check that the pet belongs to owner
    const ownedPet = await Pet.findOne({ _id: pet, owner: req.user.id });
    if (!ownedPet) return res.status(404).json({ message: 'Pet not found for this owner' });

    const appointment = new Appointment({
      pet,
      vet,
      owner: req.user.id,
      datetime: new Date(datetime),
      description,
    });

    await appointment.save();
    res.status(201).json(appointment);
  } catch (err) {
    res.status(500).json({ message: 'Error creating appointment' });
  }
});

module.exports = router;