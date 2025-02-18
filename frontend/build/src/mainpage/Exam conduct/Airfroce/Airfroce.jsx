
import React from 'react';
import '../navy.css' // Updated to airforce.css
import { Link } from 'react-router-dom';
import usesData from './Airfrocedata.js'; // Make sure the data corresponds to Air Force
import { useState } from 'react';
function AirForce() {
const [searched, setSearched] = useState(''); 

  const searchedData = (e) => {
    const { value } = e.target;
    setSearched(value);
  };

  const searchdt = searched.toLowerCase();
  const filterdata = usesData.filter((data) => {
    const nameinclude = data.name.toLowerCase().includes(searchdt);
    const jobdetailsinclude = data.shift.toLowerCase().includes(searchdt);
    const qualificationinclude = data.free.toLowerCase().includes(searchdt);
    return nameinclude || jobdetailsinclude || qualificationinclude;
  });
  const final_data = searched ? filterdata : usesData;
  return(
    <div>
      
      <div className='search1'>
        <div className=" venkatpani"><h3> Airforce Examination</h3></div>
       <div>
        <input type='search' name="search" placeholder='search exams' onChange={(e)=>{searchedData(e)}}/>

       </div>
      

      </div>
     <div  className="navy-card1">
    {
      final_data.map((eachuser)=>{
        const { id, free, name, shift, date, questions, time, marks, take } = eachuser;
        return<article>
       
       <div className="card-header1">
         <span className="free-badge1">{free}</span>
         <span className="exam-name1">{name}</span>
       </div>
       <div className="card-body1">
         <div>{shift}</div>
         <div>{date}</div>
         <div>{questions} || {time} || {marks}</div>
        
       </div>
       <div className="card-footer1">
         <button className="take-test-button1"><Link  to={`/Examconduct/ArmyExam/${id}`}  key={id}> {take}</Link></button>
       </div>
    

        </article>
        
        
      })
    }
     </div>
    </div>
  )
}

export default AirForce;
