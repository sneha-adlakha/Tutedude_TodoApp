const express=require('express');
const bodyParser=require('body-parser');


var app=express();
app.set("view engine","ejs");
app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));
var tasks=[];
app.get("/",(req,res)=>{
   res.render("list",{ejes:tasks})
})

app.post("/",(req,res)=>{
   var item=req.body.task;
   tasks.push(item);
   res.redirect("/");    
})
app.listen(3000,()=>{
    console.log("Server Connected Successfully")
})