const sum = (a, b) => {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('apenas numeros')
  }
  return a + b;
} 
module.exports = sum;