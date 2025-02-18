import React, { useEffect, useState } from 'react';
// import Login from './login/login.jsx';
// import First from './interface/first.jsx';
// import Home from './mainpage/Home.jsx';
import Notification from './mainpage/Notification/notification.jsx';
import LatestAnnousment from './mainpage/Latestannousment/LatestAnnousment.jsx';
import ApplyDetails from './mainpage/Notification/ApplyDetails.jsx'
//examconduct '
import Examconduct from './mainpage/Exam conduct/Examconduct.jsx';
// import Army from './mainpage/Exam conduct/Army.jsx';
import Navy from './mainpage/Exam conduct/Navy.jsx';
import Armytest from './mainpage/Exam conduct/Armytest.jsx';
import Army from './mainpage/Exam conduct/Army.jsx';
import {Quiz} from './mainpage/Exam conduct/questions/quiz.jsx'
import Result from './mainpage/Exam conduct/questions/Result.jsx';
// import Applicationpdf from './mainpage/Notification/applypdf.jsx';
import ApplicationFrom from './mainpage/Notification/applicationform.jsx';
// import LatestAnnousment from './mainpage/Latestannousment/LatestAnnousment.jsx';
import Airfroce from './mainpage/Exam conduct/Airfroce/Airfroce.jsx';
import Railway from './mainpage/Exam conduct/railway/Railway.jsx';
import Bank from './mainpage/Exam conduct/bank/bank.jsx';
import { BrowserRouter, Routes, Route, json } from 'react-router-dom';
// import Army from './'
// import axios from 'axios'
import axios from 'axios';
import './App.css';
import Upcomming from './mainpage/Notification/Right2.jsx';
import Latestnotification from './mainpage/Notification/latestnotification.jsx';
import Getdetails from './mainpage/Notification/getdetails.jsx';
import Email from './learnBackend/emailsend.jsx';
import AdmitCardList from './mainpage/Latestannousment/AdmitCard.jsx';
import ExamResult from './mainpage/Latestannousment/ExamResult.jsx';
import { AnswerKey } from './mainpage/Latestannousment/AnswerKey.jsx';
import CutoffTable from './mainpage/Latestannousment/CutOff.jsx';
import { Forms } from './mainpage/Latestannousment/form.jsx';
import { Key } from './mainpage/Latestannousment/examkey.jsx';

// import Login from './login/login.jsx';
// import Signup from './login/SignupPage.jsx';
//login
import Signup from './login/SignupPage.jsx'
import Login from './login/SigninPage.jsx';
import Get_More2 from './mainpage/Notification/Get_More2.jsx';
import Applicationpdf from './mainpage/Notification/applypdf.jsx';
import Applicationform from './mainpage/Notification/applicationform.jsx';
import Testing from './testing/testing.jsx';
import Additionalresource from './mainpage/Addition resources/mypage/Additionalresource.jsx';
import Eligibility from './mainpage/Addition resources/mypage/eligibilitypage.jsx';
import Syllabus from './mainpage/Addition resources/mypage/Syllabus.jsx';
import Structure from './mainpage/Addition resources/mypage/exam_structure.jsx';
import Selection from './mainpage/Addition resources/mypage/selection.jsx';
import Previous_papers from './mainpage/Addition resources/mypage/previouspapers.jsx';
import  ExamDetails  from './mainpage/Addition resources/mypage/eligibilitydats.jsx';
import  Syllabus_Details  from './mainpage/Addition resources/mypage/SyllabusDetails.jsx'
import  Selection_Details  from './mainpage/Addition resources/mypage/selection_details.jsx';
import  Previous_Papers_Details  from './mainpage/Addition resources/mypage/previous_papersdetails.jsx';
import  Exam_Structure  from './mainpage/Addition resources/mypage/exam_structuredata.jsx';
//deshbord 
import HallTicket from './mainpage/Latestannousment/hallticket.jsx';
import Dash from './account/dashboard.jsx';

function App() {
  
  const [usrdata, setusrdata] = useState(() => {
    // Check if data exists in localStorage, parse if valid JSON
    const savedData = localStorage.getItem('usrdata');
    try {
      return savedData ? JSON.parse(savedData) : "";
    } catch (e) {
      console.error("Error parsing saved data:", e);
      return "";
    }
  });

  const update = (n) => {
    var data = n[0];
    setusrdata(n[0]);
    // console.log(JSON.stringify(n))
    localStorage.setItem('usrdata', JSON.stringify(data));
  };

  useEffect(() => {
    const savedData = localStorage.getItem('usrdata');
    if (savedData) {
      try {
        const parsedData = JSON.parse(savedData);
        setusrdata(parsedData);
        // console.log(parsedData);
      } catch (e) {
        console.error("Error parsing stored data on load:", e);
      }
    }
  }, []);

  return (
  
     <BrowserRouter>
        <Routes>
          {/* <Route path='/'  element={<Home />}/> */}
          <Route path="/userdashboard" element={<Dash usrname={usrdata.name}/>}/>
          {/* <Route path="/" element={<First />} /> */}
          <Route path="/" element={<Signup />} />
          <Route path="/Login" element={<Login update={update}/>}/>
          {/* <Route path='/Header' element={<Headers usrname={usrname}/>}/>   */}
          <Route path="/Notification" element={<Notification usrname={usrdata.name}   />} >
          <Route  path='latestnotification'  element={<Latestnotification usrname={usrdata.name}/>}/>
          <Route path='upcommingNotification' element={<Upcomming />}/>
         
          </Route>
          <Route path="/getdetails/:Id" element={<Getdetails usrname={usrdata.name}/>}/>
          <Route path="/Get_More2/:Id" element={<Get_More2/>}/>
          <Route path="/ApplyDetails/:postName" element={<ApplyDetails />} />
          {/* <Route path="/applicationfrom" element={<ApplicationFrom />} /> */}
          <Route path="/Applicationform/:type" element={<Applicationform usrname={usrdata.name}/>}/>
          <Route path="/Applicationpdf/:registrationNumber" element={<Applicationpdf />}/>

          {/* <Route path="/" element={<Army />} /> */}

       
          <Route path="/LatestAnnouncement" element={<LatestAnnousment usrname={usrdata.name}/>}>
                <Route path="Admitcard" element={<AdmitCardList/>}></Route>
                <Route path="ExamResult" element={<ExamResult/>}/>
                <Route path="AnswerKey" element={<AnswerKey/>}/>
                <Route path="CutOff" element={<CutoffTable/>}/>
                
                 
          
          </Route>
                <Route path="AdmitCardForm/:exam2" element={<Forms/>}/>
          <Route path="/HallTicket/:obj" element={<HallTicket/>}/>
                <Route path="/Questions/:exam" element={<Key/>}></Route>
          
          {/* Nested Routes for Exam Conduct */}
          <Route path="/Examconduct" element={<Examconduct usrname={usrdata.name}/>}>
          <Route  path="ArmyExam" index element={< Army />} />
           <Route path="NavyExam" element={<Navy />} />
           <Route path="Airfroce" element={<Airfroce />} />

           <Route path="Bank" element={<Bank />} />
           <Route path="Railway" element={<Railway />} />
        </Route>
        <Route path="/Examconduct/ArmyExam/:userId" element={<Armytest />} />
        <Route path="/quiz" element={< Quiz email={usrdata.email}/>} />
        <Route path="/result" element={< Result />} />
        
         <Route path='/additionalresource' element={<Additionalresource usrname={usrdata.name}/>}>
        <Route path='Eligibility' element={<Eligibility/>}/> 
       <Route path="Syllabus" element={<Syllabus />} />
         <Route path="Structure" element={<Structure />}/>
        <Route path="Selection" element={<Selection />} />
       <Route path="Previous_papers" element={<Previous_papers />} />
 

       {/*  <Route path="ExamDetails/:type" element={<ExamDetails />}/>
        <Route path="Syllabus_Details()/:type" element={<Syllabus_Details />}/>
        <Route path="Selection_Details()/:type" element={<Selection_Details />}/>
        <Route path="Previous_Papers_Details()/:type" element={< Previous_Papers_Details/>}/>
        <Route path="Exam_Structure/:type" element={<Exam_Structure/>}/> */}
        </Route> 
       <Route path="/ExamDetails/:type" element={<ExamDetails />}/>
       <Route path="/Syllabus_Details()/:type" element={<Syllabus_Details />}/>
        <Route path="/Selection_Details()/:type" element={<Selection_Details />}/>
        <Route path="/Previous_Papers_Details()/:type" element={< Previous_Papers_Details/>}/>
        <Route path="/Exam_Structure/:type" element={<Exam_Structure/>}/>

        </Routes>
      </BrowserRouter>


    
    
  );
}

export default App;
