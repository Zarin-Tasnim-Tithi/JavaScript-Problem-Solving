//Memoized Function Decorator
function memoize(fn) {
  const cache = new Map();
  return function (...args) {
    const key = JSON.stringify(args);
    if (cache.has(key)) {
      return cache.get(key);
    }
    const result = fn(...args);
    cache.set(key, result);
    return result;
  };
}

function factorial(n) {
  return n <= 1 ? 1 : n * factorial(n - 1);
}

const memoFactorial = memoize(factorial);
console.log(memoFactorial(5)); 
