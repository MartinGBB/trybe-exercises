// faça uma função que some todos os números pares do array:
// Tente criar uma usando reduce e filter , e outra apenas usando reduce .

const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const sumParFilter = (array) => {
  const numPar = array.filter((num) => num % 2 === 0)
  .reduce((acc, curr) => acc + curr);
  return numPar;
};

console.log(sumParFilter(numbers));

const sumParReduce = (array) => {
  const numParSum = array.reduce((acc, curr) => (curr % 2 === 0) ? curr + acc : acc, 0);
  return numParSum;
};

console.log(sumParReduce(numbers));
