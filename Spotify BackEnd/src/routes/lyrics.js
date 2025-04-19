import express from 'express';
import axios from 'axios';

const lyricsRouter = express.Router();

const RAPIDAPI_KEY = 'abab1b27ecmsh7d537c79bd3e382p135fc7jsnc84f502a6b61'; // Replace with your actual key
// const RAPIDAPI_KEY = 'ca79981ce0msh4db1b706592de13p1b68f2jsn95157f7d1fce'; // Replace with your actual key

lyricsRouter.get('/', async (req, res) => {
  const { artist, track } = req.query;

  try {
    // Step 1: Search for the song
    const searchResponse = await axios.get('https://shazam.p.rapidapi.com/search', {
      params: {
        term: `${track} ${artist}`,
        locale: 'en-US',
        offset: '0',
        limit: '1'
      },
      headers: {
        'X-RapidAPI-Key': RAPIDAPI_KEY,
        'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
      }
    });

    const hits = searchResponse.data.tracks?.hits;
    if (!hits || !hits.length) {
      return res.status(404).json({ message: 'Song not found' });
    }

    const trackKey = hits[0].track.key;

    // Step 2: Fetch lyrics
    const lyricsResponse = await axios.get('https://shazam.p.rapidapi.com/songs/get-details', {
      params: { key: trackKey, locale: 'en-US' },
      headers: {
        'X-RapidAPI-Key': RAPIDAPI_KEY,
        'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
      }
    });

    const lyricsSection = lyricsResponse.data.sections?.find(section => section.type === 'LYRICS');

    if (!lyricsSection || !lyricsSection.text) {
      return res.status(404).json({ message: 'Lyrics not available' });
    }

    res.json({ lyrics: lyricsSection.text });

  } catch (err) {
    console.error("Error details:", err.message);
    res.status(500).json({ error: 'Server error. Check terminal for more info.' });
  }
});

export default lyricsRouter;
