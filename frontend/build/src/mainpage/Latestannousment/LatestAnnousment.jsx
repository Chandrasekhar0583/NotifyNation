import React from 'react'
import  Header  from '../Header/Header' 
import '../Notification/notification.css'
import { Outlet ,Link } from 'react-router-dom';
import Footer from '../../footer/footer';
const LatestAnnousment = ({usrname}) => {
  return (
    <div className='total_main'>
     <div className="main_head">  <Header usrname={usrname} /></div>
     <div className="main_body">
        <div className="life_side">
          {/* <div>Admit Card Alerts</div>
          <div>Exams results related</div> */}
          <div><Link to="Admitcard"> <div className="click"></div> Admit Card Alerts</Link></div><br></br>
                <div><Link to="ExamResult">Exam Result Releases</Link></div><br></br>
                <div><Link to="AnswerKey">Answer Key Insight</Link></div><br></br>
                <div><Link to="CutOff">Cutoff Scores</Link></div>
        </div>
        <div className="right_side">
          <Outlet/>
          <Footer />
        </div>
     </div>
   
    </div>
  )
}

export default LatestAnnousment