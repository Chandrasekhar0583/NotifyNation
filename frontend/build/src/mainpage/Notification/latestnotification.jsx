import React, { useState } from "react";
import { jobs } from "./latestdata";
import "./latestnotification.css";
import { Link } from "react-router-dom";

const Latestnotification = () => {
  const [searched, setSearched] = useState(''); 

  const searchedData = (e) => {
    const { value } = e.target;
    setSearched(value);
  };

  const searchdt = searched.toLowerCase();
  const filterdata = jobs.filter((data) => {
    const nameinclude = data.jobHeader.toLowerCase().includes(searchdt);
    const jobdetailsinclude = data.jobDetails.toLowerCase().includes(searchdt);
    const qualificationinclude = data.qualification.toLowerCase().includes(searchdt);
    return nameinclude || jobdetailsinclude || qualificationinclude;
  });

  return (
    <div style={{ paddingBottom: "20px" }}>
     <div className='search1'>
        <div className="venkatpani"><h3>Latest Notifications</h3></div>
        <div>
          <input onChange={(e) => searchedData(e)} type='search' name="search" placeholder='Search Notifications' />
        </div>
      </div>
    
      
      {filterdata.length > 0 ? (
        filterdata.map((job) => (
          <div key={job.id} className="job-listing">
            <div className="job-header">
              <i className="fas fa-briefcase"></i> {job.jobHeader}
            </div>
            <p className="job-details">{job.jobDetails}</p>
            <div className="job-meta">
              <p className="qualification">
                <strong>Required Qualifications:</strong> {job.qualification}
              </p>
              <p className="deadline">
                <strong>Deadline:</strong> {job.deadline}
              </p>
            </div>
            <div className="job-actions">
              <div className="job_but">
                <Link to={`/getdetails/${job.id}`}>Get Details</Link>
              </div>
            </div>
          </div>
        ))
      ) : (
        jobs.map((job) => (
          <div key={job.id} className="job-listing">
            <div className="job-header">
              <i className="fas fa-briefcase"></i> {job.jobHeader}
            </div>
            <p className="job-details">{job.jobDetails}</p>
            <div className="job-meta">
              <p className="qualification">
                <strong>Required Qualifications:</strong> {job.qualification}
              </p>
              <p className="deadline">
                <strong>Deadline:</strong> {job.deadline}
              </p>
            </div>
            <div className="job-actions">
              <div className="job_but">
                <Link to={`/getdetails/${job.id}`}>Get Details</Link>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Latestnotification;