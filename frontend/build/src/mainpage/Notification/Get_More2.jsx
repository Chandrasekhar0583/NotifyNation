
import React from "react";
import { Link, useParams } from "react-router-dom";
import data from './getdetailsdata';
import "./getdetails";

const Get_More2 = () => {
  const { Id } = useParams();
  const examdata = data.find((eachExam) => eachExam.id === Id);
  // const handleDownload = () => {
  //   const link = document.createElement('a');
  //   link.href = `http://localhost:9000/api/download/${examdata.pdf_filename}`;
  //   link.download = `${examdata.post_title}.pdf`;
  //   link.click();
  // };
  

  
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
    </div>
  );
};

export default Get_More2;
