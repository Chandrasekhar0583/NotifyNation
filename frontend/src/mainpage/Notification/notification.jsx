import React from 'react'
import  Header  from '../Header/Header'
import "../Exam conduct/Examconduct.css"
import { Link, Outlet } from 'react-router-dom';
import Footer from '../../footer/footer';
const Notification = ({usrname}) => {
  // console.log(usrname);
  
  return (
    <div className='total_main'>
     <div className="main_head">  <Header usrname={usrname}/></div>
     <div className="main_body">
        <div className="life_side">
          <Link to="latestnotification"><div className='clicked'>latest notification</div></Link>
          <Link to="UpcommingNotification"><div className='clicked'>upcomming notification</div></Link>
       

        </div>
        <div className="right_side">
        
    <Outlet />
    <Footer/>
        </div>
     </div>
  
    </div>
  )

}

export default Notification