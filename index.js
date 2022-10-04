const fs = require('fs')
fs.writeFileSync("hello.txt","code is done by non-global module")
console.log("->"+__dirname);
console.log("->"+__filename);