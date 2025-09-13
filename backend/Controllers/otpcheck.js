const express = require('express');
var dotenv = require("dotenv");
var nodemailer = require("nodemailer");
var num;
dotenv.config();

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: false,
  auth: {
    user: process.env.SMTP_MAIL,
    pass: process.env.SMTP_PASSWORD,
  },
});

const SendOtp = async(req,res)=>{
    const {email} = req.body;

    num = Math.floor(100000+Math.random()*900000);
   console.log(email)
   console.log(num)
   const mailOptions = {
    from: process.env.SMTP_MAIL,
    to: email,
   subject: "Notify Nation - Verification OTP",
  text: `Dear User,
Your verification OTP for signing up with Notify Nation is: ${num}
Please use this OTP to complete your registration process. 
The OTP is valid for a limited time.
Thank you,
Team Notify Nation`
  };
  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      return res.status(500).json({ error: "Failed to send email" });
    } else {
      return res.status(200).json({ message: "OTP sent successfully" });
    }
  });
}
const Verify= async(req,res)=>{
    const {otp} = req.body;
    console.log(otp);
    console.log(num);
    if(otp==num){
        return res.status(201).json({"message":"verified"});
    }
    else
        return res.status(400).json({"message":"incorrect otp"});
}


exports.SendOtp = SendOtp;
exports.Verify = Verify;
