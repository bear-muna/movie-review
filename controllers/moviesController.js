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
    db.query('SELECT movies.id, movies.movie_name, reviews.review FROM reviews RIGHT JOIN movies ON reviews.movie_id = movies.id;', (err, data) => {
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

router.put('/update-review', (req, res) => {
    const movieName = req.body.movie_name;
    const newReview = req.body.review;
    let movieID;
    db.query('SELECT movie_name, id FROM movies;', (err, data) => {
        if (err) {
            res.status(500).json({ msg: "Error reading db" });
        } else {
            for (let i = 0; i < data.length; i++) {
                if (movieName == data[i].movie_name) {
                    movieID = data[i].id;
                    break;
                }
            }
            db.query('UPDATE reviews SET review = ? WHERE movie_id = ?;', [newReview, movieID], (err ,data) => {
                if (err) {
                    res.status(500).json({ msg: "Error updating db" });
                } else {
                    res.json({ msg: "Successfully updated movie review!" });
                }
            })
        }
    })
})

module.exports = router;