// shallow copy revise

let emp1={
  name:'sathish',age:27,
  address:{
    houseName:'abc nivas',
    panchayat:'xyz',
    pincode:637728
  }
} // created an object with nested properties

// emp2=emp1;  // simply copied emp1 to emp2 to create a new object
// emp2.age=33;  // now we change the value of age property of emp2
// console.log("emp2->",emp2); // consoling emp2
// console.log("emp1->",emp1); // here is the issue.. check what is the printed.

// The issue is bcz when we copy an object from another directly, its reference is stored in the second object.
// So when we copy and change the values in any one object, since both objects refer the same reference, update 
// is happened in both sides, which created data inconsistency.

// HERE COMES SHALLOW COPY //

emp2={...emp1} // Shallow copy using spread operator
emp3=Object.assign({},emp1)

emp2.age=33;  // now we change the value of age property of emp2
emp3.name='keerty'
// console.log("emp2->",emp2); // consoling emp2
// console.log("emp1->",emp1); // now whats the output in emp1
// console.log("emp3->",emp3); // consoling emp3

// HERE COMES DEEP COPY
emp3.address.pincode=800211;
// console.log("emp1-->",emp1);
// console.log("emp3-->",emp3);
// console.log("emp2-->",emp2);

let emp5=JSON.parse(JSON.stringify(emp3)); // DC using JSON PARSE AND STRINGIFY
emp5.address.houseName='PPPP';
console.log("emp3-->",emp3);
console.log("emp5-->",emp5);







