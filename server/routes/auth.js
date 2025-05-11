const express = require('express');
const router = express.Router();
const User = require('../models/User');

// List users by role (e.g., vets)
router.get('/', async (req, res) => {
  if (req.query.role) {
    try {
      const users = await User.find({ role: req.query.role }).select("-password");
      res.json(users);
    } catch (err) {
      res.status(500).json({ message: 'Cannot fetch users' });
    }
  } else {
    // add your other auth endpoints here
    res.status(400).json({ message: "Role query required" });
  }
});

module.exports = router;