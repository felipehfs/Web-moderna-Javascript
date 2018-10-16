SELECT * FROM prefeitos;
SELECT * FROM cidades;

SELECT * FROM cidades c INNER JOIN prefeito p ON c.id = p.cidade_id;
SELECT * FROM cidades c LEFT JOIN prefeito p ON c.id = p.cidade_id;
SELECT * FROM cidades c RIGHT JOIN prefeito p ON c.id = p.cidade_id;


SELECT * FROM cidades c LEFT JOIN prefeito p ON c.id = p.cidade_id
UNION 
SELECT * FROM cidades c RIGHT JOIN prefeito p ON c.id = p.cidade_id;