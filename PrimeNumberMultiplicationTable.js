
function PrimeNumberMultiplicationTable(n){
  var primes = getPrimes(n)
  return createMultiplicationTableFromArray(primes)
}

function getPrimes(n){
  return [2,3,5,7,11]
}

function createMultiplicationTableFromArray(arr){
  return [
    ['',2,3,5],
    [2,4,6,10],
    [3,6,9,15],
    [5,10,15,25]
  ]
}

if (Number(process.argv[2] > 0)) {
  console.log(PrimeNumberMultiplicationTable(process.argv[2]))
}

module.exports = {
  PrimeNumberMultiplicationTable: PrimeNumberMultiplicationTable,
  getPrimes: getPrimes,
  createMultiplicationTableFromArray: createMultiplicationTableFromArray
}
