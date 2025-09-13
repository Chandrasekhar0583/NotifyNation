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
   const otpHTML = `
  <div style="font-family: Arial, sans-serif; padding: 20px; border: 1px solid #ddd; border-radius: 8px; max-width: 400px; margin: auto;">
    <h2 style="color: #2c3e50; text-align: center;">Notify Nation</h2>
    <p style="font-size: 16px; color: #333;">
      Dear User,
    </p>
    <p style="font-size: 16px; color: #333;">
      Your verification OTP for signing up with <strong>Notify Nation</strong> is:
    </p>
    <h1 style="text-align: center; background: #f4f4f4; padding: 15px; border-radius: 6px; color: #e74c3c; letter-spacing: 5px;">
      ${num}
    </h1>
    <p style="font-size: 14px; color: #555;">
      Please use this OTP to complete your registration. The OTP will expire in 10 minutes.
    </p>
    <p style="margin-top: 20px; font-size: 14px; color: #333;">
      Regards, <br/>
      <strong>Team Notify Nation</strong>
    </p>
  </div>`;

const mailOptions = {
  from: process.env.SMTP_MAIL,
  to: email,
  subject: "Notify Nation - Verification OTP",
  html: otpHTML
};

  //  const mailOptions = {
  //   from: process.env.SMTP_MAIL,
  //   to: email,
  //   subject: "OTP",
  //   text: `${num}`
  // };
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