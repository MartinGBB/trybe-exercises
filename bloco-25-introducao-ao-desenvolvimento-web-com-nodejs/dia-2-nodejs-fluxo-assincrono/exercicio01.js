
const functionMath = (a, b, c) => {
  const typeNumber = typeof a != 'number' || typeof b != 'number' || typeof c != 'number';
  const promise = new Promise((resolve, reject) => {
    if(typeNumber) reject(new Error("Informe apenas números"));
    const result = ((a + b) * c);
    if (result < 50) reject(new Error("Valor muito baixo"))
    resolve(result);
  });
  return promise;
};

functionMath(5, 8, 20)
.then(result => console.log(`result: ${result}`))
.catch(err => console.log(`erro: ${err.message}`));
