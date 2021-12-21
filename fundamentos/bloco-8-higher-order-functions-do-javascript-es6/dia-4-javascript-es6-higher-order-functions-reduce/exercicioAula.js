// faça uma função que some todos os números pares do array:
// Tente criar uma usando reduce e filter , e outra apenas usando reduce .

const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const sumParFilter = (numbers) => {
  const numPar = numbers.filter((num) => num % 2 === 0)
  .reduce((acc, curr) => acc + curr);
  return numPar;
};

console.log(sumParFilter(numbers));
