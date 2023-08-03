var compose = function (functions) {
  return function (x) {
    for (const item of functions.reverse()) {
      x = item(x);
      console.log(x);
    }
    return x;
  };
};

const fn = compose([]);
console.log(fn(42)); // 9
