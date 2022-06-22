DROP TABLE IF EXISTS telegraphs;

CREATE TABLE telegraphs(
    id serial PRIMARY KEY,
    title varchar(256) NOT NULL,
    pseudonym varchar(256) NOT NULL,
    body varchar(500) NOT NULL
);