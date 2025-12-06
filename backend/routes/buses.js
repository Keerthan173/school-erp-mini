const express = require('express');
const Bus = require('../models/Bus');
const auth = require('../middleware/auth');

const router = express.Router();

// Get all buses
router.get('/', auth, async (req, res) => {
  try {
    const buses = await Bus.find({});
    res.json(buses);
  } catch (err) {
    res.status(500).json({ msg: "Server error" });
  }
});

// Add new bus (ADMIN)
router.post('/', auth, async (req, res) => {
  try {
    const { busNumber, route, seatsTotal } = req.body;

    const bus = new Bus({
      busNumber,
      route,
      seatsTotal,
      seatsAvailable: seatsTotal,
    });

    await bus.save();
    res.status(201).json(bus);
  } catch (err) {
    res.status(500).json({ msg: 'Server error', error: err.message });
  }
});

module.exports = router;
