// JSON.Stringify using replacer function //

const empName = {
  name: "Govardhan",
  role: "Finance Manager",
  organization: "Triend Data",
};
const data = JSON.stringify(empName);
console.log("data-->", data);

const data1 = JSON.stringify(empName, ["name", "organization"]);
console.log("data1-->", data1);
