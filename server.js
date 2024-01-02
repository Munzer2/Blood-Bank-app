const express = require('express'); 

const app = express(); 


//routes
app.get('/',(req,res)=>{
    res.status(200).json({
        message: "welcome", 
    });
})
const PORT = 3000; 

//listen
app.listen(PORT,()=>{
    console.log("Node server running.");
});


