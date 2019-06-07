DROP DATABASE IF EXISTS elovution;
CREATE DATABASE elovution;

--Connect to DB
\c elovution

CREATE TABLE users(
	id SERIAL PRIMARY KEY,
	username VARCHAR(32),
	password_digest VARCHAR(60)
);

CREATE TABLE post(
	id SERIAL PRIMARY KEY,
	post_title VARCHAR(60),
	body VARCHAR(255),
	user_id INTEGER REFERENCES users(id) --foreign key
	-- rating 
);

