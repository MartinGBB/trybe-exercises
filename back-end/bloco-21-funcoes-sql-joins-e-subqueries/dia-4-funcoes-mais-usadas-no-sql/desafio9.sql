SELECT JOB_ID, AVG(SALARY)
FROM hr.employees
WHERE JOB_ID <> 'IT_PROG'
GROUP BY JOB_ID
ORDER BY JOB_ID DESC;