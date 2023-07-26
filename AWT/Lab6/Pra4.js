let globalVar = "global variable";

function calculateFactorial(number) {

  let localVar = "local variable";


  function factorial(n) {
    if (n === 0 || n === 1) {
      return 1;
    } else {
      return n * factorial(n - 1);
    }
  }


  console.log(globalVar);
  console.log(localVar);


  const result = factorial(number);
  return result;
}

const num = 5;
const factorialResult = calculateFactorial(num);
console.log(`Factorial of ${num} is:`, factorialResult);
