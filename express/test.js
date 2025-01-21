// closure

// function counter() {
//   let count = 0;

//   return function sum() {
//     count++;
//     return count;
//   };
// }

// const value = counter();
// console.log(value());
// console.log(value());

// generator function

function* hello() {
  let sum = 0;
  yield sum++;
  yield sum++;
}

const val = hello();
console.log(val.next().value);
console.log(val.next().value);
