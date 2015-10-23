var nums = process.argv.slice(2)
var total = nums.reduce(function(a, b) {
  return Number(a) + Number(b);
});

console.log(total)