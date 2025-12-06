const express = require('express');
const Booking = require('../models/Booking');
const Bus = require('../models/Bus');
const auth = require('../middleware/auth');

const router = express.Router();

// Create booking
router.post('/', auth, async (req, res) => {
  try {
    const student = req.user.id;
    const { busId } = req.body;

    const bus = await Bus.findById(busId);
    if (!bus) return res.status(404).json({ msg: "Bus not found" });

    if (bus.seatsAvailable <= 0)
      return res.status(400).json({ msg: "No seats available" });

    const seatNumber = bus.seatsTotal - bus.seatsAvailable + 1;

    const booking = new Booking({
      student,
      bus: busId,
      seatNumber,
    });

    await booking.save();

    bus.seatsAvailable -= 1;
    await bus.save();

    res.status(201).json(booking);
  } catch (err) {
    res.status(500).json({ msg: 'Server error', error: err.message });
  }
});

// Get user bookings
router.get('/', auth, async (req, res) => {
  try {
    const student = req.user.id;
    const bookings = await Booking.find({ student }).populate('bus');
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ msg: 'Server error', error: err.message });
  }
});

module.exports = router;
