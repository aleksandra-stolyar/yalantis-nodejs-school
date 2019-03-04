function sum() {
  var args = Array.from(arguments);
  var sum = 0
  for (var i = 0; i < args.length; i++) {
    sum += args[i]
  }
  console.log(sum)
};


// ==================
// OR
// ==================
// function sum() {
//   var args = [...arguments];
//   var sum = 0
//   args.forEach(function(item, i, args) {
//     sum += item
//   });
//   console.log(sum)
// };

sum(1, 2, 3);
sum(1);


sum(5, 6, 3);

while (true) { }