// const str = "hello";
// str.data = "hey";
// console.log(str.data);

// It will print undefined as primitive datatypes does not hold any properties.

let obj = {
  a: undefined,
  b: null,
};
console.log(JSON.stringify(obj));
