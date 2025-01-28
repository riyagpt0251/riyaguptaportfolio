// File: backend/app.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Route to handle prediction
app.post('/predict', (req, res) => {
  const { magnitude, depth, distance } = req.body;

  // Basic validation
  if (magnitude === undefined || depth === undefined || distance === undefined) {
    return res.status(400).json({ error: 'Please provide magnitude, depth, and distance.' });
  }

  // Simple prediction logic (placeholder)
  let damageLevel;
  if (magnitude > 7.5) {
    damageLevel = 'Severe';
  } else if (magnitude > 5.5) {
    damageLevel = 'Moderate';
  } else {
    damageLevel = 'Minor';
  }

  // Simulating the influence of depth and distance
  if (depth > 70) {
    damageLevel = 'Minor';
  } else if (distance > 100) {
    damageLevel = 'Moderate';
  }

  // Respond with the prediction
  res.json({ prediction: damageLevel });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
