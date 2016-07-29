var assert = require('chai').assert
// console.log(chai,mocha.describe)
var PrimeNumberMultiplicationTable = require('./PrimeNumberMultiplicationTable.js')


var primes = PrimeNumberMultiplicationTable.getPrimes(12)

describe('getPrimes()',function(){
  it('should expect getPrimes(12) to be [2,3,5,7,11]',function(){
    assert.deepEqual(primes,[2,3,5,7,11])
  })
})

var multiplicationTable = PrimeNumberMultiplicationTable.createMultiplicationTableFromArray([2,3,5])

describe('createMultiplicationTableFromArray()',function(){
  it('should expect createMultiplicationTableFromArray([2,3,5])',function(){
    assert.deepEqual(multiplicationTable,[
      ['',2,3,5],
      [2,4,6,10],
      [3,6,9,15],
      [5,10,15,25]
    ])
  })
})
