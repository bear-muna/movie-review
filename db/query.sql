USE movies_db;

SELECT *
FROM movies;

SELECT *
FROM reviews;

SELECT *
FROM reviews
JOIN movies
ON reviews.movie_id = movies.id;

SELECT movies.movie_name, reviews.review
FROM reviews
JOIN movies
ON reviews.movie_id = movies.id;