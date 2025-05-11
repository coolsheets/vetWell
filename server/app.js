const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

app.use(cors({ origin: process.env.CORS_ORIGIN }));
app.use(express.json());

// routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/pets', require('./routes/pets'));
app.use('/api/appointments', require('./routes/appointments'));
// If using users endpoint alternative (see above):
// app.use('/api/users', require('./routes/users'));

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
app.listen(5000, () => console.log('Server running on 5000'));