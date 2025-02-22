// import React from "react";
// import { useParams } from "react-router-dom";
// import data from './getdetailsdata';
// import './getdetails.css'
// import { Link } from "react-router-dom";
// import axios from "axios";
// const Getdetails = ({usrname}) => {
//   const { Id } = useParams();
//   console.log(usrname);
//   const examdata = data.find((eachExam) => eachExam.id === Id);
//   const handleDownload = () => {
//     const link = document.createElement('a');
//     link.href = `${import.meta.env.VITE_REACT_APP_BACKEND}/api/download/${examdata.pdf_filename}`;
//     link.download = `${examdata.post_title}.pdf`;
//     link.click();
//   };
//   console.log(examdata.post_name);
//   const handleApplyClick = async (event) => {
//     try {
//         // Check if the user has already applied for this post
//         const response = await axios.post(`${import.meta.env.VITE_REACT_APP_BACKEND}/checkApplication`, {username: usrname, post: examdata.post_name });

//         if (response.data.alreadyApplied) {
//             // Prevent navigation and show an alert
//             event.preventDefault();
//             alert("You have already applied for this post.");
//         }
//         // No else clause needed; if they haven't applied, the <Link> will naturally navigate
//     } catch (error) {
//         console.error("Error checking application status:", error);
//         event.preventDefault();
//         alert("An error occurred. Please try again.");
//     }
// };
//   return (
//     <div className="ve_getData">
//       <div className="ve_post_title">{examdata.post_title}</div>
//       <div className="ve_post_details">
//         <div className="ve_post_name">{examdata.post_name}</div>
//         <div className="ve_post_date">Posted on: {examdata.post_date}</div>
//         <div className="ve_post_update">Last Updated: {examdata.post_update}</div>
//         <div className="ve_post_vacncy">Vacancies: {examdata.post_vacancy}</div>
//       </div>
//       <div className="ve_basic_information">
//         Basic Information: <span className="ve_info">{examdata.post_information}</span>
//       </div>
//       <div className="ve_application_fee">
//         <h3>Application Fee</h3>
//         <ul>
//           {examdata.post_application1 && <li className="ve_application1">{examdata.post_application1}</li>}
//           {examdata.post_application2 && <li className="ve_application2">{examdata.post_application2}</li>}
//           {examdata.post_application3 && <li className="ve_application3">{examdata.post_application3}</li>}
//         </ul>
//       </div>
//       <h3>Important Dates</h3>
//       <div className="ve_important_dates">
//         <ul>
//           {examdata.post_imp1 && <li className="ve_imp1">{examdata.post_imp1}</li>}
//           {examdata.post_imp2 && <li className="ve_imp2">{examdata.post_imp2}</li>}
//           {examdata.post_imp3 && <li className="ve_imp3">{examdata.post_imp3}</li>}
//         </ul>
//       </div>
//       <h3>Age Limit</h3>
//       <div className="ve_age_limit">
//         <ul>
//           {examdata.post_age1 && <li className="ve_age1">{examdata.post_age1}</li>}
//           {examdata.post_age2 && <li className="ve_age2">{examdata.post_age2}</li>}
//           {examdata.post_age3 && <li className="ve_age3">{examdata.post_age3}</li>}
//         </ul>
//       </div>

//       <div className="ve_apply_pdf">
//         <div className="ve_apply" onClick={handleApplyClick}>
//           <Link to={`/ApplyDetails/${examdata.post_name}`}>Apply</Link>
//         </div>
//         <div className="ve_pdf" onClick={handleDownload}>Know More</div>
//       </div>
//     </div>
//   );

//   };
  
//   export default Getdetails;

import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import data from './getdetailsdata';
import './getdetails.css';
import axios from "axios";

const Getdetails = ({ usrname }) => {
  const { Id } = useParams();
  const [hasApplied, setHasApplied] = useState(false);
  const examdata = data.find((eachExam) => eachExam.id === Id);

  // Fetch application status when component loads
  useEffect(() => {
    const checkApplicationStatus = async () => {
      try {
        const response = await axios.post(`${import.meta.env.VITE_REACT_APP_BACKEND}/checkApplication`, {
          username: usrname,
          post: examdata.post_name
        });

        if (response.data.alreadyApplied) {
          setHasApplied(true);
        }
      } catch (error) {
        console.error("Error checking application status:", error);
      }
    };

    checkApplicationStatus();
  }, [usrname, examdata.post_name]);

  // Handle download function
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = `${import.meta.env.VITE_REACT_APP_BACKEND}/api/download/${examdata.pdf_filename}`;
    link.download = `${examdata.post_title}.pdf`;
    link.click();
  };

  return (
    <div className="ve_getData">
      <div className="ve_post_title">{examdata.post_title}</div>
      <div className="ve_post_details">
        <div className="ve_post_name">{examdata.post_name}</div>
        <div className="ve_post_date">Posted on: {examdata.post_date}</div>
        <div className="ve_post_update">Last Updated: {examdata.post_update}</div>
        <div className="ve_post_vacncy">Vacancies: {examdata.post_vacancy}</div>
      </div>
      <div className="ve_basic_information">
        Basic Information: <span className="ve_info">{examdata.post_information}</span>
      </div>
      <div className="ve_application_fee">
        <h3>Application Fee</h3>
        <ul>
          {examdata.post_application1 && <li className="ve_application1">{examdata.post_application1}</li>}
          {examdata.post_application2 && <li className="ve_application2">{examdata.post_application2}</li>}
          {examdata.post_application3 && <li className="ve_application3">{examdata.post_application3}</li>}
        </ul>
      </div>
      <h3>Important Dates</h3>
      <div className="ve_important_dates">
        <ul>
          {examdata.post_imp1 && <li className="ve_imp1">{examdata.post_imp1}</li>}
          {examdata.post_imp2 && <li className="ve_imp2">{examdata.post_imp2}</li>}
          {examdata.post_imp3 && <li className="ve_imp3">{examdata.post_imp3}</li>}
        </ul>
      </div>
      <h3>Age Limit</h3>
      <div className="ve_age_limit">
        <ul>
          {examdata.post_age1 && <li className="ve_age1">{examdata.post_age1}</li>}
          {examdata.post_age2 && <li className="ve_age2">{examdata.post_age2}</li>}
          {examdata.post_age3 && <li className="ve_age3">{examdata.post_age3}</li>}
        </ul>
      </div>

      <div className="ve_apply_pdf">
        {!hasApplied && (
          <div className="ve_apply">
            <Link to={`/ApplyDetails/${examdata.post_name}`}>Apply</Link>
          </div>
        )}
        <div className="ve_pdf" onClick={handleDownload}>Know More</div>
      </div>
    </div>
  );
};

export default Getdetails;
