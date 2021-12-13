const sum = require('./exercise_1');

describe('Requisito 1', () => {
    it('A função soma 4 e 5 e retorna 9', () => {
        expect(sum(4, 5)).toBe(9);
    });

    it('A função soma 0 e 0 e retorna 0', () => {
        expect(sum(0, 0)).toBe(0);
    });
    it('Erro se o type é string', () => {
        expect(() => {
            sum(4, '5')
        }).toThrow();
    });
})
