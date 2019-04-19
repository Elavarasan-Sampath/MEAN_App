// import modules
var express = require('express');
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
var cors=require('cors');
var path = require('path');

var app=express();

//defining port

const port=3000;

app.listen(port,()=>{
    console.log('listening port : '+port);
});

app.get('/',(req,res)=>{
    res.send('In Home!!');
});

app.use(cors());
app.use(bodyparser.json());
app.use(express.static(path.join(__dirname,'public')));

//Connection to DB

mongoose.connect('mongodb://localhost:27017');

mongoose.connection.on('connected',()=>{
    console.log('Database Connected Successfully !!!');
});

//routes config
const route=require('./routes/route');

app.use('/api',route);