/**
 * 0-calculus.js.calculateNumber test suite
 */
const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber simple test suite', function() {
  describe('#Add positive numbers', function() {
    it('should return 4', function() {
      assert.equal(calculateNumber(1, 3), 4);
    });
    it('should return 5', function() {
      assert.equal(calculateNumber(1, 3.7), 5);
    });
    it('should return 5', function() {
      assert.equal(calculateNumber(1.2, 3.7), 5);
    });
    it('should return 6', function() {
      assert.equal(calculateNumber(1.5, 3.7), 6);
    });
  });
});
