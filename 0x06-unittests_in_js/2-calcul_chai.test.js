const expect = require('chai').expect;
const calculate = require('./2-calcul_chai');

describe('calculate', () => {
    it('should correctly calculate SUM', () => {
        expect(calculate('SUM', 5.4, 2.1)).to.equal(7);
        expect(calculate('SUM', 7.8, 3.2)).to.equal(11);
    });

    it('should correctly calculate SUBTRACT', () => {
        expect(calculate('SUBTRACT', 10.5, 3.2)).to.equal(8);
        expect(calculate('SUBTRACT', 8.1, 2.5)).to.equal(5);
    });

    it('should correctly calculate DIVIDE', () => {
        expect(calculate('DIVIDE', 10, 2)).to.equal(5);
        expect(calculate('DIVIDE', 9, 4)).to.equal(2.25);
    });

    it('should return "Error" for DIVIDE with divisor 0', () => {
        expect(calculate('DIVIDE', 8, 0)).to.equal('Error');
        expect(calculate('DIVIDE', 6, 0)).to.equal('Error');
    });
});
