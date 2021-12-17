const myRemove = require('../myRemove');
const ARRAY_NUMBER = [1, 2, 3, 4];

describe('Removendo Iten', () => {
  it('Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado', () => {
    expect(myRemove(ARRAY_NUMBER, 3)).toEqual([1, 2, 4])
  });

  it('Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]', () => {
    expect(myRemove(ARRAY_NUMBER, 3)).not.toContain(3);
  });
});
