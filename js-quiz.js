const a = {};

const b = { key: 100 };
const c = { key: 200 };

a[b] = 100;
console.log("hello---->", a);
console.log("b is", b);
console.log("c is ", c);

a[c] = 200;
//console.log(a[b]);
