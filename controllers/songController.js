// src/controllers/songController.js
let songs = [
  { id: 1, title: 'Bohemian Rhapsody', artist: 'Queen', genre: 'Rock' },
  { id: 2, title: 'Imagine', artist: 'John Lennon', genre: 'Pop' },
  { id: 3, title: 'Smells Like Teen Spirit', artist: 'Nirvana', genre: 'Grunge' }
];

let nextId = 4;

const getAllSongs = (req, res) => {
  const { genre } = req.query;
  let result = songs;
  if (genre) {
    result = songs.filter(song => 
      song.genre.toLowerCase().includes(genre.toLowerCase())
    );
  }
  res.json(result);
};

const getSongById = (req, res) => {
  const { id } = req.params;
  const song = songs.find(s => s.id === parseInt(id));
  if (!song) {
    return res.status(404).json({ error: 'Песня не найдена' });
  }
  res.json(song);
};

const createSong = (req, res) => {
  const { title, artist, genre = 'Unknown' } = req.body;
  const newSong = { id: nextId++, title, artist, genre };
  songs.push(newSong);
  res.status(201).json(newSong);
};

const updateSong = (req, res) => {
  const { id } = req.params;
  const index = songs.findIndex(s => s.id === parseInt(id));
  if (index === -1) {
    return res.status(404).json({ error: 'Песня не найдена' });
  }
  const { title, artist, genre } = req.body;
  songs[index] = { ...songs[index], title, artist, genre };
  res.json(songs[index]);
};

const deleteSong = (req, res) => {
  const { id } = req.params;
  const initialLength = songs.length;
  songs = songs.filter(s => s.id !== parseInt(id));
  if (songs.length === initialLength) {
    return res.status(404).json({ error: 'Песня не найдена' });
  }
  res.status(204).send();
};

module.exports = {
  getAllSongs,
  getSongById,
  createSong,
  updateSong,
  deleteSong
};