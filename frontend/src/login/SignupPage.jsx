import React, { useState } from "react";
import './SignupPage.css';
import axios from "axios";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

// import {}

const Signup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState(' ');
    const [message,setMessage] = useState('')
    const [flag,setFlag] = useState(false)
    const [otp,setOtp] = useState(0);
    const [msg,setMsg] = useState("Verify")
    const [colo,setColo] = useState("#1560BD")
    const verify=async(e)=>{
        e.preventDefault;
        const status = await axios.post("http://localhost:5000/verify",{otp});
            if(status.data.message==="verified")
            {
                setFlag(true);
                setMsg("Verified");
                setColo("rgb(34, 185, 0)")
            }
            console.log(status.data.message)
    }
    const sendotp =async()=>{
        if (email.trim() === '') {
            setMessage("Enter your email");
            }
            else
            {
                setMessage(" ")
                const response = await axios.post("http://localhost:5000/sendotp", { "email":email });
                console.log("Response:", response.data);
            }
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password.length < 8) {

            setError("Password must be 8 characters");
            return;
        }
        const tst = /^[A-Z]$/
        if (!tst.test(password.charAt(0))) {
            setError("First letter should be a capital character");
            return;
        }

        if (password !== confirmPassword) {
            setError("Passwords do not match");
            return;
        }

        setError('');
        try {

            const response = await axios.post("http://localhost:5000/get", {
                name,
                email,
                password
            });
            window.location.href = "/Login";
        } catch (err) {
            setError("user already exists");
        }
    };

    return (
        <>
            <div className="Parent">
                <div className="Main-container">
                    <div className="box">
                        <form onSubmit={handleSubmit}>
                            <h2>Sign Up</h2>
                            <div className="input-itm">
                                <label>Fullname</label>
                                <input type="text" placeholder="Enter your Fullname"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required />
                            </div>
                            <div className="input-itm" style={{height:95,display:"flex",flexDirection:"column",rowGap:5,}}>
                                <label style={{margin:3,display:"flex",justifyContent:"space-between"}}>Email <div style={{color:"rgb(245, 8, 8)"}}> {message}</div> </label>
                                {/* <div style={{height:1,color:"rgb(248, 125, 125)"}} >hai</div> */}
                               <div style={{width:"100%",height:25,display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
                               <input type="email" placeholder="Enter your Email"
                                    value={email}
                                    style={{height:12}}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required />
                                    
                               </div>
                            <div  style={{width:"100%",height:25,display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
                               <div style={{width:"100%",height:25,display:"flex",flexDirection:"row",alignItems:"center"}}> <input type="number" placeholder="Enter OTP" 
                                    style={{width:150,height:13}}
                                    onChange={(e) =>setOtp(e.target.value)}
                                    required />
                                    {flag?<FontAwesomeIcon icon={faCheck} style={{color: " rgb(34, 185, 0)",fontSize:25}} />:<></>}
                                    </div>
                                    <button onClick={()=>sendotp()} type="button" style={{width:50,height:25,fontSize:13,display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:" #1560BD",marginRight:3}} >OTP</button>
                                    <button type="button" style={{width:60,height:25,fontSize:13 , display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",backgroundColor:colo}} onClick={(e)=>verify(e)}>{msg}</button>
                            </div>
                            </div>
                            <div className="input-itm">
                                <label>Password</label>
                                <input type="password" placeholder="Enter your Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required />
                            </div>
                            <div className="input-itm">
                                <label>Confirm Password</label>
                                <input type="password" placeholder="Confirm your Password"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    required />
                            </div>
                            {error && <p className="error">{error}</p>}
                            <button type="submit" className="submit-btn">Signup</button>
                        </form>
                        <p className="toggle-text">Already have an account? <span><Link to='/Login'>Login</Link></span></p>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Signup;