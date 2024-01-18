// const express=require("express");
// const { route } =require('express/lib/application')
// const routes=express.Router()
// const contact=require('../models/contect.js')
// const express=require("express");
// const hbs=require("hbs");
// const r=require("./r/main")
// const bodyParser=require("body-parser")
// const mongoose=require("mongoose")
// const app=express();




"use strict";
const nodemailer = require("nodemailer");


module.exports.sendMail=async function sendmail(str,data){
const transporter = nodemailer.createTransport({
  host: "smtp.forwardemail.net",
  port: 465,
  secure: true,
  auth: {
    // TODO: replace `user` and `pass` values from <https://forwardemail.net>
    user: "kapilcharan2004.gmail.com",
    pass: "hxke ewag wpmi nbnp",
  },
});

// async..await is not allowed in global scope, must use a wrapper
async function main() {
  // send mail with defined transport object


  var Osubject,Otext,Ohtml;
  if(str="formsubmition"){
    Osubject=`thanks for signing `;

    Ohtml=`
    // name- ${data.name}
    email-${data.email}
    
    `
  }

  const info = await transporter.sendMail({
    from: '"Fred Foo 👻" <kapilcharan2004@gmail.com>', // sender address
    to: "2021uch0011@gmail.com", // list of receivers
    subject: Osubject, // Subject line
    text: Otext, // plain text body
    html:Ohtml, // html body
  });


  console.log("Message sent", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  //
  // NOTE: You can go to https://forwardemail.net/my-account/emails to see your email delivery status and preview
  //       Or you can use the "preview-email" npm package to preview emails locally in browsers and iOS Simulator
  //       <https://github.com/forwardemail/preview-email>
  //
}

main().catch(console.error);
}


