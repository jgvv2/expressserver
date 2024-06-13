const express = require('express');
const axios = require('axios');

const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Route to handle requests to GoHighLevel
app.post('/gohighlevel', async (req, res) => {
  try {
    const response = await axios.post('https://gohighlevel.api.endpoint', req.body, {
      headers: {
        'Authorization': 'Bearer your_token',
        'Content-Type': 'application/json'
      }
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Route to handle requests to Nextech
app.post('/nextech', async (req, res) => {
  try {
    const response = await axios.post('https://nextech.api.endpoint', req.body, {
      headers: {
        'Authorization': 'Bearer your_token',
        'Content-Type': 'application/json'
      }
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Justgoingviral listening at http://localhost:${port}`);
});