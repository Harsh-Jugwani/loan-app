const express = require('express');
const bodyParser = require("body-parser");
const cors = require("cors");
const connectDB = require('./db/connect')
require("dotenv").config();
const PORT = 5000;
const loanRoutes = require("./routes/loan")
const userRoutes = require("./routes/user")
const app = express()
app.use(bodyParser.json());
app.use(cors());
app.use("http://localhost:5000/api/loans", loanRoutes);
app.use("/api/users", userRoutes);

app.get('/',(req,res)=>{
    res.send("hello bro all")
})
const start = async()=>{
    try{
        await connectDB();
        app.listen(PORT,()=>console.log('I am listening'))
    }
    catch(error){
        console.log(error);
    }
}
start()