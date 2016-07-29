
function PrimeNumberMultiplicationTable(n){
  var primes = getPrimes(n)
  return createMultiplicationTableFromArray(primes)
}

function getPrimes(n){


  var estimateOfNthPrime
  if (n >= 6) {
    estimateOfNthPrime = n * Math.log(n) + n * Math.log(Math.log(n))
  } else {
    //If n < 6 we know that the 5th highest prime is 11
    estimateOfNthPrime = 11
  }

  var list = []
  for (var i =2; i <= estimateOfNthPrime; i++){
    list.push(i)
  }

  for (var i=2; i < Math.sqrt(estimateOfNthPrime); i++) {
    if (list[i]){
      var i2 = Math.pow(i,2)
      for (var k=0; i2 + k * i <= estimateOfNthPrime; k++ ){
        var j = i2 + k * i
        // - 2 because our list starts at 2 not 0.
        list[j - 2] = false
      }
    }
  }

  var primes = []
  for (var i =0; i < list.length; i++){
    if (list[i]){
      primes.push(list[i])
    }
  }
  return primes
}

function createMultiplicationTableFromArray(arr){
  console.log(arr)
}

if (Number(process.argv[2] > 0)) {
  console.log(PrimeNumberMultiplicationTable(process.argv[2]))
}

module.exports = {
  PrimeNumberMultiplicationTable: PrimeNumberMultiplicationTable,
  getPrimes: getPrimes,
  createMultiplicationTableFromArray: createMultiplicationTableFromArray
}
