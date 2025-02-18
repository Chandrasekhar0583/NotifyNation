import React from "react";
import { Link } from "react-router-dom";
import './mypage.css';
import { FaUserGraduate, FaAnchor, FaShieldAlt, FaPlane, FaTrain } from "react-icons/fa";
 function Structure() {
    return (
        <>
        <div className="main-container">
        <center><h1>Exam Structure Overview</h1></center>

        <div className="ul"></div>
        <br></br>
            <div className="eligibility-container">
                <div className="eligibility-header">
                    <h1>Select Your Exam Category</h1>
                </div>
                <div className="choose">
                    <div className="item">
                        <Link to="/Exam_Structure/ssc" className="ssc">SSC <FaUserGraduate/></Link>
                    </div>
                    <div className="item">
                        <Link to="/Exam_Structure/navy" className="navy">Navy <FaAnchor/></Link>
                    </div>
                    <div className="item">
                        <Link to="/Exam_Structure/army" className="army">Army <FaShieldAlt/></Link>
                    </div>
                    <div className="item">
                        <Link to="/Exam_Structure/airforce" className="airforce">Airforce <FaPlane/></Link>
                    </div>
                    <div className="item">
                        <Link to="/Exam_Structure/railway" className="railway">Railway <FaTrain/></Link>
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
export default Structure;
