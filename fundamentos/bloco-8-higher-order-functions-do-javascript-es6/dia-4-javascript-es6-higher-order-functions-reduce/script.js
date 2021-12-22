// 1 - Dada uma matriz, transforme em um array.

const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

function flatten(oldArray) {
  const newArray = oldArray.reduce((acc, array) => {
    return array.concat(acc);
  }, 0);
  return newArray;
};

console.log(flatten(arrays));
