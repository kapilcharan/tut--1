const express=require("express");
const hbs=require("hbs");
const r=require("./src/r/main")
const { sendmail }=require("./src/r/nodemailer")
const bodyParser=require("body-parser")
const mongoose=require("mongoose")
const app=express();


app.use(bodyParser.urlencoded({extended:true}))
app.use('',r);
// /static/css/style.css
app.use('/public',express.static("public"))


// (template engine)
app.set('view engine','hbs')
app.set("views","views")


mongoose.connect("mongodb://127.0.0.1:27017/pawan",{useNewUrlParser:true,useUnifiedTopology:true},).then(()=> {console.log('db connected');}).catch((err)=>{console.log(err);});



app.listen(2000,()=>{
    console.log("server connected");
})



