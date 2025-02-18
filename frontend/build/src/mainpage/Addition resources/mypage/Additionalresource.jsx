import React from 'react'
import  Header  from '../../Header/Header';
import "../../Notification/notification.css"
import { Link, Outlet } from 'react-router-dom';
import Footer from '../../../footer/footer';
const Additionalresource = ({usrname}) => {
    return (
        <div className='total_main'>
         <div className="main_head">  <Header usrname={usrname}/></div>
         <div className="main_body">
            <div className="life_side">
            <Link to="Eligibility"><div>Eligibility Essentials</div></Link>
                        <Link to="Syllabus"><div>Comprehensive Syllabus</div></Link>
                        <Link to="Structure"><div>Exam Structure Overview</div></Link>
                        <Link to="Selection"><div>Selection Pathways</div></Link>
                        <Link to="Previous_papers"><div>Previous Paper Archives</div></Link>
                    
            </div>
            <div className="right_side">
            <Outlet /> 
            <Footer/> 
        
            </div>
         </div>
      
        </div>
      )
}

export default Additionalresource