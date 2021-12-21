const books = [
    {
      id: 1,
      name: 'As Crônicas de Gelo e Fogo',
      genre: 'Fantasia',
      author: {
        name: 'George R. R. Martin',
        birthYear: 1948,
      },
      releaseYear: 1991,
    },
    {
      id: 2,
      name: 'O Senhor dos Anéis',
      genre: 'Fantasia',
      author: {
        name: 'J. R. R. Tolkien',
        birthYear: 1892,
      },
      releaseYear: 1954,
    },
    {
      id: 3,
      name: 'Fundação',
      genre: 'Ficção Científica',
      author: {
        name: 'Isaac Asimov',
        birthYear: 1920,
      },
      releaseYear: 1951,
    },
    {
      id: 4,
      name: 'Duna',
      genre: 'Ficção Científica',
      author: {
        name: 'Frank Herbert',
        birthYear: 1920,
      },
      releaseYear: 1965,
    },
    {
      id: 5,
      name: 'A Coisa',
      genre: 'Terror',
      author: {
        name: 'Stephen King',
        birthYear: 1947,
      },
      releaseYear: 1986,
    },
    {
      id: 6,
      name: 'O Chamado de Cthulhu',
      genre: 'Terror',
      author: {
        name: 'H. P. Lovecraft',
        birthYear: 1890,
      },
      releaseYear: 1928,
    },
  ];
  
  // 1 - Crie um array com strings no formato NOME_DO_LIVRO - GÊNERO_DO_LIVRO - NOME_DA_PESSOA_AUTORA

  // const expectedResult = [
  //   'As Crônicas de Gelo e Fogo - Fantasia - George R. R. Martin',
  //   'O Senhor dos Anéis - Fantasia - J. R. R. Tolkien',
  //   'Fundação - Ficção Científica - Isaac Asimov',
  //   'Duna - Ficção Científica - Frank Herbert',
  //   'A Coisa - Terror - Stephen King',
  //   'O Chamado de Cthulhu - Terror - H. P. Lovecraft',
  // ];
  
  function formatedBookNames(books) {
      const infoLivro = books.map(({ name, genre, author }) => {
     return `${name} - ${genre} - ${author.name}`;
    });
    return infoLivro;
  }
  console.log(formatedBookNames(books));

  // 2 - Construa um array de objetos a partir do array de livros. Cada objeto deve conter uma propriedade author , com o nome da pessoa autora do livro, e uma propriedade age com a idade dessa pessoa quando o livro foi lançado. O array deve ser ordenado por idade, ou seja, da pessoa mais jovem para a mais velha considerando suas idades quando o livro foi lançado.

  // const expectedResult = [
  //   {
  //     age: 31,
  //     author: 'Isaac Asimov',
  //   },
  //   {
  //     age: 38,
  //     author: 'H. P. Lovecraft',
  //   },
  //   {
  //     age: 39,
  //     author: 'Stephen King',
  //   },
  //   {
  //     age: 43,
  //     author: 'George R. R. Martin',
  //   },
  //   {
  //     age: 45,
  //     author: 'Frank Herbert',
  //   },
  //   {
  //     age: 62,
  //     author: 'J. R. R. Tolkien',
  //   },
  // ];
  
  function nameAndAge(books) {
    const author = books.map(({ author: { name, birthYear }, releaseYear}) => {
      const ageAuthor = (releaseYear - birthYear);
      return { age: ageAuthor, author: name };
    }).sort((a, b) => a.age - b.age);
    return author;
  };
  console.log(nameAndAge(books));

  // 3 - Crie um array com todos os objetos que possuem gênero ficção científica ou fantasia.

  const expectedResult = [
    { 
      id: 1,
      name: 'As Crônicas de Gelo e Fogo',
      genre: 'Fantasia',
      author: { name: 'George R. R. Martin', birthYear: 1948 },
      releaseYear: 1991
    },
    {
      id: 2,
      name: 'O Senhor dos Anéis',
      genre: 'Fantasia',
      author: { name: 'J. R. R. Tolkien', birthYear: 1892 },
      releaseYear: 1954
    },
    {
      id: 3,
      name: 'Fundação',
      genre: 'Ficção Científica',
      author: { name: 'Isaac Asimov', birthYear: 1920 },
      releaseYear: 1951
    },
    {
      id: 4,
      name: 'Duna',
      genre: 'Ficção Científica',
      author: { name: 'Frank Herbert', birthYear: 1920 },
      releaseYear: 1965
    }
  ];
  
  function fantasyOrScienceFiction() {
    // escreva seu código aqui
  }