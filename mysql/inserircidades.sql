SELECT * FROM estados WHERE id = 25;

INSERT INTO cidades (nome, area, estados_id) 
VALUES ('Campinas', 795, 25);

INSERT INTO cidades (nome, area, estados_id)
VALUES ('Niterói', 133.9, 25);

INSERT INTO cidades(nome, area, estados_id)
VALUES (
    'Caruaru',
    920.6,
    (SELECT id FROM estados WHERE sigla = 'PE')
)