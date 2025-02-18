import React, { useState } from "react";
import './header.css';
import { NavLink } from 'react-router-dom';
import { Link } from "react-router-dom";
import  Logo  from "../../../src/assets/logo2.jpg"
import { TfiAlignJustify } from "react-icons/tfi";
import { IoCloseSharp } from "react-icons/io5";

 function Header({usrname}) {
    const [menuOpen, setMenuOpen] = useState(false);
    const [hoveredLink, setHoveredLink] = useState(null);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }

    const handleMouseEnter = (linkName) => {
        setHoveredLink(linkName);
    }

    const handleMouseLeave = () => {
        setHoveredLink(null);
    }

    return (
        <div className="Headernames">
            <div className="logo"> NOTIFYNATION</div>
            <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
                <NavLink to="/Notification/latestnotification" className="nav-link"
                    onMouseEnter={() => handleMouseEnter('Notification')}
                    onMouseLeave={handleMouseLeave}>
                    Notification
                    {hoveredLink === 'Notification' && (
                        <div className="Notify">
                            <Link to="/Notification/latestnotification"><div >Latest Notification</div></Link><br />
                            <Link to="/Notification/upcommingNotification"><div>Upcoming Notification</div></Link>
                        </div>
                    )}
                </NavLink>

                <NavLink
                    to="/LatestAnnouncement/Admitcard"
                    className="nav-link"
                    onMouseEnter={() => handleMouseEnter('LatestAnnouncement')}
                    onMouseLeave={handleMouseLeave}>
                     Announcements
                    {hoveredLink === 'LatestAnnouncement' && (
                        <div className="Notify">
                            <Link className="anima" to="/LatestAnnouncement/Admitcard">Admit Card Alerts</Link><br />
                            <Link className="anima" to="/LatestAnnouncement/ExamResult">Exam Result Releases</Link><br />
                            <Link className="anima" to="/LatestAnnouncement/AnswerKey">Answer Key Insight</Link><br />
                            <Link className="anima" to="/LatestAnnouncement/CutOff">Cutoff Scores</Link><br />
                        </div>
                    )}
                </NavLink>

                <NavLink
                    to='/Examconduct/ArmyExam'
                    className="nav-link"
                    onMouseEnter={() => handleMouseEnter('ExamConduct')}
                    onMouseLeave={handleMouseLeave}>
                    Exam Conduct
                    {hoveredLink === 'ExamConduct' && (
                        <div className="Notify">
                            <Link to="/Examconduct/ArmyExam">
                                SSC Exam 
                            </Link><br></br>
                            <Link to="/Examconduct/NavyExam">
                            Navy Exams
                            </Link><br></br>
                            <Link to="/Examconduct/Airfroce">
                            Air Force Exams
                            </Link><br></br>
                            <Link to="/Examconduct/Bank">
                            Bank Exams
                            </Link><br></br>
                            <Link to="/Examconduct/Railway">
                            Railway Exams    
                            </Link><br></br>
                        </div>
                    )}
                </NavLink>

                <NavLink
                    to="/additionalresource/Eligibility"
                    className="nav-link"
                    onMouseEnter={() => handleMouseEnter('AdditionalResource')}
                    onMouseLeave={handleMouseLeave}>
                     Resources
                    {hoveredLink === 'AdditionalResource' && (
                        <div className="Notify">
                        <Link to="/additionalresource/Eligibility">Eligibility Essentials</Link><br></br>
                    <Link to="/additionalresource/Syllabus">Comprehensive Syllabus</Link><br></br>
                    <Link to="/additionalresource/Structure">Exam Structure Overview</Link><br></br>
                    <Link to="/additionalresource/Selection">Selection Pathways</Link><br></br>
                    <Link to="/additionalresource/Previous_papers">Previous Paper Archives</Link>
                    
                        </div>
                    )}
                </NavLink>
                <NavLink to='/userdashboard'><div className="accounttttt">{usrname}</div> 
                </NavLink>

                <div onClick={toggleMenu} className="closeee"><IoCloseSharp style={{ color: 'red' }} /></div>
            </nav>
            <div onClick={toggleMenu} className="menu">
                <TfiAlignJustify />
            </div>
        </div>
    );
}
export default Header;