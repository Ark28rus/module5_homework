const arr = [1, 2, 'a', null, 0, 'g', 84, 4, 'b', 93, 0];

let even = 0;
let odd = 0;
let zero = 0;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] === 0) {
    zero++;
  } else if (typeof arr[i] === 'number') {
    if (arr[i] % 2 === 0) {
      even++;
    } else {
      odd++;
    }
  }
}

console.log(`Количество четных элементов: ${even}`);
console.log(`Количество нечетных элементов: ${odd}`);
console.log(`Количество нулей: ${zero}`);