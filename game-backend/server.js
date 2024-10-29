const express = require('express');
const mongoose = require('mongoose');
const scoreRoutes = require('./routes/scores');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb+srv://zaidanwar2804:WyzMdBhPqdHkcSRo@cluster0.hznxh.mongodb.net/")
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

app.use('/api/scores', scoreRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
