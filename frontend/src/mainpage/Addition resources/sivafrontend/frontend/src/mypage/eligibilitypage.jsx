import React from "react";
import { Link } from "react-router-dom";
import './mypage.css';

export function Eligibility() {
    return (
        <>
        <center><h1>Eligibility</h1></center>
        <div className="main-container">
            <div className="eligibility-container">
                <div className="eligibility-header">
                    <h1>Select Your Exam Category</h1>
                </div>
                <div className="choose">
                    <div className="item">
                        <Link to="/ExamDetails/ssc" className="ssc">SSC</Link>
                    </div>
                    <div className="item">
                        <Link to="/ExamDetails/navy" className="navy">Navy</Link>
                    </div>
                    <div className="item">
                        <Link to="/ExamDetails/army" className="army">Army</Link>
                    </div>
                    <div className="item">
                        <Link to="/ExamDetails/airforce" className="airforce">Airforce</Link>
                    </div>
                    <div className="item">
                        <Link to="/ExamDetails/railway" className="railway">Railway</Link>
                    </div>
                </div>
            </div>
            <footer className="footer">
                <p>Explore more exams or contact us for more details.</p>
                <Link to="/contact" className="footer-link">Contact Us</Link>
            </footer>
        </div>
        </>
    );
}
