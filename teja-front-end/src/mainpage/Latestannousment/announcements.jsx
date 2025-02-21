import React from "react";
import {BrowserRouter,Routes,Route,Link,Outlet} from "react-router-dom";
import "./announcements.css";
import { Forms } from "./form";
// import { AdmitCard } from "./AdmitCard";
import Footer from "../../footer/footer";
export function Announcement_main()
{

    return(
        <div className="Announcement_main">
            <div className="Announcement_left">
                <h2 className="bar">Announcements</h2>
                <div className='click'><Link to="/">Admit Card Alerts</Link></div>
                <div className='click'><Link to="/ExamResult">Exam Result Releases</Link></div>
                <div className='click'> <Link to="/AnswerKey">Answer Key Insight</Link></div>
                <div className='click'><Link to="/CutOff">Cutoff Scores</Link></div>
                {/* <div><Link to="">Written Exam Feedback</Link></div> */}
            </div>
            <div className="Announcement_right">
                <Outlet/>
                <Footer/>
            </div>
            {/* <Forms/> */}
        </div>
    )

}