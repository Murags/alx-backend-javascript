const assert = require('assert');
const calculate = require('./1-calcul');

describe('calculate', () => {
    it('should correctly calculate SUM', () => {
        assert.strictEqual(calculate('SUM', 5.4, 2.1), 7);
        assert.strictEqual(calculate('SUM', 7.8, 3.2), 11);
    });

    it('should correctly calculate SUBTRACT', () => {
        assert.strictEqual(calculate('SUBTRACT', 10.5, 3.2), 8);
        assert.strictEqual(calculate('SUBTRACT', 8.1, 2.5), 5);
    });

    it('should correctly calculate DIVIDE', () => {
        assert.strictEqual(calculate('DIVIDE', 10, 2), 5);
        assert.strictEqual(calculate('DIVIDE', 9, 4), 2.25);
    });

    it('should return "Error" for DIVIDE with divisor 0', () => {
        assert.strictEqual(calculate('DIVIDE', 8, 0), 'Error');
        assert.strictEqual(calculate('DIVIDE', 6, 0), 'Error');
    });
});
