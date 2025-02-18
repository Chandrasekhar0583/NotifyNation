import React, { useEffect, useState } from "react";
import './dashboard.css'
import axios from "axios";
import Banner from '../../src/assets/banner.jpg'
import Header  from "../mainpage/Header/Header";
import { Link, useNavigate } from "react-router-dom";
const Dash = ({ usrname }) => {
    const [certificates, setCertificates] = useState([]);
    const [showCertificateForm, setShowCertificateForm] = useState(false);
    const [fileName, setFileName] = useState("");
    const [file, setFile] = useState(null);
    // const [applied,setApplied]=useState("");
    const [personalDetails, setPersonalDetails] = useState({
        name: '',
        email: '',
        dob: '',
        gender: '',
        motherName: '',
        fatherName: '',
        mobileNumber: '',
        maritalstatus: ''
    });

    const [educationalDetails, setEducationalDetails] = useState({
        schoolName10th: '',
        board10th: '',
        passingYear10th: '',
        obtainedMarks10th: '',
        schoolName12th: '',
        board12th: '',
        passingYear12th: '',
        obtainedMarks12th: ''
    });

    const [username, setUsername] = useState(usrname);

    const handlePersonalChange = (e) => {
        const { name, value } = e.target;
        setPersonalDetails((prev) => ({ ...prev, [name]: value }));
    };
    const handleEducationalChange = (e) => {
        const { name, value } = e.target;
        setEducationalDetails((prev) => ({ ...prev, [name]: value }));
    };

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await axios.post(`http://localhost:5000/getUserData/${username}`);
                const data = response.data;

                if (data) {
                    setPersonalDetails(prevData => ({
                        ...prevData,
                        name: data.name || prevData.name,
                        email: data.email || prevData.email,
                        dob: data.dob || prevData.dob,
                        gender: data.gender || prevData.gender,
                        motherName: data.motherName || prevData.motherName,
                        fatherName: data.fatherName || prevData.fatherName,
                        mobileNumber: data.mobileNumber || prevData.mobileNumber,
                        maritalstatus: data.maritalstatus || prevData.maritalstatus,
                    }));


                    setEducationalDetails(prevData => ({
                        ...prevData,
                        schoolName10th: data.schoolName10th || prevData.schoolName10th,
                        board10th: data.board10th || prevData.board10th,
                        passingYear10th: data.passingYear10th || prevData.passingYear10th,
                        obtainedMarks10th: data.obtainedMarks10th || prevData.obtainedMarks10th,
                        schoolName12th: data.schoolName12th || prevData.schoolName12th,
                        board12th: data.board12th || prevData.board12th,
                        passingYear12th: data.passingYear12th || prevData.passingYear12th,
                        obtainedMarks12th: data.obtainedMarks12th || prevData.obtainedMarks12th
                    }));
                } else {
                    console.log("No data found for the user.");
                }
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        fetchUserData();
    }, [username]);

    const [userPosts, setUserPosts] = useState([]);

    useEffect(() => {
        const fetchUserPosts = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/api/getPosts/${username}`);
                console.log(response.data);
                setUserPosts(response.data);
            } catch (error) {
                console.error("Error fetching user posts:", error);
            }
        };
        fetchUserPosts();
    }, [username]);

    const totalPosts = 28; // You can set this to the maximum number of posts
    const appliedPostsCount = userPosts.length;
    const percentage = (appliedPostsCount / totalPosts) * 100;



    const handleSavePersonalDetails = async () => {
        const userData = { username, ...personalDetails };
        try {
            const response = await axios.post("http://localhost:5000/saveUserData", userData);
            console.log("datasaved");
            window.alert("Personal Details Saved Successfully");
            const data = response.data;
        } catch (error) {
            console.error('Error saving personal details:', error);
        }
    };

    const handleSaveEducationalDetails = async () => {
        const userData = { username, ...educationalDetails };
        try {
            const result = await axios.post("http://localhost:5000/saveUserData", userData);
            const data = result.data;
            alert("Educational Details Saved Successfully");
            console.log('Educational Details Saved:', data);
        } catch (error) {
            console.error('Error saving educational details:', error);
        }
    };


    const handleAddCertificate = () => {
        if (fileName && file) {
            const fileURL = URL.createObjectURL(file); // Create a URL to view the file
            setCertificates([...certificates, { fileName, fileURL }]);
            setFileName("");
            setFile(null);
            setShowCertificateForm(false);
        }
    };

    const handleRemoveCertificate = (index) => {
        const updatedCertificates = certificates.filter((_, i) => i !== index);
        setCertificates(updatedCertificates);
    };
    const navigate=useNavigate();
    const handleDownload = (post) => {
        navigate(`/AdmitCardForm/${encodeURIComponent(post)}`);
    };
    const Logout=()=>{
        navigate('/login', { replace: true });
    }
    return (
        <>
            <div className="Main-dash">

                <div className="main_head"><Header usrname={usrname} /></div>
                <div className="banner">
                <div className="profile-section_ve">
                        <div className="user-photo_ve">
                            <img src="https://d8it4huxumps7.cloudfront.net/uploads/images/unstop/user-avatar/png/13.png" alt="User" />
                        </div>
                        <div className="username_ve">{usrname}</div>
                        <div className="ve_go_button2" onClick={Logout}>Log Out
                        </div>
                    </div>
                    <div className="inner_img">
                    <img src={Banner} alt="" /></div>
                </div>



                <div className="content_ve">
                    

                    <div className="user-posts">
                        <h2 className="ve_post_heading">User Applied Posts</h2>
                        <div className="circle">
                            <svg width="120" height="120">
                                <circle cx="60" cy="60" r="54" stroke="#e6e6e6" strokeWidth="12" fill="none" />
                                <circle
                                    cx="60"
                                    cy="60"
                                    r="54"
                                    stroke="#4db8ff"
                                    strokeWidth="12"
                                    fill="none"
                                    strokeDasharray={`${percentage} ${100 - percentage}`}
                                    strokeDashoffset="25" // Adjust this for positioning
                                    style={{ transition: 'stroke-dasharray 0.5s ease-in-out' }} // Add transition for animation
                                />
                                <text x="50%" y="50%" textAnchor="middle" stroke="#51c5cf" strokeWidth="1px" dy=".3em">
                                    {appliedPostsCount}
                                </text>
                            </svg>
                        </div>
                        <ul>
                            <h3>Jobs List</h3>
                            {userPosts.map((post, index) => (
                                <li id="li" key={index}>
                                    <div className="ve_post_name">{post.post}</div>
                                    {/* Display post name */}
                                    <button className="ve_go_button" onClick={() => handleDownload(post.post)}>
                                Download
                            </button>
                                </li>
                            ))}
                        </ul>
                        
                    </div>



                    <div className="details-sections_ve">
                        <div className="section_ve">
                            <h2>Personal Details</h2>
                            <div className="form-group-container_ve">
                                <div className="form-group_ve">
                                    <label>Full Name:</label>
                                    <input type="text" name="name" defaultValue={personalDetails.name} onChange={handlePersonalChange} placeholder="Enter your Full Name" />
                                </div>
                                <div className="form-group_ve">
                                    <label>Date of Birth:</label>
                                    <input type="date" name="dob" defaultValue={personalDetails.dob} onChange={handlePersonalChange} />
                                </div>
                                <div className="form-group_ve">
                                    <label>Gender:</label>
                                    <select name="gender" value={personalDetails.gender} onChange={handlePersonalChange}>
                                        <option value="">Select</option>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>
                                <div className="form-group_ve">
                                    <label>Mother's Name:</label>
                                    <input type="text" placeholder="Enter Mother's Name" defaultValue={personalDetails.motherName} name="motherName" onChange={handlePersonalChange} />
                                </div>
                                <div className="form-group_ve">
                                    <label>Father's Name:</label>
                                    <input type="text" placeholder="Enter Father's Name" defaultValue={personalDetails.fatherName} name="fatherName" onChange={handlePersonalChange} />
                                </div>
                                <div className="form-group_ve">
                                    <label>Phone Number:</label>
                                    <input type="tel" placeholder="Enter Phone Number" defaultValue={personalDetails.mobileNumber} name="mobileNumber" onChange={handlePersonalChange} />
                                </div>
                                <div className="form-group_ve">
                                    <label>Email:</label>
                                    <input type="email" placeholder="Enter Email" defaultValue={personalDetails.email} name="email" onChange={handlePersonalChange} />
                                </div>
                                <div className="form-group_ve">
                                    <label>Marital Status:</label>
                                    <select name="maritalstatus" value={personalDetails.maritalstatus} onChange={handlePersonalChange}>
                                        <option value="">Select</option>
                                        <option value="single">Single</option>
                                        <option value="married">Married</option>
                                    </select>
                                </div>
                            </div>
                            <button className="save-button_ve" onClick={handleSavePersonalDetails}>Save Personal Details</button>
                        </div>


                        <div className="section_ve">
                            <h2>Educational Details</h2>
                            <h3>10th Grade Details</h3>
                            <div className="form-group-container_ve">
                                <div className="form-group_ve">
                                    <label>School Name:</label>
                                    <input type="text" name="schoolName10th" defaultValue={educationalDetails.schoolName10th} onChange={handleEducationalChange} placeholder="Enter 10th School Name" />
                                </div>
                                <div className="form-group_ve">
                                    <label>Board:</label>
                                    <input type="text" name="board10th" defaultValue={educationalDetails.board10th} onChange={handleEducationalChange} placeholder="Enter 10th Board (e.g., CBSE)" />
                                </div>
                                <div className="form-group_ve">
                                    <label>Year of Completion:</label>
                                    <input type="number" name="passingYear10th" defaultValue={educationalDetails.passingYear10th} onChange={handleEducationalChange} placeholder="Enter Completion Year" />
                                </div>
                                <div className="form-group_ve">
                                    <label>Percentage/Grade:</label>
                                    <input type="text" name="obtainedMarks10th" defaultValue={educationalDetails.obtainedMarks10th} onChange={handleEducationalChange} placeholder="Enter Percentage or Grade" />
                                </div>
                            </div>
                            <div className="ve_line"></div>
                            <h3>12th Grade Details</h3>
                            <div className="form-group-container_ve">
                                <div className="form-group_ve">
                                    <label>School Name:</label>
                                    <input type="text" name="schoolName12th" defaultValue={educationalDetails.schoolName12th} onChange={handleEducationalChange} placeholder="Enter 12th School Name" />
                                </div>
                                <div className="form-group_ve">
                                    <label>Board:</label>
                                    <input type="text" name="board12th" defaultValue={educationalDetails.board12th} onChange={handleEducationalChange} placeholder="Enter 12th Board (e.g., CBSE)" />
                                </div>
                                <div className="form-group_ve">
                                    <label>Year of Completion:</label>
                                    <input type="number" name="passingYear12th" defaultValue={educationalDetails.passingYear12th} onChange={handleEducationalChange} placeholder="Enter Completion Year" />
                                </div>
                                <div className="form-group_ve">
                                    <label>Percentage/Grade:</label>
                                    <input type="text" name="obtainedMarks12th" defaultValue={educationalDetails.obtainedMarks12th} onChange={handleEducationalChange} placeholder="Enter Percentage or Grade" />
                                </div>
                            </div>

                            <button className="save-button_ve" onClick={handleSaveEducationalDetails}>Save Educational Details</button>
                        </div>


                        <div className="section_ve certificates-section">
                            <h2>Certificates</h2>
                            <button className="add-button" onClick={() => setShowCertificateForm(!showCertificateForm)}>+ Add Certificate</button>
                            {showCertificateForm && (
                                <div className="certificate-form">
                                    <div className="form-group_ve">
                                        <label>File Name:</label>
                                        <input type="text" value={fileName} onChange={(e) => setFileName(e.target.value)} placeholder="Enter File Name" />
                                    </div>
                                    <div className="form-group_ve">
                                        <label>Upload File:</label>
                                        <input type="file" onChange={(e) => setFile(e.target.files[0])} />
                                    </div>
                                    <button className="add-cert-button" onClick={handleAddCertificate}>Add Certificate</button>
                                </div>
                            )}
                            <div className="certificate-list">
                                {certificates.map((cert, index) => (
                                    <div key={index} className="certificate-item">
                                        <a href={cert.fileURL} target="_blank" rel="noopener noreferrer">{cert.fileName}</a>
                                        <span className="close-btn" onClick={() => handleRemoveCertificate(index)}>&times;</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Dash;
