const typeNumber = typeof a != 'number' || typeof b != 'number' || typeof c != 'number';

const functionMath = async (a, b, c) => {
  const promise = new Promise((resolve, reject) => {
    if(typeNumber) reject(new Error("Informe apenas números"));
    const result = ((a + b) * c);
    
  });
}