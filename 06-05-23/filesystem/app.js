const fs = require('fs');

console.log("line 1");

const readFile =()=>{
//async 
fs.readFile('./data/input.txt',(err,data)=>{
    if(err){
       console.log("some error occur");
       return;
    }
    //buffer to unicode character
    console.log(data.toString());
})
}
// readFile();

const writeFile=()=>{
    const input = "Welcome to javascript and angular";
     fs.writeFile('./data/read.txt',input,(err)=>{
        if(err){
            return console.log(err);
        }
        console.log("file created successfully");
     })
}
writeFile();
console.log("line 12");