UPDATE estados 
SET nome = "Maranhão"
WHERE sigla = "MA"

SELECT nome FROM estados WHERE sigla = "MA"

UPDATE estados 
set nome = "Paraná"
WHERE sigla = "PR"

SELECT 
    est.nome,
    est.sigla,
    est.populacao
FROM estados est
WHERE sigla = "PR"