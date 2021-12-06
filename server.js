const express = require('express');
const path=require('path');
const { listeners } = require('process');
const app = express();
app.get('/',(req,res)=>{
    res.sendFILE(path.join(dirname,'public','index.html' ) )
})
    app.get('/',(req,res)=>{
        res.sendFILE(path.join(dirname,'public','contact.html' ) )

    })

app.listen (5000,(err)=>{
    if(err){
        throw err

    }else{
        console.log('SERVER IS UP AND RUNUNG... ')
    }
})











module.exports = app;