// src/routes/songsRoutes.js
const express = require('express');
const router = express.Router();
const {
  getAllSongs,
  getSongById,
  createSong,
  updateSong,
  deleteSong
} = require('../controllers/songController');
const { validateSong } = require('../middleware/logger');

router.get('/', getAllSongs);
router.get('/:id', getSongById);
router.post('/', validateSong, createSong);
router.put('/:id', validateSong, updateSong);
router.delete('/:id', deleteSong);

module.exports = router;