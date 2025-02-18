import React from "react";
import {bank} from "./upcomming";
import { railway } from "./upcomming";
import { Defence } from "./upcomming";
import { ssc } from "./upcomming";
import { Link } from "react-router-dom";
const upcomming = () => {
    return (
        <>
        <div style={{paddingBottom:"20px"}}>
        <div className='search1'>
        <div className="venkatpani"><h3>Upcomming Notifications</h3></div>
        <div>
          <input type='search' name="search" placeholder='Search exams' />
        </div>
      </div>
      {bank.map((job) => (
        <div key={job.id} className="job-listing">
          <div className="job-header">
            <i className="fas fa-briefcase"></i> {job.jobHeader}
          </div>
          <p className="job-details">{job.jobDetails}</p>
          <div className="job-meta">
            <p className="deadline">
              <strong>Deadline:</strong> {job.deadline}
            </p>
          </div>
          <div className="job-actions">
          <div className="job_but">
                <Link to={`/Get_More2/${job.id}`}>Get Details</Link>
              </div>
          </div>
        </div>
      ))}
    </div>
    <div style={{paddingBottom:"20px"}}>
      <h1>RailWay</h1>
      {/* Dynamically render each job listing */}
      {railway.map((job) => (
        <div key={job.id} className="job-listing">
          <div className="job-header">
            <i className="fas fa-briefcase"></i> {job.jobHeader}
          </div>
          <p className="job-details">{job.jobDetails}</p>
          <div className="job-meta">
            <p className="deadline">
              <strong>Deadline:</strong> {job.deadline}
            </p>
          </div>
          <div className="job-actions">
          <div className="job_but">
                <Link to={`/Get_More2/${job.id}`}>Get Details</Link>
              </div>
          </div>
        </div>
      ))}
    </div>
    <div style={{paddingBottom:"20px"}}>
      <h1>Defence</h1>
      {/* Dynamically render each job listing */}
      {Defence.map((job) => (
        <div key={job.id} className="job-listing">
          <div className="job-header">
            <i className="fas fa-briefcase"></i> {job.jobHeader}
          </div>
          <p className="job-details">{job.jobDetails}</p>
          <div className="job-meta">
            <p className="deadline">
              <strong>Deadline:</strong> {job.deadline}
            </p>
          </div>
          <div className="job-actions">
          <div className="job_but">
                <Link to={`/Get_More2/${job.id}`}>Get Details</Link>
              </div>
          </div>
        </div>
      ))}
    </div>
    <div style={{paddingBottom:"20px"}}>
      <h1>SCC</h1>
      {ssc.map((job) => (
        <div key={job.id} className="job-listing">
          <div className="job-header">
            <i className="fas fa-briefcase"></i> {job.jobHeader}
          </div>
          <p className="job-details">{job.jobDetails}</p>
          <div className="job-meta">
            <p className="deadline">
              <strong>Deadline:</strong> {job.deadline}
            </p>
          </div>
          <div className="job-actions">
          <div className="job_but">
                <Link to={`/Get_More2/${job.id}`}>Get Details</Link>
              </div>
          </div>
        </div>
      ))}
    </div>
    </>
    )
}
export default upcomming;