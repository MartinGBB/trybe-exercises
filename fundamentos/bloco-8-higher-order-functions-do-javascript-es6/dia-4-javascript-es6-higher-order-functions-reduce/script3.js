// 5 - Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  return names.reduce((acc, current) =>
    acc + current.split('').reduce((acc, curr) => {
      if (curr === 'a' || curr === 'A' ) return acc + 1;
      return acc;
    }, 0), 0);
};

console.log(containsA());
