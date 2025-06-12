const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber()', function() {
  it('Tests should be around the “rounded” down', function() {
    const vall = calculateNumber(2.2, 2.4);
    assert.equal(vall, 4);
  });
  it('Tests should be around the “rounded” up', function() {
    const vall = calculateNumber(2.6, 2.9);
    assert.equal(vall, 6);
  });
  it('Tests should test for round down and up', function() {
    const vall = calculateNumber(2.3, 2.5);
    assert.equal(vall, 5);
  });
  it('Tests should test for round up and down', function() {
    const vall = calculateNumber(2.9, 2.4);
    assert.equal(vall, 5);
  });
  it('Tests should test for -ve and +ve', function() {
    const vall = calculateNumber(-2.9, 2.4);
    assert.equal(vall, -1);
  });
  it('Tests should test for +ve and -ve', function() {
    const vall = calculateNumber(2.9, -2.4);
    assert.equal(vall, 1);
  });
  it('Tests should test for -ve and -ve', function() {
    const vall = calculateNumber(-2.9, -2.4);
    assert.equal(vall, -5);
  });
});
