//basics of file system
// const fs = require('fs');
// const path = require('path');

// const dirPath = path.join(__dirname,'files');
// // console.log(dirPath)
// // for(let i = 0; i < 5 ; i++){
// //     fs.writeFileSync(dirPath+"/hello"+i+".txt","this is file "+i)
// // }

// fs.readdir(dirPath,(err,file)=>{
//     file.forEach((item)=>{
//         console.log(item)
//     })
// })



// CRUD with file system
// make File
// read File
// updata File
// rename File
// delete File

const fs = require('fs');
const path = require('path')
const dirPath = path.join(__dirname,'crud')
const filePath = `${dirPath}/apple.txt`;

// file created
// fs.writeFileSync(filePath,"this is file created inside crud")

//read file
// fs.readFile(filePath,'utf-8',(err,item)=>{
//     console.log(item)
// })


//updata file
// fs.appendFile(filePath,'this is new content in this means it is updating this file',(err)=>{
//     if(!err){
//         console.log('file is updated');
//     }
// })



//rename file
// fs.rename(filePath,`${dirPath}/fruit.txt`,(err)=>{
//     if(!err){
//         console.log("file name is changed");
//     }
// })



//Delete file
fs.unlinkSync(`${dirPath}/fruit.txt`)