SELECT JOB_ID, SUM(SALARY) AS total_salary
FROM hr.employees
GROUP BY JOB_ID;
