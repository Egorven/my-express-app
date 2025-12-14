// src/middleware/logger.js
const logger = (req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.originalUrl}`);
  console.log('Тело запроса:', req.body);
  console.log('Query-параметры:', req.query);
  next();
};

const validateSong = (req, res, next) => {
  const { title, artist } = req.body;
  if (!title || !artist) {
    return res.status(400).json({
      error: 'Поля "title" и "artist" обязательны!'
    });
  }
  next();
};

module.exports = { logger, validateSong };