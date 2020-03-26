const fs = require('fs') 

name = 'lalka-tom-pierwszy.txt'
  
fs.readFile(name, (err, data) => { 
    if (err) throw err; 
  
    console.log(data.toString()); 
}) 
