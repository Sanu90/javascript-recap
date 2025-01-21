const laptop1 = {
  name: "samsung",
  model: "SA019Z",
  price: 45000,
  data: {
    location: "polpully",
    dealer: "koluvappally",
    margin: undefined,
  },
};

const lodash = require("lodash");

// DEEP copy using json.stringify()

// const laptop2 = JSON.parse(JSON.stringify(laptop1));
// laptop2.data.dealer = "Pittappali";
// console.log(laptop1);
// console.log(laptop2);

// DEEP copy using structured cloning //

// const laptop2 = JSON.parse(JSON.stringify(laptop1)); // if a value is undefined, it will not be copied.
// console.log(laptop1);
// console.log(laptop2);

// const lap2 = structuredClone(laptop1);
// console.log(laptop1);
// console.log(lap2);

// DEEP copy using lodash //

let lap2 = lodash.cloneDeep(laptop1);
console.log("laptop1", laptop1);
console.log("lap2", lap2);
