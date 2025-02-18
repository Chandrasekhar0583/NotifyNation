import React, { useState } from "react";
import axios from "axios";
import './announcements.css'
import { useNavigate, useParams } from 'react-router-dom';


export function Forms()
{
    const [error ,setError]=useState('');
    const {exam2}=useParams();
    console.log(exam2)
    const [obj, setObj] = useState({
        RegistrationId:-1,
        DateOfBirth:'',
        Exam:exam2,
    });
    const update = (e)=>
    {
        const {name,value} =e.target;
        setObj(prev=>({...prev,[name]:value}));
    }
    const navigate = useNavigate()
    const download = (e)=>{
        e.preventDefault();
        // axios.post("")
        // axios.post("http")
       const objStr = encodeURIComponent(JSON.stringify(obj));
    navigate(`/HallTicket/${objStr}`);
    console.log(obj);
    }
    return(<div className="Announcement_right">
        <div className="container1">
        
        <div className='halltickethead'>{exam2}
       
      </div>
        <form className="AdmitForm" >
            <label>Registration Id</label>
            <input type="number" name="RegistrationId" onChange={(e)=>update(e)} />
            <br></br>
            <label>Date Of Birth</label>
            <input type="date" name="DateOfBirth" onChange={(e)=>update(e)}/>
            <button className="download-btn1" onClick={(e)=>download(e)}>Submit</button>
        </form>
        </div>
    </div>)
}