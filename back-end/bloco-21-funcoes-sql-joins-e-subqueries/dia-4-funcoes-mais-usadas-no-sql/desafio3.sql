SELECT JOB_ID, AVG(SALARY) AS med_salary
FROM hr.employees
GROUP BY JOB_ID
ORDER BY med_salary DESC;
