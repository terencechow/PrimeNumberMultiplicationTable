var chai = require('chai')

function PrimeNumberMultiplicationTable(n){
  var primes = getPrimes(n)
  return createMultiplicationTableFromArray(primes)
}

function getPrimes(n){

}

function createMultiplicationTableFromArray(arr){

}



if (Number(process.argv[2] > 0)) {
  PrimeNumberMultiplicationTable(process.argv[2])
} else {
  console.log("Invalid input passed")
}
