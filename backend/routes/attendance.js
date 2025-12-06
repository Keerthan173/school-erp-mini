const express = require('express');
const Attendance = require('../models/Attendance');
const auth = require('../middleware/auth');   // to ensure only logged-in students can use these routes

const router = express.Router();

// Mark attendance
router.post('/', auth, async (req, res) => {
  try {
    const { status } = req.body;
    const student = req.user.id;    // logged-in student's id (from JWT)
    const date = new Date().setHours(0,0,0,0);

    const record = await Attendance.findOneAndUpdate(
      { student, date },
      { student, date, status },
      { upsert: true, new: true }
    );

    res.status(201).json(record);
  } catch (err) {
    res.status(500).json({ msg: 'Server error', error: err.message });
  }
});

// Get attendance of logged-in student
router.get('/', auth, async (req, res) => {
  try {
    const student = req.user.id;
    const records = await Attendance.find({ student }).sort({ date: -1 });
    res.json(records);
  } catch (err) {
    res.status(500).json({ msg: 'Server error', error: err.message });
  }
});

module.exports = router;
