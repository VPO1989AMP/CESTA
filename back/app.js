const express = require("express")

const app = express()


app.get("/ping",async(req,res)=>{
    res.send({fecha:new Date().toISOString()})
})


app.listen(5555,()=>{
    console.log("listening")
})