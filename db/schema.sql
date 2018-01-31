CREATE database burgers_db;
USE burgers_db;

CREATE table burgers (
    item_id INT(11) NOT NULL AUTO_INCREMENT,
    burger_name varchar(100) NOT NULL,
    devoured boolean,
    date TIMESTAMP,
    PRIMARY KEY (item_id)
);

