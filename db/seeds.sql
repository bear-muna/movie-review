USE movies_db;

INSERT INTO movies (movie_name)
VALUES 
    ("Brother Bear"),
    ("Interstellar"),
    ("John Wick"),
    ("Creed III"),
    ("Everything Everywhere All At Once"),
    ("Warrior")
;

INSERT INTO reviews (review, movie_id)
VALUES
    ("Amazing movie! Great songs!" , 1),
    ("Christopher Nolan has done it again!", 2),
    ("Should've never killed the dog.", 3),
    ("Michael B. Jordan is a beast!", 4),
    ("An absolute tear jerker. GOAT", 5),
    ("Gavin O'Connar is kinda nice with it.", 6)
;