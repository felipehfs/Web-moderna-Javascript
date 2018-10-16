SELECT * FROM estados e, cidades c WHERE e.id = c.id

select e.nome, e.populacao FROM estados e, cidades c WHERE e.id = c.id  

SELECT 
    c.nome as Cidade,
    e.nome as Estado,
    regiao as Região
FROM estados e 
INNER JOIN cidades c 
ON e.id = c.estados_id