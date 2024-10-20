// app.js
const express = require('express');
const axios = require('axios');
const app = express();

// Middleware
app.use(express.json());

// OpenWeatherMap API key
const apiKey = 'bfc5b56dbd585752a92a53f447a37411';

// Route to get weather data
app.get('/weather/:city', async (req, res) => {
  const city = req.params.city;

  try {
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather`, {
      params: {
        q: city,
        appid: apiKey,
        units: 'metric' // You can use 'imperial' for Fahrenheit
      }
    });
    const weatherData = response.data;
    res.json(weatherData);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
});

// Basic route
app.get('/', (req, res) => res.send('Hello World!'));

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));
