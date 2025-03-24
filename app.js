const express = require('express');
const router = require('./src/routes/api');
const app =new express();

const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const hpp = require('hpp');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const path = require('path');


let URL = "mongodb+srv://sarwor:<db_password>@cluster0.e27ac.mongodb.net/ecom?retryWrites=true&w=majority";
let option ={user:'sarwor',pass:"sarwor123",autoIndex:true};
mongoose.connect(URL, option).then((res)=>{
    console.log("Database Connected");
}).catch((err) => {
    console.log(err);
});


app.use(cookieParser());
app.use(cors());
app.use(helmet());
app.use(mongoSanitize());
app.use(xss());
app.use(hpp());


const limiter = rateLimit({ windowMs:15*60*1000,max:3000 });
app.use(limiter);

app.use("/api/v1", router);

app.use(express.static('client/dist'));


app.get('*', function(req, res) {
    res.sendFile(path.resolve(__dirname, 'client', 'dist', 'index.html'));
});

module.exports = app;
