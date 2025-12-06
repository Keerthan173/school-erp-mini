require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();    // Create the Express app
app.use(cors());
app.use(express.json());

// routes
const authRouter = require('./routes/auth');    // imports all routes from routes/auth.js
app.use('/api/auth', authRouter);

const attendanceRouter = require('./routes/attendance');
const busesRouter = require('./routes/buses');
const bookingsRouter = require('./routes/bookings');
app.use('/api/attendance', attendanceRouter);
app.use('/api/buses', busesRouter);
app.use('/api/bookings', bookingsRouter);

// connect to mongo
const MONGO = process.env.MONGO_URI;
mongoose.connect(MONGO)
  .then(() => console.log('MongoDB connected'))
  .catch(err => {
    console.error('MongoDB connection error:', err.message);
    process.exit(1);
  });

const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=> console.log(`Server running on port ${PORT}`));
