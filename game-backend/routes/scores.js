const express = require('express');
const router = express.Router();
const Score = require('../models/Score');

router.post('/save-score', async (req, res) => {
  const { username, score } = req.body;
  try {
    const newScore = new Score({ username, score });
    await newScore.save();
    res.status(200).json({ message: 'Score saved!' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to save score.' });
  }
});

module.exports = router;