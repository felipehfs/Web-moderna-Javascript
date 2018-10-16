CREATE TABLE IF NOT EXISTS cidades (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    nome VARCHAR(255) NOT NULL,
    estados_id INT UNSIGNED NOT NULL,
    area DECIMAL(10, 2),
    PRIMARY KEY(id),
    FOREIGN KEY(estados_id) REFERENCES estados(id)
);

CREATE TABLE IF NOT EXISTS teste(
    id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY
);

DROP TABLE IF EXISTS teste;