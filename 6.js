let arr = [9, 9, 9, 9, 9, 9, 9, 0];
let result = arr.every(function(element) {
  return element === arr[0];
});
console.log(result); // true