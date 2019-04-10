DROP DATABASE IF EXISTS letswork;
CREATE DATABASE letswork;

\c letswork;

CREATE TABLE users (
    id SERIAL PRIMARY KEY NOT NULL,
    firstname VARCHAR NOT NULL,
    lastname VARCHAR NOT NULL,
    username VARCHAR UNIQUE NOT NULL,
    email VARCHAR UNIQUE NOT NULL,
    avatar VARCHAR UNIQUE NOT NULL,
    occupation VARCHAR NOT NULL,
    created TIMESTAMP DEFAULT NOW(),
    updated TIMESTAMP DEFAULT NOW()
);

CREATE TABLE posts (
    user_id INT REFERENCES users(id) ,
    caption VARCHAR NOT NULL,
    likes VARCHAR NOT NULL,
    comments VARCHAR NOT NULL,
    created TIMESTAMP DEFAULT NOW(),
    updated TIMESTAMP DEFAULT NOW(),
    avatar VARCHAR REFERENCES users(avatar)
);

CREATE TABLE comments (
    user_id INT REFERENCES users(id),
    comment VARCHAR NOT NULL,
    created TIMESTAMP DEFAULT NOW(),
    updated TIMESTAMP DEFAULT NOW(),
    avatar VARCHAR REFERENCES users(avatar)

);

INSERT INTO users
(firstname, lastname, username, email, avatar, occupation) VALUES
('Wolfgang', 'Puck','WolfgangP', 'WolfgangP@chefs.com', './projectpictures/cooks/Wolfgang.jpg', 'Cook'),
('Rachel','Ray','RRay', 'RRay@chefs.com', './projectpictures/cooks/RachelRay.jpg', 'Cook'),
('Emeril', 'Lagasse','ELagasse','ELagasse@chefs.com', './projectpictures/cooks/ELagasse.jpg', 'Cook'),
('Gordon','Ramsay','GRamsay', 'GRamsay@chefs.com', './projectpictures/cooks/gordon.jpg', 'Cook'),
('Whitney','Bibeau','DJWhitney', 'DJWhitney@mixmusic.com', './projectpictures/dj/djw.jpg', 'DJ'),
('DJ','Khaled', 'DJKhaled', 'DJKhaled@music.com', './projectpictures/dj/djk.jpg', 'DJ'),
('Swiss','Beats','SBeats', 'SBeats@mix.com', './projectpictures/dj/djs.jpg', 'DJ'),
('DJ', 'Marshmello','DJMello', 'Marshmello@email.com', './projectpictures/dj/djm.jpg', 'DJ'),
('Jake','Smith','JSmith', 'JSmith@email.com', './projectpictures/cleaner/Jake.jpg', 'Cleaner'),
('Joe','Johnson','JJohnson', 'JJohnson@email.com', './projectpictures/cleaner/Joe.jpg', 'Cleaner'),
('Matthew','Robinson','MRobbie', 'TheRobster@email.com', './projectpictures/cleaner/Matthew.jpg', 'Cleaner'),
('Sara','Cugai','SCugai', 'SCugai@email.com', './projectpictures/cleaner/Sara.jpg', 'Cleaner'),
('Jake','Maladino','JakeM', 'JMaladino@email.com', './projectpictures/servers/jake.jpg', 'Servers'),
('Sue','Wou','SuWou', 'SueWou@email.com', './projectpictures/servers/sue.jpg', 'Servers'),
('Kate', 'Sanders','KSanders', 'KSanders@email.com', './projectpictures/servers/kate.jpeg', 'Servers'),
('Max','Amillion','MMillions', 'MaxAmillion@email.com', './projectpictures/servers/max.png', 'Servers'),
('Balloon','Barn', 'BalloonBarn', 'BalloonBarn@specialevents.com', './projectpictures/ke/balloons.jpg', 'Kids Entertainment'),
('Candy','Craze','CandyCraze', 'CandyCraze@sweetteeth.com', './projectpictures/ke/candy.png', 'Kids Entertainment'),
('Clown','Town','ClownTown', 'ClownTown@specialevents.com', './projectpictures/ke/clowns.jpg', 'Kids Entertainment'),
('Toon','Costumes','Costoons', 'ToonTumes@email.com', './projectpictures/ke/MASCOTS3.jpg', 'Kids Entertainment');

INSERT INTO posts
(caption, likes, comments)VALUES
('poppin gz','62783871','hey jo');

INSERT INTO comments
(comment)VALUES
('the users comment')
