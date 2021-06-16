const sum = require('./exercise_1');

describe('Requisito 1', () => {
    it('A função soma 4 e 5 e retorna 9', () => {
        expect(9).toBe(sum(4, 5));
    })
})