DROP DATABASE IF EXISTS sushis_db;
CREATE DATABASE IF NOT EXISTS sushis_db;
USE sushis_db;

-- If the table already exists, remove it before trying to create the table again
DROP TABLE IF EXISTS sushis;

-- Create the sushis table
CREATE TABLE sushis (
    id int NOT NULL AUTO_INCREMENT,
    sushi_name varchar(255) NOT NULL,
    devoured BOOL DEFAULT false,
    PRIMARY KEY (id)
);

SELECT * FROM sushis;