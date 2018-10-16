SELECT e.nome, c.nome 
FROM empresas e, empresas_unidades eu, cidades c
WHERE e.id = eu.empresa_id and c.id =  eu.cidade_id