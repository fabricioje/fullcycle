CREATE DATABASE IF NOT EXISTS nodedb;
-- USE dev;
-- CREATE TABLE IF NOT EXISTS (...);

create table if not exists people(id int not null auto_increment, name varchar(255), primary key (id));