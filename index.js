// let a = 1; 
// let b = 0;

// setTimeout(()=>{
//     b=20
// },2000)

// console.log(a+b);


// Handle Asynchronous data in node js
// Promises

let a = 10;
let b = 129;

let waitingData = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(30);
    },3000 )
})

waitingData.then((data)=>{
    b= data;
    console.log(a+b);
})