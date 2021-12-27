SELECT c.first_name,  COUNT(a.address) AS 'Quantidade de endereco'
FROM sakila.customer AS c
INNER JOIN sakila.address AS a
ON c.address_id = a.address_id
WHERE active = TRUE
GROUP BY first_name
ORDER BY first_name DESC;
