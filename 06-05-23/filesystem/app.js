const fs = require('fs');

console.log("line 1");
//async 
fs.readFile('input.txt',(err,data)=>{
     if(err){
        console.log("some error occur");
        return;
     }
     //buffer to unicode character
     console.log(data.toString());
})
console.log("line 12");