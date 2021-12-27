
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

const numeroAleatorio = () => {
  return Math.floor(Math.random() * 100 + 1)
};

const trasforma = async () => {
  const criaArray = Array.from({ length: 3 }).map(numeroAleatorio);
  try {
    const result = await functionMath(... criaArray);
    console.log(`result: ${result}`);
  } catch(err) {
    console.log(`erro: ${err.message}`);
  };
};

trasforma();
