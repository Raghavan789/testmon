const express = require('express');
const app = express();

const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017",(err)=>{
    if(err){
        
    }

})
app.listen(5000,()=>{
    console.log('connnection 5000');
});