ALTER TABLE empresas MODIFY cnpj VARCHAR(30);


INSERT INTO empresas 
    (nome, cnpj)
VALUES
    ('Bradesco', 963838392292),
    ('Vale', 020202020233002),
    ('Cielo',2222002920239934);

DESC empresas;
DESC prefeitos;
SELECT * FROM empresas;
SELECT * FROM cidades;

INSERT INTO empresas_unidades 
    (empresa_id, cidade_id, sede)
VALUES 
    (1, 1, 1),
    (1, 2, 0),
    (2, 1, 0),
    (2, 2, 1);