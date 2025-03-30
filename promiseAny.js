const promise1=Promise.reject(22)
const promise2=Promise.reject(0);
const promise3=Promise.reject('error');

Promise.any([promise1,promise2,promise3]).then((value)=>{
    console.log("value is",value)
}).catch((err)=>{
    console.log("error is",err)
    
})