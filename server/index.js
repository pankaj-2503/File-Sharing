const express=require("express");
const app=express();

const port=8000;

app.get('/',(req,res)=>{
    console.log("hello world");
})

app.listen(()=>{
    console.log(`App is listening at port ${port}`);
})