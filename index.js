const express= require("express");
const app= express();
const cookieParser= require("cookie-parser");
const csrf = require("csurf");

// middleware
app.set("view engine", "ejs");
app.use(express.urlencoded({extended:false}));
app.use(express.json());


app.use(cookieParser());
const csrfProtection = csrf({cookie:true});  //middleware

// Routes//
app.get("/myform" , csrfProtection, (req,res)=>{
         res.render("cookie.ejs", {csrfToken:req.csrfToken()});
})

app.post("/submit" , csrfProtection, (req,res)=>{
         res.send(req.body);
})






app.listen(3000, ()=>{
         console.log("started ");
})