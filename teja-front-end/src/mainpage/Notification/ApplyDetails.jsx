import React from 'react'
import "./applyDetails.css"
import { IoPersonAdd } from "react-icons/io5";
import { FaAddressCard } from "react-icons/fa6";
import { RiLockPasswordFill } from "react-icons/ri";
import { FcViewDetails } from "react-icons/fc";
import { PiCertificateFill } from "react-icons/pi";
import { Link, useParams } from 'react-router-dom';
const ApplyDetails = () => {
  const {postName}=useParams();
  console.log(postName)
  return (
     <div className="applydetails_container">
     <center> <p>New candidate</p></center>
    <center><h1>One Time Registration</h1> </center>
    <div className="applydetails_fourbox">
   <div className="applydetails_fourboxes">
    <center className='applydetails_icons'><IoPersonAdd /></center>
    <h2>personal details </h2>
    <p>Candidaet's Name identication, Contact</p>
   </div>
   <div className="applydetails_fourboxes">
   <center className='applydetails_icons'><RiLockPasswordFill /></center>

    <h2>password Creation</h2>
    <p>Create New Password</p>
   </div>
   <div className="applydetails_fourboxes">
   <center className='applydetails_icons'><FaAddressCard /></center>
    <h2>Additional Details </h2>
    <p>Candadates's Nationality Address, Education</p>
   </div>
   <div className="applydetails_fourboxes">
   <center className='applydetails_icons'><PiCertificateFill /></center>
    <h2>Declaration</h2>
    <p>Candidates Details, Conforimation</p>
   </div>

    </div>
    <center>
      <div> <h1>Note</h1></div>
      <div className="applydetails_noteBox">
      Please ensure all information entered is accurate and matches your official documents. This registration is a one-time process, and the details provided will be used throughout your application. Any discrepancies found in personal, contact, or educational details may affect the validity of your application. Make sure to review your information before submission
      </div>
    </center>
    <center> <Link to={`/Applicationform/${postName}`}> <div className="continueer"> Continue</div>
    </Link>  </center></div>




  )
}

export default ApplyDetails;