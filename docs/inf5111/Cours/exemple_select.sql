SELECT first_name FROM customer;

SELECT
   first_name,
   last_name,
   email
FROM
   customer;
   
SELECT * FROM customer;

-- Le || est une concaténation de chaine
SELECT 
   first_name || ' ' || last_name,
   email
FROM 
   customer;
   
SELECT 5 * 3 as result;

SELECT
	DISTINCT rating
FROM
	film;
	
SELECT
	last_name,
	first_name
FROM
	customer
WHERE
	first_name = 'Jamie';
	
SELECT
	last_name,
	first_name
FROM
	customer
WHERE
	first_name = 'Jamie' AND 
    last_name = 'Rice';
        
SELECT
	first_name,
	last_name
FROM
	customer
WHERE
	last_name = 'Rodriguez' OR 
	first_name = 'Adam';
	
SELECT
	first_name,
	last_name
FROM
	customer
WHERE 
	first_name IN ('Ann','Anne','Annie');
	
-- https://www.postgresql.org/docs/current/functions-matching.html
SELECT
	first_name,
	last_name
FROM
	customer
WHERE 
	first_name LIKE 'Ann%';

-- https://www.postgresql.org/docs/current/functions-string.html
SELECT
	first_name,
	LENGTH(first_name) name_length
FROM
	customer
WHERE 
	first_name LIKE 'A%' AND
	LENGTH(first_name) BETWEEN 3 AND 5
ORDER BY
	name_length desc;
	
select
	count(*)
from 
	inventory;
	
select 
	sum(amount)
from
	payment;