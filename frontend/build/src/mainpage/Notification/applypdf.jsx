import React, { useState, useEffect } from 'react'
import './applypdf.css'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import html2pdf from 'html2pdf.js';

const Applicationpdf = () => {
  const { registrationNumber } = useParams();
  const [userData, setUserData] = useState({
    aadhaar: "",
    aadhaarNumber: "",
    aggregate10th: "",
    aggregate12th: "",
    aggregateGrad: "",
    aggregatePostGrad: "",
    board10th: "",
    board12th: "",
    candidateName: "",
    caste: "",
    collegeNameGrad: "",
    collegeNamePostGrad: "",
    district: "",
    dob: "",
    emailId: "",
    fatherName: "",
    gender: "",
    graduateName: "",
    houseNumber: "",
    idNumber: "",
    idType: "",
    isPermanentSame: "yes",
    maritalstatus: "",
    mark: "",
    mobileNumber: "",
    motherName: "",
    nameChange: "",
    obtainedMarks10th: "",
    obtainedMarks12th: "",
    obtainedMarksGrad: "",
    obtainedMarksPostGrad: "",
    passingYear10th: "",
    passingYear12th: "",
    passingYearGrad: "",
    passingYearPostGrad: "",
    permanentAddress: { houseNumber: '', state: '', district: '', postOffice: '', pin: '' },
    pin: "",
    post: "",
    postGraduateName: "",
    postOffice: "",
    registrationnumber: 0,
    rollNo10th: "",
    rollNo12th: "",
    rollNoGrad: "",
    rollNoPostGrad: "",
    schoolName10th: "",
    schoolName12th: "",
    state: "",
    state10th: "",
    state12th: "",
    stateGrad: "",
    statePostGrad: "",
    totalMarks10th: "",
    totalMarks12th: "",
    totalMarksGrad: "",
    totalMarksPostGrad: "",
    universityGrad: "",
    universityPostGrad: "",
    username: "",
    verifyAadhaarNumber: "",
    verifyCandidateName: ""
  });


  const [error, setError] = useState('');

  useEffect(() => {
    axios.get(`http://localhost:5000/getUser/${registrationNumber}`)
      .then(response => {
        setUserData(response.data);
        setError('');
      })
      .catch(error => {
        console.error('Error fetching user:', error);
        setError('Failed to fetch user data. Please try again.');
      });
  }, [registrationNumber]);

  const [loading, setLoading] = useState(false);


const downloadPDF = async () => {
  try {
    setLoading(true);

    const element = document.querySelector('.fullForm');
    const options = {
      margin: 10,
      filename: `${registrationNumber}.pdf`,
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
    };
    const pdfBlob = await html2pdf().from(element).set(options).outputPdf('blob');
    const formData = new FormData();
    formData.append('file', pdfBlob, `${registrationNumber}.pdf`);
    for (let [key, value] of formData.entries()) {
      console.log(`${key}:`, value);
    }
    const mail=userData.emailId;
   const all =userData
      const response = await axios.post('http://localhost:5000/upload-pdf',formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
            userData:JSON.stringify(all)
        },
      });
    if(response)
    {
      window.alert("Successfully registered and detials ares sent to mail");
      window.location.href= "/Notification/latestnotification";
    }
    console.log('File uploaded successfully:', response.data);
  } catch (error) {
    console.error('Error:', error);
  } finally {
    setLoading(false);
  }
};

  return (
    <>
    <div className='fullForm'>
      <div className="applicationForm122">
        <div className="applicationform1">
          <div className="heading_of_job122">
              <div className="ve_post_head1223">{userData.post}</div>
          </div>

          <div className="applicationDetails">
            <div className="detail-item"><strong>Application No:</strong> {userData.registrationnumber}</div>
            <div className="detail-item"><strong>Post Applied For:</strong> {userData.post}</div>
            <div className="detail-item"><strong>Gender:</strong> {userData.gender}</div>
            <div className="detail-item"><strong>Applied Caste / Class Type:</strong> {userData.caste}</div>
            <div className="detail-item"><strong>Category:</strong> {userData.caste}</div>
            <div className="detail-item"><strong>Nationality:</strong> Indian</div>
          </div>

          <div className="personaldetails121">
            <h3 style={{widht:"100%"}}>Personal Details</h3>
            <div className='inner_persoanl_details'>
            <div className="detail-item"><strong>Name (Matric):</strong> {userData.candidateName}</div>
            <div className="detail-item"><strong>Mother's Name:</strong> {userData.motherName}</div>
            <div className="detail-item"><strong>Father's Full Name:</strong> {userData.fatherName}</div>
            <div className="detail-item"><strong>Religion:</strong> HINDU</div>
            <div className="detail-item"><strong>DOB:</strong> {userData.dob}</div>
            <div className="detail-item"><strong>Identification Mark:</strong> {userData.mark}</div>
            <div className="detail-item"><strong>Phone No:</strong> {userData.mobileNumber}</div>
            <div className="detail-item"><strong>Caste Type:</strong> {userData.caste}</div>
            <div className="detail-item"><strong>Marital Status:</strong> {userData.maritalstatus}</div>
            <div className="detail-item"><strong>State/UT of Origin:</strong> {userData.state}</div></div>
          </div>

          <div className="addressdetails121">
            <h3>Address Details</h3>
            <div  className='perement_address'>
              <div className='address_head'>Permanent Address:</div>
            <div className="detail-item"><strong>Permanent Address:</strong> {userData.permanentAddress.houseNumber}</div>
            <div className='inner_10th_data'>
            <div className="detail-item"  style={{marginRight:"10px"}}><strong>State/UT:</strong> {userData.permanentAddress.state}</div>
            <div className="detail-item"><strong>District:</strong> {userData.permanentAddress.district}</div></div>
            <div className='inner_10th_data'>
            <div className="detail-item" style={{marginRight:"10px"}}><strong>PO:</strong> {userData.permanentAddress.postOffice}</div>
            <div className="detail-item"><strong>Pin:</strong> {userData.permanentAddress.pin}</div></div>

            </div>
            <div className='correspondence_address'>
            <div  className='address_head'>Correspondence Address:</div>
            <div className="detail-item"><strong>Correspondence Address:</strong> {userData.houseNumber}</div>
            <div className='inner_10th_data'>
            <div className="detail-item"  style={{marginRight:"10px"}}><strong>State/UT:</strong> {userData.state}</div>
            <div className="detail-item"><strong>District:</strong> {userData.district}</div></div>
            <div className='inner_10th_data'>
            <div className="detail-item"  style={{marginRight:"10px"}}><strong>PO:</strong> {userData.postOffice}</div>
            <div className="detail-item"><strong>Pin:</strong> {userData.pin}</div></div></div>
          </div>
        </div>

        <div className="applicationform2">
          <div className="educationDetails" style={{marginTop:"20px"}}>
            <h3>Educational & Additional Details</h3>
            <div className="education-item"><strong>Qualification:</strong> 10th</div>
            <div className="education-item"><strong>Roll No.:</strong> {userData.rollNo10th}</div>
            <div className="education-item"><strong>School/College Name:</strong> {userData.schoolName10th}</div>
            <div className="education-item"><strong>State/UT:</strong> {userData.state10th}</div>
            <div className="education-item"><strong>Board/University:</strong> {userData.board10th}</div>
            <div className='inner_10th_data'>
            <div className="education-item"><strong>Passing Year:</strong> {userData.passingYear10th}</div>
            <div className="education-item"><strong>Total Marks:</strong> {userData.totalMarks10th}</div>
            <div className="education-item"><strong>Grade Obtained:</strong> {userData.obtainedMarks10th}</div>
            <div className="education-item"><strong>Aggregate %:</strong> {userData.aggregate10th}</div></div>
          </div>
          <div className="educationDetails">
            <h3>Miscellaneous Qualification</h3>
            <div className="education-item"><strong>Qualification:</strong> 12th</div>
            <div className="education-item"><strong>Roll No.:</strong> {userData.rollNo12th}</div>
            <div className="education-item"><strong>School/College Name:</strong> {userData.schoolName12th}</div>
            <div className="education-item"><strong>State/UT:</strong> {userData.state12th}</div>
            <div className="education-item"><strong>Board/University:</strong> {userData.board12th}</div>
            <div className="inner_10th_data">
            <div className="education-item"><strong>Passing Year:</strong> {userData.passingYear12th}</div>
            <div className="education-item"><strong>Total Marks:</strong> {userData.totalMarks12th}</div>
            <div className="education-item"><strong>Grade Obtained:</strong> {userData.obtainedMarks12th}</div>
            <div className="education-item"><strong>Aggregate %:</strong> {userData.aggregate12th}</div></div>
          </div>

          <div className="documentDetails">
            <h3>Uploaded Documents</h3>
            <table className="document-table">
              <thead>
                <tr>
                  <th>Document Type</th>
                  <th>Document Name</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Passport Photo</td>
                  <td>{userData.photo}</td>
                </tr>
                <tr>
                  <td>Signature</td>
                  <td>{userData.signature}</td>
                </tr>
                <tr>
                  <td>Id Card</td>
                  <td>{userData.idCard}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="declaration">
            <h3>Declaration</h3>
            <ul>
              <li>I hereby confirm that I have read the “General Instructions” provided at the homepage.</li>
              <li>I accept all rules & regulations and eligibility criteria as given in the "General Instructions".</li>
              <li>I hereby declare that the information provided in this application is true to the best of my knowledge.</li>
            </ul>
          </div>
        </div>
      </div>
      </div>
      <center>
        <div style={{ margin: "10px",width:"fit-content" }}>
        {/* <Link to="/Notification/latestnotification">    */}
        <button onClick={downloadPDF} disabled={loading}>{loading ? 'Registered' : 'Register'}</button> 
        {/* <button onClick={downloadPDF}>Download</button> */}
         {/* </Link>  */}
        </div>
      </center>
    </>
  );

}

export default Applicationpdf