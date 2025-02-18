import React, { useEffect } from 'react';
import './mypage.css';
import { Link, Outlet } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export function Additional_Resources() {
    const navigate = useNavigate();

    useEffect(() => {
        // Navigate to the Eligibility page by default
        navigate("/Eligibility");
    }, [navigate]);

    return (
        <div className="main">
            <div className="keyconcepts">
                <div className="content">
                    <center><b>Additional Resources</b></center>
                    <ul>
                        <li><Link to="/Eligibility">Eligibility Essentials</Link></li>
                        <li><Link to="/Syllabus">Comprehensive Syllabus</Link></li>
                        <li><Link to="/Structure">Exam Structure Overview</Link></li>
                        <li><Link to="/Selection">Selection Pathways</Link></li>
                        <li><Link to="/Previous_papers">Previous Paper Archives</Link></li>
                    </ul>
                </div>
            </div>
            <div className="main_content">
                <Outlet />
            </div>
        </div>
    );
}
