const express = require('express');
const app = express();

const products =[
    {
        id:1,
        name:"lenevo",
        price:20000,
        availability:true
    },
    {
        id:2,
        name:"apple",
        price:200000,
        availability:false
    }
]

//api to get the details
app.get('',(req,res)=>{
    //req - request object 
    //res - response object
     res.send("<h1>Welcome to first express app</h1>");
})

app.get('/product',(req,res)=>{
   res.status(200).json({
    message:"fetching is successfull",
    product:products
   })
})


//please hit http://localhost:3000
app.listen(3000,()=>{
    console.log('server is running on 3000');
})