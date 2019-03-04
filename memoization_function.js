function sum() {
  var args = Array.from(arguments);
  var sum = 0;
  for (var i = 0; i < args.length; i++) {
    sum += args[i];
  }

  return sum;
};

function multiply(x, y) {
  return x * y;
}

var cached = {};
function memoization(fn) {
  return function (...args) {
    fn_args = JSON.stringify(args)
    key = fn.name + fn_args
    if (cached[key]) {
      console.log(key, cached[key], '//взято из кеша')
      return cached[key]
    } else {
      val = fn.apply(fn, args);
      cached[key] = val;
      console.log(key, val, '//вычислено')
      return val;
    }
  };
};

memoization(multiply)(1, 2);
memoization(multiply)(1, 3);
memoization(multiply)(1, 2);
memoization(sum)(1, 3, 4)
memoization(sum)(10)
memoization(sum)(10)