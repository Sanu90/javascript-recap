// from Chirag Goel Chakde Frontend Interview EP-01

//----------------------------------------------------------------------
// console.log('A');
// setTimeout(()=>{
//     console.log('B');
// });
// ['C','D'].forEach((x)=>{
// console.log(x);
// });
// console.log('E');

// A,C,D,E,B
//----------------------------------------------------------------------

// const obj=[
//     {
//         key:'Sample1',
//         data:'Data1'
//     },
//     {
//         key:'Sample1',
//         data:'Data2'
//     },
//     {
//         key:'Sample2',
//         data:'Data2'
//     },
//     {
//         key:'Sample1',
//         data:'Data3'
//     },
//     {
//         key:'Sample3',
//         data:'Data1'
//     },
//     {
//         key:'Sample4',
//         data:'Data1'
//     },
//     {
//         key:'Sample4',
//         data:'Data2'
//     }
// ]


// const output={};

// obj.forEach((item)=>{
//     if(output[item.key]){
//         output[item.key].push(item);
        
//     }else{
//         output[item.key]=[item]    
//     }   
// })

// console.log("output",output);

//----------------------------------------------------------------------

// Example of a pure function
// function add(a, b) {
//     return a + b;
//   }
  
//   // Example of an impure function
//   let counter = 0;
  
//   function increment() {
//     counter++;
//     return counter;
//   }

//   console.log(add(4,5));
//   console.log(add(4,5));
//   console.log(increment());
//   console.log(increment());
  
//----------------------------------------------------------------------

// // Array flatenning
// const arr = [1,2,3,[4,[5,6,[7,8]]],7,8];

// //console.log(arr.flat(Infinity));

// const hello = ['This is a technical interview'];

// console.log(hello.flatMap(v=>v.split(' '))[1])

// //console.log(hello[2]);
//----------------------------------------------------------------------
// var count=1;
// function print(){
//     if(count===10) clearInterval(a);
//     console.log(`Print ${count} time.`);
//     count++;
    
    
// }

// let a = setInterval(print,1000);

// // setTimeout(()=>{
// //     clearInterval(a)
// // },10000)

//----------------------------------------------------------------------


// for(var i=0;i<=4;i++){
//     setTimeout(()=>{
//         console.log('i->',i);
//     })
// }
//----------------------------------------------------------------------

// Create a server using node.js

var http = require('http');
http.createServer((req,res)=>{
    res.writeHead(200,{'content-type':'text/plain'});
    res.write("Hello Node server");
   res.end()
}).listen(1100);


// create a server using express

const express=require('express');

const app=express();

app.get('/',(req,res)=>{
    res.send('Hello Express server');
}).listen(2200,()=>{
console.log("express server at 2020");

})

