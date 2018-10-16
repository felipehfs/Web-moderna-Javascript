SELECT regiao AS "Região", AVG(populacao) as Media FROM estados
GROUP BY regiao
ORDER BY Media DESC