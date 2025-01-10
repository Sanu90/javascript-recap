// const employee = {
//   name: "harish",
//   eID: "MP05S21",
//   profile: {
//     role: "BDM",
//     DOJ: "05-06-2022",
//     Location: "Kannur",
//   },
// };

// //--> shallow copy using spread operartor  <--//
// //const employeeShallow = { ...employee };
// // console.log("employee", employee);
// // console.log("employeeShallow", employeeShallow);
// // employeeShallow.profile.DOJ = "08-06-2022";
// // console.log("employee", employee);
// // console.log("employeeShallow", employeeShallow);

// //--> shallow copy using Object.assign() method  <--//
// const employeeShallow2 = Object.assign({}, employee);
// employeeShallow2.profile.DOJ = "08-06-2022";
// console.log("employee", employee);
// console.log("employeeShallow2", employeeShallow2);

// const employee1 = {
//   id: "RE321",
//   name: "Patrick",
//   department: "Sales",
//   work_type: "hybrid",
//   contact: {
//     email: "patrickRE@yahoo.com",
//     phone: "1987654321",
//     address: {
//       House: "14/9, Jose Rose",
//       city: "New York",
//       State: "NY",
//       Zip: 15850,
//     },
//   },
// };

// // const employee2 = { ...employee1 };  // Method 1: Spread Operator
// const employee2 = Object.assign({}, employee1); // Method 2: Object.assign() method
// employee2.contact.phone = "2207267809";
// employee2.id = "RE101";
// console.log("employee1", employee1);
// console.log("employee2", employee2);

const one = {
  number: 10,
  payment: [2500, 5600, 2400],
  visa: false,
};

const two = { ...one };

two.number = 15;
two.payment.shift();
console.log(one);
console.log(two);
