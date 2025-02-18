import React, { useState } from 'react';
import  Header  from '../Header/Header'; 
import { Link, Outlet } from 'react-router-dom';
import '../Notification/notification.css';
import { TfiArrowCircleDown } from "react-icons/tfi";   
import './Examconduct.css'
import Footer from '../../footer/footer';
const Examconduct = ({usrname}) => {
  // State for Navy dropdown visibility
//   const [isNavyDropdownVisible, setIsNavyDropdownVisible] = useState(false);
//  const [isArmyDropdownVisible, setIsArmyDropdownVisible] = useState(false);

  // Function to handle link click
  // const handleNavyLinkClick = (exam) => {
  //   if (exam === 'NavyExam') {
     
  //     setIsNavyDropdownVisible(!isNavyDropdownVisible);
  //   } else {
  //     setIsNavyDropdownVisible(false); 
  //   }
  // };
  // const handleArmyLinkClick = (exam) =>{
  //   if(exam = 'ArmyExam'){
  //     setIsArmyDropdownVisible(!isArmyDropdownVisible);

  //   }else{
  //     setIsArmyDropdownVisible(false)
  //   }
  // }

  

  return (
    <div className='total_main'>
      <div className="main_head"><Header usrname={usrname}/></div>
      <div className="main_body">
        <div className="life_side">
          {/* Army Link */}
          <Link to="ArmyExam"  >
            <div className='click'>SSC Exam </div>
          </Link>
         

          {/* {isArmyDropdownVisible && (
  <div className="navy-dropdown">
    
    <Link key="CGL" to="SSCExam/CGL" className="dropdown-item">Combined Graduate Level (CGL)</Link>
<Link key="CHSL" to="SSCExam/CHSL" className="dropdown-item">Combined Higher Secondary Level (CHSL)</Link>
<Link key="JE" to="SSCExam/JE" className="dropdown-item">Junior Engineer (JE)</Link>
<Link key="MTS" to="SSCExam/MTS" className="dropdown-item">Multi-Tasking Staff (MTS)</Link>
<Link key="CPO" to="SSCExam/CPO" className="dropdown-item">Central Police Organization (CPO)</Link>
<Link key="GD" to="SSCExam/GD" className="dropdown-item">General Duty (GD)</Link>
<Link key="Stenographer" to="SSCExam/Stenographer" className="dropdown-item">Stenographer Grade C and D</Link>

    
    
    
  </div>
)} */}


          {/* Navy Link with dropdown */}
          <Link   to="NavyExam"    >
            <div className='click'>Navy Exams </div>
          </Link>
          {/* Navy Dropdown Menu          className="side-link"*/}
          <Link to="Airfroce"  >
            <div className='click'>Airfroce Exams </div>
          </Link>
          <Link to="Bank"  >
            <div >Bank Exams</div>
          </Link>
          <Link to="Railway"  >
            <div className='click'>Railway Exams</div>
          </Link>


        </div>
        <div className="right_side">
          <Outlet />
          <Footer />

        </div>
      </div>
    </div>
  );
};

export default Examconduct;
