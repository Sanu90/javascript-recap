const employee = {
  name: "harish",
  eID: "MP05S21",
  profile: {
    role: "BDM",
    DOJ: "05-06-2022",
    Location: "Kannur",
  },
};

// shallow copy
const employeeShallow = { ...employee };
// console.log("employee", employee);
// console.log("employeeShallow", employeeShallow);
employeeShallow.profile.DOJ = "08-06-2022";
console.log("employee", employee);
console.log("employeeShallow", employeeShallow);
