const express=require('express');
const mongoose=require('mongoose');
const path=require('path');
const dburl='mongodb://localhost:27017/mydb';

const app=express()
mongoose.connect(dburl).then(()=>{
    console.log("Database connected successfully");
    app.listen(3000,()=>console.log("server runnning on port 3000"));
}).catch(()=>console.log("something went wrong"));

app.use(express.static(path.join(__dirname,"public")));

app.get("/",(req,res)=>{
 res.sendFile(path.join(__dirname,"views","home.html"));
 });

app.get("/login",(req,res)=>{
    res.sendFile(path.join(__dirname,"views","login.html"));
});

app.get("/registration",(req,res)=>{
    res.sendFile(path.join(__dirname,"views","registration.html"));
});

app.get("/userlist",(req,res)=>{
    res.sendFile(path.join(__dirname,"views","userlist.html"));
});
app.get("/dashboard",(req,res)=>{
    res.sendFile(path.join(__dirname,"views","dashboard.html"));
});