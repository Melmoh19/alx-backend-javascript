const assert = require('assert');
const calculateNumber = require('./1-calcul');

const downValA = 3.45;
const downValB = 2.25
const highValA = 4.902;
const highValB = 5.5;
const negA = -3.6;
const negB = -6.2;
const zero = 0;
const SUM = 'SUM';
const DIVIDE = 'DIVIDE';
const SUBTRACT = 'SUBTRACT';

describe('type()', function() {
  describe('Test for Sum', function() {
    it('let us check for when type is sum 2 round down', function() {
      const A = calculateNumber(SUM, downValA, downValB);
      assert.equal(A, 5);
    });
    it('let us check for when type is sum 1 & 1 round down & up', function() {
      const A = calculateNumber(SUM, highValA, downValB);
      assert.equal(A, 7);
    });
    it('let us check for when type is sum 2 round up', function() {
      const A = calculateNumber(SUM, highValA, highValB);
      assert.equal(A, 11);
    });
    it('let us check for when type is sum with -ve val', function() {
      const A = calculateNumber(SUM, negA, negB);
      assert.equal(A, -10);
    });
    it('let us check for when type is sum with 0 val', function() {
      const A = calculateNumber(SUM, zero, zero);
      assert.equal(A, 0);
    });
  });
  describe('Test for Subtract', function() {
    it('let us check for when type is subtract 2 round down', function() {
      const A = calculateNumber(SUBTRACT, downValA, downValB);
      assert.equal(A, 1);
    });
    it('let us check for when type is subtract 1 & 1 round down & up', function() {
      const A = calculateNumber(SUBTRACT, highValA, downValB);
      assert.equal(A, 3);
    });
    it('let us check for when type is subtract 2 round up', function() {
      const A = calculateNumber(SUBTRACT, highValA, highValB);
      assert.equal(A, -1);
    });
    it('let us check for when type is subtract with -ve val', function() {
      const A = calculateNumber(SUBTRACT, negA, negB);
      assert.equal(A, 2);
    });
    it('let us check for when type is subtract with 0 val', function() {
      const A = calculateNumber(SUBTRACT, zero, zero);
      assert.equal(A, 0);
    });
  });
  describe('Test for Divide', function() {
    it('let us check for when type is divide 2 round down', function() {
      const A = calculateNumber(DIVIDE, downValA, downValB);
      assert.equal(A, 1.5);
    });
    it('let us check for when type is divide 1 & 1 round down & up', function() {
      const A = calculateNumber(DIVIDE, highValA, downValB);
      assert.equal(A, 2.5);
    });
    it('let us check for when type is divide 2 round up', function() {
      const A = calculateNumber(DIVIDE, highValA, highValB);
      assert.equal(A, 0.8333333333333334);
    });
    it('let us check for when type is divide with -ve val', function() {
      const A = calculateNumber(DIVIDE, negA, negB);
      assert.equal(A, 0.6666666666666666);
    });
    it('let us check for when type is divide with 0 val', function() {
      const A = calculateNumber(DIVIDE, zero, zero);
      assert.equal(A, 'Error');
    });
  });
    it('let us check for when type is divide with 0 as valB', function() {
      const A = calculateNumber(DIVIDE, downValA, zero);
      assert.equal(A, 'Error');
    });

})
