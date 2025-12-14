// app.js
const express = require('express');
const path = require('path');
const { logger } = require('./middleware/logger');

const app = express();

app.use(express.json());
app.use(logger);

app.use(express.static(path.join(__dirname, 'public')));

const songsRoutes = require('./routes/songsRoutes');
app.use('/api/songs', songsRoutes);

app.use((req, res) => {
  res.status(404).json({ error: 'Маршрут не найден' });
});

module.exports = app;