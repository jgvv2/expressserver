const goHighLevelToken = ''; //gohighleveltoken
const nextechToken = ''; //nextechtoken

// Example of using different tokens
app.post('/gohighlevel', async (req, res) => {
  try {
    const response = await axios.post('https://gohighlevel.api.endpoint', req.body, {
      headers: {
        'Authorization': `Bearer ${goHighLevelToken}`,
        'Content-Type': 'application/json'
      }
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/nextech', async (req, res) => {
  try {
    const response = await axios.post('https://nextech.api.endpoint', req.body, {
      headers: {
        'Authorization': `Bearer ${nextechToken}`,
        'Content-Type': 'application/json'
      }
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
