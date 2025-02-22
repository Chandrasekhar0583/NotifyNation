import React, { useState, useEffect } from 'react';
import "./aplicationform.css"
import { useActionData, useParams } from 'react-router-dom';
import axios from "axios";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

const Applicationform = ({usrname}) => {
    const { type } = useParams(); // This will capture ":type" from the URL
    
    console.log(type); 
    const totalBoxes = 4;
    const [currentBox, setCurrentBox] = React.useState(1);
    const buttonData = [
        "Personal Details",
        "Address Details",
        "Educational Details",
        "Declaration",
    ];
    const nextBox = () => {
        if (currentBox < totalBoxes) {
            setCurrentBox(currentBox + 1);
        }
        if (currentBox == 1) {
            console.log(formData1);
        }
        if (currentBox == 2) {
            handleSubmit();
            console.log(formData)
        }
        if (currentBox == 3) {
            console.log(details);
        }
    };
    const prevBox = () => {
        if (currentBox > 1) {
            setCurrentBox(currentBox - 1);
        }
        // display();
    };
    useEffect(() => {
        const inputs = Array.from(document.querySelectorAll('input'));
        inputs.forEach((input, index) => {
            input.addEventListener('keydown', (e) => {
                if (e.key === 'Enter') {
                    e.preventDefault();
                    const nextInput = inputs[index + 1];
                    if (nextInput) {
                        nextInput.focus();
                    }
                }
            });
        });
    }, []);

    const chooseTemplate = () => {
        if (declarationAccepted) {
            SendingFormData();
        } else {
            alert('Please accept the declaration to proceed.');
        }
        // console.log(documents);
        // console.log(documents.photo.name)
    };
    const [hasAadhaar, setHasAadhaar] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [errorname, seterrorname] = useState('');
    const [formData1, setFormData1] = useState({
        aadhaar: '',
        aadhaarNumber: '',
        verifyAadhaarNumber: '',
        idType: '',
        idNumber: '',
        candidateName: '',
        verifyCandidateName: '',
        nameChange: '',
        gender: '',
        maritalstatus: '',
        dob: '',
        mark: '',
        caste: '',
        fatherName: '',
        motherName: '',
        mobileNumber: '',
        emailId: ''
    });
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData1({
            ...formData1,
            [name]: value
        });
    };
    const [formData, setFormData] = useState({
        houseNumber: '',
        state: '',
        district: '',
        postOffice: '',
        pin: '',
        isPermanentSame: 'yes',
        permanentAddress: {
            houseNumber: '',
            state: '',
            district: '',
            postOffice: '',
            pin: '',
        }
    });
    const [qualification, setQualification] = useState('10th');
    const [details, setDetails] = useState({
        rollNo10th: '',
        schoolName10th: '',
        state10th: '',
        board10th: '',
        passingYear10th: '',
        totalMarks10th: '',
        obtainedMarks10th: '',
        aggregate10th: '',
        // certificate10th: '',

        rollNo12th: '',
        schoolName12th: '',
        state12th: '',
        board12th: '',
        passingYear12th: '',
        totalMarks12th: '',
        obtainedMarks12th: '',
        aggregate12th: '',
        // certificate12th: '',

        graduateName: '',
        rollNoGrad: '',
        collegeNameGrad: '',
        stateGrad: '',
        universityGrad: '',
        passingYearGrad: '',
        totalMarksGrad: '',
        obtainedMarksGrad: '',
        aggregateGrad: '',
        // certificateGraduate: '',

        postGraduateName: '',
        rollNoPostGrad: '',
        collegeNamePostGrad: '',
        statePostGrad: '',
        universityPostGrad: '',
        passingYearPostGrad: '',
        totalMarksPostGrad: '',
        obtainedMarksPostGrad: '',
        aggregatePostGrad: '',
        // certificatePostGraduate: '',
    });
    const [documents, setDocuments] = useState({
        photo: null,
        signature: null,
        idCard: null,
        certificate10th: null,
    });
    const username=usrname;
    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await axios.post(`${import.meta.env.VITE_REACT_APP_BACKEND}/getUserData/${username}`);
                const data = response.data;
    
                if (data) {
                    setFormData1(prevData => ({
                        ...prevData,
                        aadhaar: data.aadhaar || prevData.aadhaar,
                        aadhaarNumber: data.aadhaarNumber || prevData.aadhaarNumber,
                        verifyAadhaarNumber: data.verifyAadhaarNumber || prevData.verifyAadhaarNumber,
                        idType: data.idType || prevData.idType,
                        idNumber: data.idNumber || prevData.idNumber,
                        candidateName: data.name || prevData.candidateName,
                        verifyCandidateName: data.verifyCandidateName || prevData.verifyCandidateName,
                        nameChange: data.nameChange || prevData.nameChange,
                        gender: data.gender || prevData.gender,
                        maritalstatus: data.maritalstatus || prevData.maritalstatus,
                        dob: data.dob || prevData.dob,
                        mark: data.mark || prevData.mark,
                        caste: data.caste || prevData.caste,
                        fatherName: data.fatherName || prevData.fatherName,
                        motherName: data.motherName || prevData.motherName,
                        mobileNumber: data.mobileNumber || prevData.mobileNumber,
                        emailId: data.email || prevData.emailId
                    }));
    
                    setFormData(prevData => ({
                        ...prevData,
                        houseNumber: data.houseNumber || prevData.houseNumber,
                        state: data.state || prevData.state,
                        district: data.district || prevData.district,
                        postOffice: data.postOffice || prevData.postOffice,
                        pin: data.pin || prevData.pin,
                        isPermanentSame: data.isPermanentSame || prevData.isPermanentSame,
                        permanentAddress: data.permanentAddress || prevData.permanentAddress
                    }));
    
                    setDetails(prevData => ({
                        ...prevData,
                        rollNo10th: data.rollNo10th || prevData.rollNo10th,
                        schoolName10th: data.schoolName10th || prevData.schoolName10th,
                        state10th: data.state10th || prevData.state10th,
                        board10th: data.board10th || prevData.board10th,
                        passingYear10th: data.passingYear10th || prevData.passingYear10th,
                        totalMarks10th: data.totalMarks10th || prevData.totalMarks10th,
                        obtainedMarks10th: data.obtainedMarks10th || prevData.obtainedMarks10th,
                        aggregate10th: data.aggregate10th || prevData.aggregate10th,
                        rollNo12th: data.rollNo12th || prevData.rollNo12th,
                        schoolName12th: data.schoolName12th || prevData.schoolName12th,
                        state12th: data.state12th || prevData.state12th,
                        board12th: data.board12th || prevData.board12th,
                        passingYear12th: data.passingYear12th || prevData.passingYear12th,
                        totalMarks12th: data.totalMarks12th || prevData.totalMarks12th,
                        obtainedMarks12th: data.obtainedMarks12th || prevData.obtainedMarks12th,
                        aggregate12th: data.aggregate12th || prevData.aggregate12th,
                        graduateName: data.graduateName || prevData.graduateName,
                        rollNoGrad: data.rollNoGrad || prevData.rollNoGrad,
                        collegeNameGrad: data.collegeNameGrad || prevData.collegeNameGrad,
                        stateGrad: data.stateGrad || prevData.stateGrad,
                        universityGrad: data.universityGrad || prevData.universityGrad,
                        passingYearGrad: data.passingYearGrad || prevData.passingYearGrad,
                        totalMarksGrad: data.totalMarksGrad || prevData.totalMarksGrad,
                        obtainedMarksGrad: data.obtainedMarksGrad || prevData.obtainedMarksGrad,
                        aggregateGrad: data.aggregateGrad || prevData.aggregateGrad,
                        postGraduateName: data.postGraduateName || prevData.postGraduateName,
                        rollNoPostGrad: data.rollNoPostGrad || prevData.rollNoPostGrad,
                        collegeNamePostGrad: data.collegeNamePostGrad || prevData.collegeNamePostGrad,
                        statePostGrad: data.statePostGrad || prevData.statePostGrad,
                        universityPostGrad: data.universityPostGrad || prevData.universityPostGrad,
                        passingYearPostGrad: data.passingYearPostGrad || prevData.passingYearPostGrad,
                        totalMarksPostGrad: data.totalMarksPostGrad || prevData.totalMarksPostGrad,
                        obtainedMarksPostGrad: data.obtainedMarksPostGrad || prevData.obtainedMarksPostGrad,
                        aggregatePostGrad: data.aggregatePostGrad || prevData.aggregatePostGrad
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
    
    

    // Separate effects to check updated states
    useEffect(() => {
        console.log("Updated FormData1:", formData1);
    }, [formData1]);

    useEffect(() => {
        console.log("Updated FormData:", formData);
    }, [formData]);

    useEffect(() => {
        console.log("Updated Details:", details);
    }, [details]);
    

    // const username={"username":"chandu"};
    const [registrationnumber, setregistrationnumber] = useState(() => {
        return localStorage.getItem('registrationnumber') || 2234342234424;
    });

    const CompeleteDetails = {
        "username": username,
        ...formData1,
        ...formData,
        ...details,
        post: type,
        photo: documents.photo?.name || null,
        signature: documents.signature?.name || null,
        idCard: documents.idCard?.name || null,
        certificate10th: documents.certificate10th?.name || null
    };
    
    console.log(CompeleteDetails);
    const navigate = useNavigate();
    const SendingFormData = async (e) => {
        // e.preventDefault(); // Prevent form default behavior
    
        try {
            const response = await axios.post(`${import.meta.env.VITE_REACT_APP_BACKEND}/registerUser`, CompeleteDetails, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
    
            if (response.data && response.data.newDetails && response.data.newDetails.registrationnumber) {
                console.log('Data inserted:', response.data);
                alert('Registration successful!');
    
                // Get the unique registration number and navigate
                const registrationNumber = response.data.newDetails.registrationnumber;
                navigate(`/Applicationpdf/${registrationNumber}`);
            } else {
                console.error('Unexpected response structure:', response);
                alert('Registration failed. Please check the server response.');
            }
        } catch (error) {
            console.error('Error during registration:', error);
            alert('Registration failed. Please try again.');
        }
    };
    
    
    const [declarationAccepted, setDeclarationAccepted] = useState(false);
    const [submitDisabled, setSubmitDisabled] = useState(true);
    const handleAadhaarChange = (event) => {
        setHasAadhaar(event.target.value);
    };
    const handleReenterAadharChange = (event) => {
        const { name, value } = event.target;
        setFormData1({
            ...formData1,
            [name]: value
        });
        if (value !== formData1.aadhaarNumber) {
            setErrorMessage('Aadhar numbers do not match!');
        } else {
            setErrorMessage('');
        }
    };
    const setreentername = (event) => {
        const { name, value } = event.target;
        setFormData1({
            ...formData1,
            [name]: value
        });
        if (value !== formData1.candidateName) {
            seterrorname('Name Not Matches');
        }
        else {
            setFormData1({
                ...formData1,
                [name]: value
            });
            seterrorname('');
        }
    }
    const handleSubmit = (e) => {
        const finalData = formData.isPermanentSame === 'yes' ? {
            ...formData,
            permanentAddress: {
                houseNumber: formData.houseNumber,
                state: formData.state,
                district: formData.district,
                postOffice: formData.postOffice,
                pin: formData.pin
            }
        } : formData;
    };
    
    const handleChange = (field, value) => {
        setFormData((prevData) => {
            let updatedData = { ...prevData, [field]: value };
    
            // If the permanent address is the same as the current address, update the permanent address accordingly
            if (prevData.isPermanentSame === 'yes') {
                updatedData = {
                    ...updatedData,
                    permanentAddress: {
                        houseNumber: updatedData.houseNumber,
                        state: updatedData.state,
                        district: updatedData.district,
                        postOffice: updatedData.postOffice,
                        pin: updatedData.pin
                    }
                };
            }
    
            return updatedData;
        });
    };
    
    const handlePermanentAddressChange = (field, value) => {
        setFormData((prevData) => ({
            ...prevData,
            permanentAddress: {
                ...prevData.permanentAddress,
                [field]: value
            }
        }));
    };

    const handleQualificationChange = (e) => {
        setQualification(e.target.value);
    };
    const handleInputChange2 = (e) => {
        const { name, value, type } = e.target;
        if (type === "file") {
            const file = e.target.files[0]; // Get the selected file

            setDetails((prevDetails) => ({
                ...prevDetails,
                [name]: file // Store the file object in the corresponding key
            }));
        } else {
            // For other input types (text, number, etc.)
            setDetails((prevDetails) => ({
                ...prevDetails,
                [name]: value // Use the value for non-file inputs
            }));
        }

        // Logging the updated details
        // console.log("Updated Details:", details.certificate10th);
    };



    const handleFileChange = (e, documentType) => {
        const file = e.target.files[0];
        if (file && file.size > 200 * 1024) {
            alert('File size should be less than 200KB');
            e.target.value = null; // Clear input field
        } else {
            setDocuments((prevDocuments) => ({
                ...prevDocuments,
                [documentType]: file
            }));
        }
    };

    // Handle checkbox change for declaration
    const handleCheckboxChange = (e) => {
        setDeclarationAccepted(e.target.checked);
        setSubmitDisabled(!e.target.checked); // Enable button if checked
    };

    // Handle form submission
    const handleSubmit2 = (e) => {
        // e.preventDefault();
        if (declarationAccepted) {
            alert('Form submitted successfully!');
            // Process form submission here
        } else {
            alert('Please accept the declaration to proceed.');
        }
    };
    return (
        <div className="main">

            <div id="left" className="left">
                <div className="left_side_div">
                    <div className="left_buttons">
                        {Array.from({ length: totalBoxes }, (_, index) => (
                            <div key={index + 1} className="button-container">
                                <div
                                    className={`button1 ${currentBox === index + 1 ? 'active' : ''}`}
                                    onClick={() => setCurrentBox(index + 1)}
                                >
                                    {index + 1}
                                </div>
                                <div className="button-description">
                                    {buttonData[index]}
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="progress-container">
                        <div
                            id="progress-bar"
                            className="progress"
                            style={{
                                height: window.innerWidth > 768
                                    ? `${((currentBox - 1) / (totalBoxes - 1)) * 100}%` // Vertical for larger screens
                                    : '100%', // Full height for horizontal bar
                                width: window.innerWidth <= 768
                                    ? `${((currentBox - 1) / (totalBoxes - 1)) * 100}%` // Horizontal for small screens
                                    : '100%', // Full width for vertical bar
                            }}
                        ></div>
                    </div>
                </div>
            </div>


            <div id="right" className="right">
                {/* Render each box */}
                <div className={`box1 ${currentBox === 1 ? 'show' : 'hide'}`}>
                    <form>
                        <h2 style={{ marginBottom: "10px" }}>Personal Details</h2>
                        <div className="question">
                            <label>1. Do you have an Aadhaar Card? <span className="required">*</span></label><br />
                            <input
                                type="radio"
                                id="yes"
                                name="aadhaar"
                                value="yes"
                                defaultValue={formData1.aadhaar}
                                onChange={handleAadhaarChange}
                                required
                            />
                            <label htmlFor="yes">Yes</label>
                            <input
                                type="radio"
                                id="no"
                                name="aadhaar"
                                value="no"
                                defaultValue={formData1.aadhaar}
                                onChange={handleAadhaarChange}
                            />
                            <label htmlFor="no">No</label>
                        </div>

                        {hasAadhaar === 'yes' && (
                            <>
                                <div className="aadhaar-details">
                                    <label htmlFor="aadhaar-number">a. Aadhaar Card Number</label><br />
                                    <input
                                        type="text"
                                        id="aadhaar-number"
                                        name="aadhaarNumber"
                                        placeholder="e.g. 526262627262"
                                        maxLength="12"
                                        defaultValue={formData1.aadhaarNumber}
                                        onChange={handleInputChange}
                                        required
                                    /><br />
                                    <small>Aadhaar Number should be the same as mentioned in Aadhaar Card.</small>
                                </div>

                                <div className="aadhaar-details">
                                    <label htmlFor="verify-aadhaar-number">b. Verify Aadhaar Card Number</label><br />
                                    <input
                                        type="text"
                                        id="verify-aadhaar-number"
                                        name="verifyAadhaarNumber"
                                        maxLength="12"
                                        onChange={handleReenterAadharChange}
                                        // defaultValue={formData1.aadhaarNumber}
                                        placeholder="e.g. 526262627262"
                                        style={{ borderColor: errorMessage ? 'red' : 'initial', boxShadow: errorMessage ? '0px 0px 5px red' : 'initial' }}
                                        required
                                    /><br />
                                    {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
                                </div>
                            </>
                        )}

                        {hasAadhaar === 'no' && (
                            <>
                                <div className="identification-details">
                                    <label htmlFor="id-type">2. Type of Identification Card</label><br />
                                    <select id="id-type" name="idType" defaultValue={formData1.idType} onChange={handleInputChange} required>
                                        <option value="">Select Identification Card</option>
                                        <option value="passport">Passport</option>
                                        <option value="voter-id">Voter ID</option>
                                        <option value="driving-license">Driving License</option>
                                    </select><br />
                                    <small>Type of ID and ID Number to be provided if you don't want to give Aadhaar number.</small>
                                </div>

                                <div className="identification-details">
                                    <label htmlFor="id-number">a. Identification Card Number</label><br />
                                    <input
                                        type="text"
                                        id="id-number"
                                        name="idNumber"
                                        placeholder="e.g. 123456789"
                                        defaultValue={formData1.idNumber}
                                        onChange={handleInputChange}
                                        required
                                    /><br />
                                </div>
                            </>
                        )}
                        <div className="candidate-name-section">
                            <label>3. Candidate Name (As per Matriculation Certificate) <span className="required">*</span></label><br />
                            <input
                                type="text"
                                id="candidate-name"
                                name="candidateName"
                                placeholder="Enter your name"
                                defaultValue={formData1.candidateName}
                                onChange={handleInputChange}
                                required
                            /><br />
                            <small>1. Candidate Name should be the same as mentioned in Matriculation Certificate.</small><br />
                            <small>2. Please enter name without any salutation (i.e Shri/ Smt/ Mr/ Mrs/ Ms/ Dr/ Prof).</small>
                        </div>

                        <div className="candidate-name-section">
                            <label htmlFor="verify-candidate-name">a. Verify Candidate Name (As per Matriculation Certificate) <span className="required">*</span></label><br />
                            <input
                                type="text"
                                id="verify-candidate-name"
                                name="verifyCandidateName"
                                placeholder="Re-enter your name"
                                onChange={setreentername}
                                // defaultValue={formData1.candidateName}
                                style={{ borderColor: errorname ? 'red' : 'initial' }}
                                required
                            /><br />
                            {errorname && <p style={{ color: 'red' }}>{errorname}</p>}
                        </div>
                        <div className="question">
                            <label>4. Have you ever changed Name? <span className="required">*</span></label><br />
                            <input type="radio" id="name-change-yes" defaultValue={formData1.nameChange} name="nameChange" value="yes" onChange={handleInputChange} required />
                            <label htmlFor="name-change-yes">Yes</label>
                            <input type="radio" id="name-change-no" name="nameChange" defaultValue={formData1.nameChange} value="no" onChange={handleInputChange} />
                            <label htmlFor="name-change-no">No</label>
                        </div>

                        <div className="form-group">
                            <label htmlFor="gender">5 Gender: </label>
                            <select name="gender"  value={formData1.gender} onChange={handleInputChange} required>
                                <option value="">Select</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label>6. Date Of Birth (DD-MM-YYYY) <span className="required">*</span></label><br />
                            <input
                                type="date"
                                id="dob"
                                name="dob"
                                value={formData1.dob}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="maritalstatus">5 Marital Status: </label>
                            <select name="maritalstatus" value={formData1.maritalstatus} onChange={handleInputChange} required>
                                <option value="">Select</option>
                                <option value="married">Married</option>
                                <option value="single">Single</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label>7. Caste <span className="required">*</span></label><br />
                            <input type="text" name="caste"  value={formData1.caste} required placeholder='Enter Caste' onChange={handleInputChange} />
                        </div>

                        <div className="form-group">
                            <label>7. Father's Name <span className="required">*</span></label><br />
                            <input type="text" name="fatherName" value={formData1.fatherName} required placeholder='Enter Father Name' onChange={handleInputChange} />
                        </div>

                        <div className="form-group">
                            <label>8. Mother's Name <span className="required">*</span></label><br />
                            <input type="text" name="motherName"  value={formData1.motherName} required placeholder='Enter Mother Name' onChange={handleInputChange} />
                        </div>

                        <div className="form-group">
                            <label>7.Identification Mark <span className="required">*</span></label><br />
                            <input type="text" name="mark" value={formData1.mark} required placeholder='A Mole on right knee' onChange={handleInputChange} />
                        </div>

                        {/* <div className="form-group">
                            <label>9. Matriculation (10th class) Education Board <span className="required">*</span></label><br />
                            <select name="board" value={formData.board} onChange={handleInputChange} required>
                                <option value="">Select</option>
                                <option value="cbse">CBSE</option>
                                <option value="icse">ICSE</option>
                                <option value="state-board">State Board</option>
                            </select><br />
                        </div> */}
                        {/* 
                        <div className="form-group">
                            <label>10. Roll Number <span className="required">*</span></label><br />
                            <input type="text" name="rollNumber" required placeholder='Enter Roll Number' onChange={handleInputChange} /><br />
                        </div>
                        <div className="form-group">
                            <label>11. Year of Passing <span className="required">*</span></label><br />
                            <select name="selectedYear" value={formData.selectedYear} onChange={handleInputChange} required>
                                <option value="">Select</option>
                                <option value="2021">2021</option>
                                <option value="2020">2020</option>
                                <option value="2019">2019</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label>12. Highest Level of Education Qualification <span className="required">*</span></label><br />
                            <select name="selectedEducation" value={formData.selectedEducation} onChange={handleInputChange} required>
                                <option value="">Select</option>
                                <option value="graduation">Graduation</option>
                                <option value="post-graduation">Post-Graduation</option>
                                <option value="doctorate">Doctorate</option>
                            </select>
                        </div> */}
                        <div className="form-group">
                            <label>13. Candidate's Mobile Number <span className="required">*</span></label><br />
                                    required
                            <input type="text" name="mobileNumber" value={formData1.mobileNumber} placeholder="Enter mobile number" onChange={handleInputChange} required /><br />
                        </div>

                        <div className="form-group">
                            <label>14. Candidate's Email ID <span className="required">*</span></label><br />
                                    required
                            <input type="email" name="emailId" value={formData1.emailId} placeholder="Enter email ID" onChange={handleInputChange} required /><br />
                        </div>
                    </form>

                </div>


                <div className={`box1 ${currentBox === 2 ? 'show' : 'hide'}`}>
                    <form>
                        <h2>Address Details</h2>
                        <div>
                            <label>House Number:</label>
                            <input
                                    required
                                type="text"
                                value={formData.houseNumber}
                                onChange={(e) => handleChange('houseNumber', e.target.value)}
                            />
                        </div>
                        <div>
                            <label>State/UT:</label>
                            <input
                                    required
                                type="text"
                                value={formData.state}
                                onChange={(e) => handleChange('state', e.target.value)}
                            />
                        </div>
                        <div>
                            <label>District:</label>
                            <input
                                    required
                                type="text"
                                value={formData.district}
                                onChange={(e) => handleChange('district', e.target.value)}
                            />
                        </div>
                        <div>
                            <label>PO (Post Office):</label>
                            <input
                                    required
                                type="text"
                                value={formData.postOffice}
                                onChange={(e) => handleChange('postOffice', e.target.value)}
                            />
                        </div>
                        <div>
                            <label>Pin:</label>
                            <input
                                    required
                                type="text"
                                value={formData.pin}
                                onChange={(e) => handleChange('pin', e.target.value)}
                            />
                        </div>

                        <div>
                            <label>Is this your permanent address?</label>
                            <input
                                    required
                                type="radio"
                                value="yes"
                                checked={formData.isPermanentSame === 'yes'}
                                onChange={(e) => handleChange('isPermanentSame', e.target.value)}
                            /> Yes
                            <input
                                    required
                                type="radio"
                                value="no"
                                checked={formData.isPermanentSame === 'no'}
                                onChange={(e) => handleChange('isPermanentSame', e.target.value)}
                            /> No
                        </div>

                        {formData.isPermanentSame === 'no' && (
                            <div>
                                <h3>Permanent Address</h3>
                                <div>
                                    <label>House Number:</label>
                                    <input
                                    required
                                   
                                    
                                        type="text"
                                        value={formData.permanentAddress.houseNumber}
                                        onChange={(e) => handlePermanentAddressChange('houseNumber', e.target.value)}
                                    />
                                </div>
                                <div>
                                    <label>State/UT:</label>
                                    <input
                                    required
                                        type="text"
                                        value={formData.permanentAddress.state}
                                        onChange={(e) => handlePermanentAddressChange('state', e.target.value)}
                                    />
                                </div>
                                <div>
                                    <label>District:</label>
                                    <input
                                    required

                                        type="text"
                                        value={formData.permanentAddress.district}
                                        onChange={(e) => handlePermanentAddressChange('district', e.target.value)}
                                    />
                                </div>
                                <div>
                                    <label>PO (Post Office):</label>
                                    <input
                                    required

                                        type="text"
                                        value={formData.permanentAddress.postOffice}
                                        onChange={(e) => handlePermanentAddressChange('postOffice', e.target.value)}
                                    />
                                </div>
                                <div>
                                    <label>Pin:</label>
                                    <input
                                    required

                                        type="text"
                                        value={formData.permanentAddress.pin}
                                        onChange={(e) => handlePermanentAddressChange('pin', e.target.value)}
                                    />
                                </div>
                            </div>
                        )}
                    </form>
                </div>




                <div className={`box1 ${currentBox === 3 ? 'show' : 'hide'}`}>
                    <form>
                        <div>
                            <label>Select Highest Qualification:</label>
                            <select value={qualification} onChange={handleQualificationChange}>
                                <option value="10th">10th</option>
                                <option value="12th">12th</option>
                                {/* <option value="Graduate">Graduate</option> */}
                                {/* <option value="PostGraduate">Post Graduate</option> */}
                            </select>

                            {/* 10th Qualification - Always visible */}
                            <div>
                                <h3>10th Qualification Details</h3>
                                <input
                                    required

                                    type="text"
                                    name="rollNo10th"
                                    placeholder="Roll No"
                                    value={details.rollNo10th}
                                    onChange={handleInputChange2}
                                />
                                <input
                                    required

                                    type="text"
                                    name="schoolName10th"
                                    placeholder="School Name"
                                    value={details.schoolName10th}
                                    onChange={handleInputChange2}
                                />
                                <input
                                    required

                                    type="text"
                                    name="state10th"
                                    placeholder="State"
                                    value={details.state10th}
                                    onChange={handleInputChange2}
                                />
                                <input
                                    required

                                    type="text"
                                    name="board10th"
                                    placeholder="Board"
                                    value={details.board10th}
                                    onChange={handleInputChange2}
                                />
                                <input
                                    required

                                    type="text"
                                    name="passingYear10th"
                                    placeholder="Passing Year"
                                    value={details.passingYear10th}
                                    onChange={handleInputChange2}
                                />
                                <input
                                    required

                                    type="text"
                                    name="totalMarks10th"
                                    placeholder="Total Marks"
                                    value={details.totalMarks10th}
                                    onChange={handleInputChange2}
                                />
                                <input
                                    required

                                    type="text"
                                    name="obtainedMarks10th"
                                    placeholder="Aggregate Percentage"
                                    // value={details.obtainedMarks10th}
                                    onChange={handleInputChange2}
                                />
                                <input
                                    required

                                    type="text"
                                    name="aggregate10th"
                                    placeholder="Marks Obtained"
                                    value={details.aggregate10th}
                                    onChange={handleInputChange2}
                                />
                                <label>10th Certificate:</label>
 
                                    required
                                {/* <input   type="file" accept=".jpg, .jpeg, .png" value={details.certificate10th} onChange={handleInputChange}/> */}

                                <input
                                    required

                                    type="file"
                                    accept=".jpg, .jpeg, .png"
                                    name="certificate10th"
                                    onChange={handleInputChange2}
                                />

                            </div>

                            {/* 12th Qualification - Visible if 12th, Graduate or PostGraduate is selected */}
                            {(qualification === '12th' || qualification === 'Graduate' || qualification === 'PostGraduate') && (
                                <div>
                                    <h3>12th Qualification Details</h3>
                                    <input
                                    required

                                        type="text"
                                        name="rollNo12th"
                                        placeholder="Roll No"
                                        value={details.rollNo12th}
                                        onChange={handleInputChange2}
                                    />
                                    <input
                                    required

                                        type="text"
                                        name="schoolName12th"
                                        placeholder="School Name"
                                        value={details.schoolName12th}
                                        onChange={handleInputChange2}
                                    />
                                    <input
                                    required

                                        type="text"
                                        name="state12th"
                                        placeholder="State"
                                        value={details.state12th}
                                        onChange={handleInputChange2}
                                    />
                                    <input
                                    required

                                        type="text"
                                        name="board12th"
                                        placeholder="Board"
                                        value={details.board12th}
                                        onChange={handleInputChange2}
                                    />
                                    <input
                                    required

                                        type="text"
                                        name="passingYear12th"
                                        placeholder="Passing Year"
                                        value={details.passingYear12th}
                                        onChange={handleInputChange2}
                                    />
                                    <input
                                    required

                                        type="text"
                                        name="totalMarks12th"
                                        placeholder="Total Marks"
                                        value={details.totalMarks12th}
                                        onChange={handleInputChange2}
                                    />
                                    <input
                                    required

                                        type="text"
                                        name="obtainedMarks12th"
                                        placeholder="Aggregate Percentage"
                                        value={details.obtainedMarks12th}
                                        onChange={handleInputChange2}
                                    />
                                    <input
                                    required

                                        type="text"
                                        name="aggregate12th"
                                        placeholder="Marks Obtained"
                                        value={details.aggregate12th}
                                        onChange={handleInputChange2}
                                    />
                                    <label>12th Certificate:</label>
                                    <input
                                    required

                                        type="file"
                                        accept=".jpg, .jpeg, .png"
                                        name="certificate12th"
                                        onChange={handleInputChange2}
                                    />
                                    
                                    {/* <input   type="file" accept=".jpg, .jpeg, .png" value={details.certificate12th} onChange={handleInputChange} /> */}
                                </div>
                            )}

                            {/* Graduate Qualification - Visible if Graduate or PostGraduate is selected */}
                            {(qualification === 'Graduate' || qualification === 'PostGraduate') && (
                                <div>
                                    <h3>Graduate Qualification Details</h3>
                                    <select
                                        name="graduateName"
                                        value={details.graduateName}
                                        onChange={handleInputChange2}
                                    >
                                        <option value="">Select Qualification</option>
                                        <option value="Bachelor of Technology">Bachelor of Technology</option>
                                        <option value="Degree">Degree</option>
                                    </select>

                                    <input
                                        type="text"
                                        name="rollNoGrad"
                                        placeholder="Roll No"
                                        value={details.rollNoGrad}
                                        onChange={handleInputChange2}
                                    />
                                    <input
                                        type="text"
                                        name="collegeNameGrad"
                                        placeholder="College Name"
                                        value={details.collegeNameGrad}
                                        onChange={handleInputChange2}
                                    />
                                    <input
                                        type="text"
                                        name="stateGrad"
                                        placeholder="State"
                                        value={details.stateGrad}
                                        onChange={handleInputChange2}
                                    />
                                    {/* <input
                                    type="text"
                                    name="universityGrad"
                                    placeholder="University"
                                    value={details.universityGrad}
                                    onChange={handleInputChange}
                                /> */}
                                    <input
                                        type="text"
                                        name="passingYearGrad"
                                        placeholder="Passing Year"
                                        value={details.passingYearGrad}
                                        onChange={handleInputChange2}
                                    />
                                    <input
                                        type="text"
                                        name="totalMarksGrad"
                                        placeholder="Total Marks"
                                        value={details.totalMarksGrad}
                                        onChange={handleInputChange2}
                                    />
                                    <input
                                        type="text"
                                        name="obtainedMarksGrad"
                                        placeholder="Marks Obtained"
                                        value={details.obtainedMarksGrad}
                                        onChange={handleInputChange2}
                                    />
                                    <input
                                        type="text"
                                        name="aggregateGrad"
                                        placeholder="Aggregate Percentage"
                                        value={details.aggregateGrad}
                                        onChange={handleInputChange2}
                                    />
                                    <label>Graduate Certificate:</label>
                                    <input
                                        type="file"
                                        accept=".jpg, .jpeg, .png"
                                        name="certificateGraduate"
                                        onChange={handleInputChange2}
                                    />
                                    {/* <input type="file" accept=".jpg, .jpeg, .png" value={details.certificateGraduate} onChange={handleInputChange} /> */}
                                </div>
                            )}

                            {/* Post Graduate Qualification - Visible only if PostGraduate is selected */}
                            {qualification === 'PostGraduate' && (
                                <div>
                                    <h3>Post Graduate Qualification Details</h3>
                                    <select
                                        name="postGraduateName"
                                        value={details.postGraduateName}
                                        onChange={handleInputChange2}
                                    >
                                        <option value="">Select Qualification</option>
                                        <option value="Master of Technology">Master of Technology</option>
                                        <option value="Post Graduate Degree">Post Graduate Degree</option>
                                    </select>

                                    <input
                                        type="text"
                                        name="rollNoPostGrad"
                                        placeholder="Roll No"
                                        value={details.rollNoPostGrad}
                                        onChange={handleInputChange2}
                                    />
                                    <input
                                        type="text"
                                        name="collegeNamePostGrad"
                                        placeholder="College Name"
                                        value={details.collegeNamePostGrad}
                                        onChange={handleInputChange2}
                                    />
                                    <input
                                        type="text"
                                        name="statePostGrad"
                                        placeholder="State"
                                        value={details.statePostGrad}
                                        onChange={handleInputChange2}
                                    />
                                    {/* <input
                                    type="text"
                                    name="universityPostGrad"
                                    placeholder="University"
                                    value={details.universityPostGrad}
                                    onChange={handleInputChange}
                                /> */}
                                    <input
                                        type="text"
                                        name="passingYearPostGrad"
                                        placeholder="Passing Year"
                                        value={details.passingYearPostGrad}
                                        onChange={handleInputChange2}
                                    />
                                    <input
                                        type="text"
                                        name="totalMarksPostGrad"
                                        placeholder="Total Marks"
                                        value={details.totalMarksPostGrad}
                                        onChange={handleInputChange2}
                                    />
                                    <input
                                        type="text"
                                        name="obtainedMarksPostGrad"
                                        placeholder="Marks Obtained"
                                        value={details.obtainedMarksPostGrad}
                                        onChange={handleInputChange2}
                                    />
                                    <input
                                        type="text"
                                        name="aggregatePostGrad"
                                        placeholder="Aggregate Percentage"
                                        value={details.aggregatePostGrad}
                                        onChange={handleInputChange2}
                                    />
                                    <label>Post Graduate Certificate:</label>
                                    <input
                                        type="file"
                                        accept=".jpg, .jpeg, .png"
                                        name="certificatePostGraduate"
                                        onChange={handleInputChange2}
                                    />
                                    {/* <input type="file" accept=".jpg, .jpeg, .png" value={details.certificatePostGraduate} onChange={handleInputChange} /> */}
                                </div>
                            )}
                        </div></form>
                </div>


                <div className={`box1 ${currentBox === 4 ? 'show' : 'hide'}`}>
                    <form onSubmit={handleSubmit}>
                        <h3>Upload Documents</h3>
                        <br></br>
                        <label>Photo:</label>
                        <input 
                                    required

                            type="file"
                            accept=".jpg, .jpeg, .png"
                            onChange={(e) => handleFileChange(e, 'photo')}
                        />
                        <br />
                        <label>Signature:</label>
                        <input 
                                    required

                            type="file"
                            accept=".jpg, .jpeg, .png"
                            onChange={(e) => handleFileChange(e, 'signature')}
                        />
                        <br />

                        <label>ID Card:</label>
                        <input 
                                    required

                            type="file"
                            accept=".jpg, .jpeg, .png"
                            onChange={(e) => handleFileChange(e, 'idCard')}
                        />
                        <br />
                        {/* 
                        <label>10th Certificate:</label>
                        <input
                            type="file"
                            accept=".jpg, .jpeg, .png"
                            onChange={(e) => handleFileChange(e, 'certificate10th')}
                        />
                        <br /> */}
                        <p style={{color:"red"}}>Upload Files lessthan 200KB</p>

                        <h3>Declaration</h3><br></br>
                        <p>
                            • I hereby confirm that I have read the “General Instructions” provided at home page.
                        </p><br></br>
                        <p>
                            • I accept all the rules & regulations and eligibility criteria against each post given in the “General Instructions” provided at the home page in https://ndacivrect.gov.in
                        </p><br></br>
                        <p>
                            • I hereby declare that the information provided by me in this online application form is true, complete and correct to the best of my knowledge and belief. I understand that in the event of any information being found false or incorrect at any stage, my candidature/appointment is liable to be cancelled/terminated.
                        </p><br></br>
                        <label>
                            <input
                                type="checkbox"
                                checked={declarationAccepted}
                                onChange={handleCheckboxChange}
                            />
                            I agree to the declaration above.
                        </label>
                        <br /><br></br>
                    </form>
                </div>



                {[...Array(totalBoxes)].map((_, index) => (
                    <div
                        key={index + 1}
                        className={`box1 ${currentBox === index + 1 ? 'show' : 'hide'}`}
                    >
                        <div className="next_previous">
                            <button
                                className="next2"
                                onClick={prevBox}
                                disabled={currentBox === 1}
                            >
                                PREVIOUS
                            </button>
                            {index + 1 === totalBoxes ? (
                                <Link to={`/Applicationpdf/${registrationnumber}`} >
                                <button className="next5" onClick={chooseTemplate} disabled={submitDisabled}>
                                    Preview
                                </button></Link>
                            ) : (
                                <button className="next3" onClick={nextBox}>
                                    NEXT
                                </button>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Applicationform;