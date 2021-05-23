import express from 'express';
import { spotifyCrendentials } from '../secrets';

const app = express();

app.get('/api/spotify-credentials', (req, res, next) => {
    const clientId = spotifyCrendentials.clientId;
    const clientSecret = spotifyCrendentials.clientSecret;
    const redirectUri = spotifyCrendentials.redirectUri;

    const spotifyBody = { clientId, clientSecret, redirectUri };
    res.json(spotifyBody);
  });