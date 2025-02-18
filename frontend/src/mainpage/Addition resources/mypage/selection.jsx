import React from "react";
import { Link } from "react-router-dom";
import './mypage.css';
import { FaUserGraduate, FaAnchor, FaShieldAlt, FaPlane, FaTrain } from "react-icons/fa";
 function Selection() {
    return (
        <>
        <div className="main-container">
        <center><h1>Selection Path</h1></center>

        <div className="ul"></div>
        <br></br>
            <div className="eligibility-container">
                <div className="eligibility-header">
                    <h1>Select Your Exam Category</h1>
                </div>
                <div className="choose">
                    <div className="item">
                        <Link to="/Selection_Details()/ssc" className="ssc">SSC <FaUserGraduate/></Link>
                    </div>
                    <div className="item">
                        <Link to="/Selection_Details()/navy" className="navy">Navy <FaAnchor/></Link>
                    </div>
                    <div className="item">
                        <Link to="/Selection_Details()/army" className="army">Army <FaAnchor/></Link>
                    </div>
                    <div className="item">
                        <Link to="/Selection_Details()/airforce" className="airforce">Airforce <FaPlane/></Link>
                    </div>
                    <div className="item">
                        <Link to="/Selection_Details()/railway" className="railway">Railway <FaTrain/></Link>
                    </div>
                </div>
            </div>
            {/* <footer className="footer">
                <p>Explore more exams or contact us for more details.</p>
                <Link to="/contact" className="footer-link">Contact Us</Link>
            </footer> */}
        </div>
        </>
    );
}
export default Selection;