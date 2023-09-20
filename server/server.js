"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// server.ts
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const sentiment_1 = __importDefault(require("sentiment"));
const sentiment = new sentiment_1.default();
const app = (0, express_1.default)();
const Port = 3000;
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.post('/analyze-sentiment', (req, res) => {
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
