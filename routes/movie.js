const express = require('express');
const router = express.Router();
const db = require('../db/db');
let movies = db.getMovies();
const Movie = require('../model/movie');

router.get('/', (req, res, next) => {
    if (req.query.rows && !isNaN(Number(req.query.rows))) {
        const rows = Number(req.query.rows);
        return res.status(200).json({success: true, list: movies.slice(0, rows)});
    }

    return res.status(403).json({success: false, message: 'Bad Request'});
});

router.get('/:id', (req, res, next) => {
    const id = Number(req.params.id);

    if (isNaN(id)) {
        return res.status(403).json({success: false, message: 'Bad Request'});
    }

    const movie = movies.find((item) => (item.id === id));

    if (!movie) {
        return res.status(500).json({success: false, message: `Not Found Movie ${id}`});
    }

    return res.status(200).json({success: true, movie});
})

router.post('/', (req, res, next) => {
    console.log(req.body);
    if (!req.body.title) {
        console.log('bad parameter - title');
        return res.status(403).json({success: false, message: 'Bad Requset'});
    }   

    if (typeof req.body.description !== 'string') {
        console.log('bad parameter - description');
        return res.status(403).json({success: false, message: 'Bad Requset'});
    }

    const id = movies.length;
    const movie = new Movie(Object.assign({id}, req.body));
    movies.push(movie);
    return res.status(200).json({success: true, movie: movie});
});

router.patch('/', (req, res, next) => {
    const params = req.body;
    const movie = new Movie(params);
    const old = movies.find((item) => (item.id === movie.id));

    if (old) {
        Object.assign(old, movie);
        return res.status(200).json({success: true, movie});
    }

    return res.status(500).json({success: true, message: `Not Found Movie ${movie.id}`});
});

router.delete('/:id', (req, res, next) => {
    const id = Number(req.params.id);
    const index = movies.findIndex((item) => (Number(item.id) === Number(id)));
    
    if (index > -1) {
        movies = (movies.slice(0, index)).concat(movies.slice(index + 1));     
        return res.status(200).json({success: true});
    }

    return res.status(500).json({success: false});
});

module.exports = router;