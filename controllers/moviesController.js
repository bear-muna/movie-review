const express = require('express');
const router = express.Router();
const mysql = require('mysql2');

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'password',
        database: 'movies_db'
    },
    console.log("Connected to database")
);

router.get('/movies', (req, res) => {
    db.query('SELECT movie_name, id FROM movies;', (err, data) => {
        if (err) {
            res.status(500).json({ msg: "Error reading db" });
        } else {
            return res.json(data);
        }
    })
});

router.post('/add-movie', (req, res) => {
    movieName = req.body.movie_name;
    db.query('INSERT INTO movies (movie_name) VALUES (?);', [movieName], (err, data) => {
        if (err) {
            res.status(500).json({ msg: "Error posting into db" });
        } else {
            return res.json({ msg: "Success posting new movie!" });
        }
    })
});



module.exports = router;