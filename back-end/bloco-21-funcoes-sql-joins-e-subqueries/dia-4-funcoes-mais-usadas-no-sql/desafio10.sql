SELECT department_id, AVG(SALARY), COUNT(*) AS funcionarios
FROM hr.employees
GROUP BY department_id
HAVING funcionarios > 10;
