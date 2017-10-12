create database burgers_db;

use burgers_db;

create table burgers (
	id INTEGER(11) auto_increment not null,
	burger_name VARCHAR(100),
	devoured BOOLEAN default false,
	ddate TIMESTAMP() default getDate(),
	primary key (id)
)