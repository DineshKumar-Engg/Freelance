const express = require('express');
const app =express();
const cors = require('cors');
const dotenv = require('dotenv')
dotenv.config();
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors());
const MailRouter = require('./Mail');


app.use('/mail',MailRouter)

app.get('/',(req,res)=>{
    res.send("hello")
})

const PORT = process.env.PORT
app.listen(PORT,()=>{
    console.log("Server Running at LocalHost:",PORT);
})
