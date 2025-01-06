const employee = {
  name: "harish",
  eID: "MP05S21",
  profile: {
    role: "BDM",
    DOJ: "05-06-2022",
    Location: "Kannur",
  },
};

const employeeDeep = JSON.parse(JSON.stringify(employee));
employeeDeep.profile.role = "SDE";
console.log("employee", employee);
console.log("employeeDeep", employeeDeep);
