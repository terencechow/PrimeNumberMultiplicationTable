
function PrimeNumberMultiplicationTable(n){
  var primes = getPrimes(n)
  return createMultiplicationTableFromArray(primes)
}

function getPrimes(n){
  var list = []

  for (var i =2; i <= n; i++){
    list.push(i)
  }

  for (var i=2; i < Math.sqrt(n); i++) {
    if (list[i]){
      var i2 = Math.pow(i,2)
      for (var k=0; i2 + k * i <= n; k++ ){
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

}

if (Number(process.argv[2] > 0)) {
  console.log(PrimeNumberMultiplicationTable(process.argv[2]))
}

module.exports = {
  PrimeNumberMultiplicationTable: PrimeNumberMultiplicationTable,
  getPrimes: getPrimes,
  createMultiplicationTableFromArray: createMultiplicationTableFromArray
}
