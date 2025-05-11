const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.get('/', async (req, res) => {
  if (req.query.role) {
    try {
      const users = await User.find({ role: req.query.role }).select('-password');
      res.json(users);
    } catch (err) {
      res.status(500).json({ message: 'Error fetching users' });
    }
  } else {
    res.status(400).json({ message: 'Role query parameter required' });
  }
});

module.exports = router;