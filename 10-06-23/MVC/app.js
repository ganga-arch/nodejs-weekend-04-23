const express = require('express');
const app = express();
const parser = require('body-parser');

app.use(parser.json());

app.use((req,res,next)=>{
    console.log("app.js file");
    next();
})

module.exports = app;