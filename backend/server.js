const express = require('express');
const cors = require('cors');
const fs = require('fs');
const app = express();
const PORT = 5000;

app.use(cors());

// Load tourist places data
let rawData = fs.readFileSync('places.json');
let touristPlaces = JSON.parse(rawData);

// API to get details of all tourist places
app.get('/api/places', (req, res) => {
  res.json(touristPlaces);
});

// API to get details of a specific tourist place by ID
app.get('/api/places/:id', (req, res) => {
  const placeId = parseInt(req.params.id);
  const place = touristPlaces.find(p => p.id === placeId);
  if (place) {
    res.json(place);
  } else {
    res.status(404).send('Tourist place not found');
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
