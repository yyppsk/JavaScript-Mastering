/**
 * @param {Function} fn
 */
function memoize(fn) {
  let hashMap = new Map();
  return function (...args) {
    const key = String(args);
    if (hashMap.has(key)) {
      return hashMap.get(key);
    }
    const result = fn.apply(null, args);
    hashMap.set(key, result);
    return result;
  };
}

/**
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1
 */
