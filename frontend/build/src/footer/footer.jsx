import React from "react";
import './footer.css';
import { FaFacebook, FaInstagram, FaLinkedin, FaTelegram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

 const Footer = () => {
    return (
        <div className="footer1234">
            <div className="footer-content">
                <div className="footer-column">
                <h1 style={{ color: "rgb(0, 123, 255)" }}>NotifyNation</h1>
                    <div className="address">
                        ADITYA UNIVERSITY, ADB Road, Surampalem<br />
                        Pin:533437 Kakinda District, Andhra Pradesh, INDIA.<br />
                        Phone : 1001001100<br />
                        <a href="#">Contact Us</a>
                    </div>
                    <div className="social-icons">
                        <a href="https://www.facebook.com/"><FaFacebook /></a>
                        <a href="https://x.com/?lang=en"><FaXTwitter /></a>
                        <a href="https://www.youtube.com/"><FaYoutube /></a>
                        <a href="https://www.instagram.com/"><FaInstagram /></a>
                        <a href="https://www.linkedin.com/home?originalSubdomain=in&original_referer=https%3A%2F%2Fwww.bing.com%2F"><FaLinkedin /></a>
                        <a href="https://web.telegram.org/k/"><FaTelegram /></a>
                    </div>
                </div>
                <div className="footer-column">
                    <h3>PRODUCTS</h3>
                    <a href="#">Home</a>
                    <a href="#">Job posting</a>
                    <a href="#">Futures & Options</a>
                    <a href="#">Enterprise</a>
                    <a href="#">Post a Job</a>
                    <a href="#">Privacy & Cookie Policy</a>
                    <a href="#">Terms & Conditions</a>
                </div>
                <div className="footer-column">
                    <h3>GET TO KNOW US ?</h3>
                    <a href="#">About Us</a>
                    <a href="#">Pricing</a>
                    <a href="#">Blog</a>
                    <a href="#">Media & Press</a>
                    <a href="#">Careers</a>
                    <a href="#">Help and Support</a>
                    <a href="#">Trust and Safety</a>
                </div>
                <div className="footer-column">
                    <h3>CONTACT</h3>
                    <a href="https://accounts.google.com/v3/signin/identifier?continue=https%3A%2F%2Fmail.google.com%2Fmail%2F%3Fhl%3Den&emr=1&hl=en&ifkv=AcMMx-dPr9rxBOrX6Qz4GroqvkefjxEnTK01oYFCVlZm91RZVW0vmx_LeLYVpafizX7h2tfmmauhvg&ltmpl=default&ltmplcache=2&osid=1&passive=true&rm=false&scc=1&service=mail&ss=1&flowName=GlifWebSignIn&flowEntry=ServiceLogin&dsh=S288865250%3A1729849461746646&ddm=0">Email</a>
                    <a href="#">Mobile Number</a>
                    <a href="https://www.facebook.com/">Facebook</a>
                    <a href="https://www.instagram.com/">Instagram</a>
                    <a href="https://x.com/?lang=en">Twitter</a>
                    <a href="https://www.linkedin.com/home?originalSubdomain=in&original_referer=https%3A%2F%2Fwww.bing.com%2F">LinkedIn</a>
                    <a href="https://web.telegram.org/k/">Telegram</a>
                </div>
            </div>
        </div>
    );
};

export default Footer;