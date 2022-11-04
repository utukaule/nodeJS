const os = require('os')
console.log(os.arch()) //it will your system bit like 32bit or 64 bit
console.log(os.freemem()/(1024*1024*1024));
console.log(os.totalmem())
console.log(os.hostname())
console.log(os.platform())
console.log(os.userInfo())