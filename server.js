const express = require('express'); 
const dotenv = require('dotenv'); 
const color = require('colors'); 
const morgan = require('morgan');
const cors = require('cors'); 
const connectDB = require('./config/db');



//dot config
dotenv.config(); 

//mongoDB connection
connectDB();

const app = express(); 

///middlewares
app.use(express.json()); 
app.use(cors());
app.use(morgan('dev'));

//routes

const PORT = process.env.PORT || 8080; 
app.use('/api/v1/test', require("./routes/testRoutes"));

//listen
app.listen(PORT,()=>{
    console.log(`Node server: Running In ${process.env.DEV_MODE} On Port ${process.env.PORT}`.bgBlue.white);
});


