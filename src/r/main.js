const express=require("express");
const { route } =require('express/lib/application');
const { sendmail }=require("./nodemailer.js");
const routes=express.Router();
const contact=require('../models/contect.js');

// navbar called 

routes.get("/i",(req,res)=>{
    res.render("index");
})
routes.get("/",(req,res)=>{
    res.render("Home");
})
routes.get("/about",(req,res)=>{
    res.render("about");
})
routes.get("/contact",(req,res)=>{
    res.render("contact1");
})
routes.get("/solar dryer",(req,res)=>{
    res.render("product1");
})
routes.get("/reneval battery",(req,res)=>{
    res.render("product2");
})
routes.get("/Team",(req,res)=>{
    res.render("Team");
})
// routes.post(signup);



// routes.post("/form..",async(req,res)=>{
//     console.log(req.body)
//     // console.log("form submittes");
//     try{
//         const data=await contact.create(req.body);
//         console.log(data);
//         console.log("form submitted")
//         res.redirect("/");

//     }catch{
//         console.log("error");
//         res.redirect("/")
//     }
// })


routes.post("/formsubmission",async(req,res)=>{
    console.log(req.body)
    // console.log("form submittes");
    try{
        const data=await contact.create(req.body); 
        console.log(data);
        console.log("form submited")
        let user12=await userModel.create(data);
        sendmail("formsubmition",user12);
        res.redirect("/");

    }catch{
        console.log("form not submitted");
        res.redirect("/")
    }
})

module.exports=routes