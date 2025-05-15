import express from 'express';
import Movie from '../models/Movie.js';

const router = express.Router();

router.get('/', async (req, res) => {
    const movies = await Movie.find().limit(10);
    res.json({ data: movies });
});

router.get('/:id', async (req, res) => {
    try {
        const movie = await Movie.findById(req.params.id);
        if (!movie) return res.status(404).json({ message: 'Movie not found' });
        res.json(movie);
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
});

export default router;
