select * from estados
SELECT sigla, nome as 'Nome do estado' from estados 
where regiao = "Sul"

select nome, regiao from estados 
where populacao >= 10
order by populacao desc