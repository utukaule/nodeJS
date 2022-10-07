const app = require("./app")
console.log(app)

const arr = [1,2,3,4,5,6,7]
let result = arr.filter((item)=>{
    return item > 3 
})
console.log(result);