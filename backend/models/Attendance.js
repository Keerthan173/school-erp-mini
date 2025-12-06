// This file defines how attendance records are stored in MongoDB.

const mongoose = require('mongoose');

const attendanceSchema = new mongoose.Schema({
  student: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  // type: ObjectId → refers to another document in the database
  // ref: 'User' → connects this to the User model
  date: { type: Date, required: true },
  status: { type: String, enum: ['present', 'absent'], required: true }
}, { timestamps: true });

attendanceSchema.index({ student: 1, date: 1 }, { unique: true });
// This ensures the pair (student, date) must be unique in the entire collection.
// For each student, only one attendance entry is allowed per date.

module.exports = mongoose.model('Attendance', attendanceSchema);
