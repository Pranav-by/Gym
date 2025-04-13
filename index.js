const express = require('express')
const app = express();


const PORT = 4000;

require('./DBConn/conn')

app.get('/',(req,res)=>{
    res.send({"message":"Congrats your server is running on Port 4000 successfully"})
})

app.listen(PORT,()=>{
    console.log("Server is running on Port 4000")
})