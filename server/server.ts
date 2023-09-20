// server.ts
import express, { Request, Response } from 'express';
import cors from 'cors';
import Sentiment from 'sentiment';

const sentiment = new Sentiment();
const app = express();
const Port = 3000;

app.use(express.json());
app.use(cors());

app.post('/analyze-sentiment', (req: Request, res: Response) => {
  if (!req.body || !req.body.text) {
    return res.status(400).json({ error: 'Missing or invalid request body' });
  }

  const { text } = req.body;
  const result = sentiment.analyze(text);
  res.json(result);
});

app.listen(Port, () => {
  console.log(`Server is running on port ${Port}`);
});
