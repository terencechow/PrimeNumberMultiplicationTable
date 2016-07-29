### Requirements
1. Download & install [node](https://nodejs.org/en/download/)
2. Install Mocha globally for testing. `npm install -g mocha`
3. Install Chai for testing `npm install chai`

### Run program with

`node PrimeNumberMultiplicationTable.js {wholenumber}`

where input is a whole number indicating the number of prime numbers you want the multiplication table to be of.

Example: `node PrimeNumberMultiplicationTable.js 5`

### Test program with
`mocha Tests.js`


### What I'm pleased with

I enjoyed the test because I had never looked into Prime number generation. I also have not done much TDD so it was nice to write the tests first and write code where the tests passed. At one point I had written the sieve without realizing it was providing the prime numbers less than an integer, and my test failed. This was odd because my console was showing only odd numbers. Because of this test I realized that I had found the prime numbers less than an integer, instead of getting the first N prime numbers.

### What I would do with more time

If I had more time I would look into a number of things:

1) I would look into the multiplication table function because I took a naive approach. I can take advantage of multiplication tables being symmetrical if I wanted to optimize there.

2) I would look at more efficient sieves. Wikipedia indicates that there is an O(N) sieve. That would be a quick win for optimization.

3) I would add more commenting.

4) Error handling and console logs if someone inputs erroneous arguments.
