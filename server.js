const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;

const FOOTBALL_API_KEY = 'fd15c23bca1e40788e6a955b1b5a9b31';

app.use(cors());

let cachedMatches = [];
let lastFetchTime = 0;
const CACHE_DURATION = 60 * 1000; 

app.get('/upcoming', async (req, res) => {
  try {
    const now = Date.now();

    if (now - lastFetchTime > CACHE_DURATION) {
      const response = await axios.get(
        'https://api.football-data.org/v4/competitions/BSA/matches?status=SCHEDULED',
        {
          headers: { 'X-Auth-Token': FOOTBALL_API_KEY },
        }
      );
      const twoWeeksLater = new Date(now + 14 * 24 * 60 * 60 * 1000);

      cachedMatches = response.data.matches.
      filter((match) => {
          const matchDate = new Date(match.utcDate);
          return matchDate >= now && matchDate <= twoWeeksLater;
        })
      .map((match) => ({
        home: match.homeTeam.name,
        away: match.awayTeam.name,
        date: match.utcDate,
      }));

      lastFetchTime = now;
    }

    res.json(cachedMatches);
  } catch (error) {
    console.error('Error fetching data:', error.message);
    res.status(500).json({ error: 'Failed to fetch upcoming matches' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
