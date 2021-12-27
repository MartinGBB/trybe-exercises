const fetch = require('node-fetch');
const { expect } = require('@jest/globals');

//1 - O código abaixo busca no GitHub de um usuário, de acordo com a URL, seus repositórios e retorna uma lista como resultado. Dada a URL 'https://api.github.com/orgs/tryber/repos' , faça um teste que verifique que os repositórios 'sd-01-week4-5-project-todo-list' e 'sd-01-week4-5-project-meme-generator' se encontram nessa lista.


const getRepos = (url) => (
  fetch(url)
  .then((response) => response.json())
  .then((data) => data.map((repo) => repo.name))
  );
  
  
  
  test('Aparece repositorios', async () => {
    const url = 'https://api.github.com/orgs/tryber/repos';
    const repositories = await getRepos(url);
    expect(repositories).not.toContain('sd-01-week4-5-project-todo-list');
  })
  
//   const searchRepositories = async () => {
//   const repositories = await getRepos(url);
//   const matchRepositories = repositories.filter((repository) => repository === )
// }
