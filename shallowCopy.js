const object1 = {
  name: "Kumar",
  details: {
    age: 44,
    city: "Shornur",
    drink: "lemonade",
  },
};

// shallow copy using spread operator
object1.details.married = true;
object1.details.city = "Palakkad";
const obj2 = { ...object1 };

console.log(obj2);
