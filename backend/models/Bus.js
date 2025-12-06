const mongoose = require('mongoose');

const busSchema = new mongoose.Schema({
  busNumber: { type: String, required: true },
  route: { type: String, required: true },
  seatsTotal: { type: Number, required: true },
  seatsAvailable: { type: Number, required: true }
}, { timestamps: true });

module.exports = mongoose.model('Bus', busSchema);
