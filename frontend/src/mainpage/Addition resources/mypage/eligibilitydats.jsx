import React from 'react';
import { useParams } from 'react-router-dom';
import { SSC_Eligibility } from './eachexameligibility';
import { useState } from 'react';
import { IoMdClose } from "react-icons/io";
import { NavyEligibility } from "./navyjobeligibility";
import { Army_eligibility } from './armyjobeachdata';
import { Airforce_eligibility } from './airforcejobeachdata';
import { Railway_eligibility } from './railwayjobeachdata';
import { useNavigate } from 'react-router-dom';

const examData = {
    ssc: {
        name: 'SSC',
        examType: 'Competitive',
        eligibility: 'Graduation',
        age: '18-30'
    },
    navy: {
        name: 'Navy',
        examType: 'Defense',
        eligibility: '10+2',
        age: '17-21'
    },
    army: {
        name: 'Army',
        examType: 'Defense',
        eligibility: '10+2',
        age: '18-25'
    },
    railway: {
        name: 'Railway',
        examType: 'Technical',
        eligibility: 'Diploma/Graduation',
        age: '18-33'

    },
    airforce: {
        name: 'Air Force',
        examType: 'Technical',
        eligibility: 'Diploma/Graduation',
        age: '18-33'

    }

};

 function ExamDetails()
{
    const [visibleItems, setVisibleItems] = useState([]);
    const [visibleSection, setVisibleSection] = useState(null);
    const { type } = useParams();
    const navigate = useNavigate();

    const exam = examData[type];

    if (!exam) {
        return <div>Exam not found</div>;
    }
    const handleClick = (section) => {
        let data = [];
    
        // Determine which dataset to use
        if (type === 'ssc') {
            data = SSC_Eligibility;
        } else if (type === 'navy') {
            data = NavyEligibility;
        } else if (type === 'army') {
            data=Army_eligibility;  // Add this line to handle the Bank exam
        } else if (type === 'airforce') {
            data = Airforce_eligibility;
        } else if (type === 'railway') {
            data = Railway_eligibility;
        }
        
        // Handle sections (10th, inter, graduation) for Bank as well
        if (visibleSection === section) {
            setVisibleItems([]);
            setVisibleSection(null);
            return;
        }
        if (section === '10th') {
            setVisibleItems(data.slice(0, 5));
        } else if (section === 'inter') {
            setVisibleItems(data.slice(5, 11));
        } else if (section === 'graduation') {
            setVisibleItems(data.slice(11, 16));
        }
        setVisibleSection(section);
    };
    function close() {
        const close = document.getElementsByClassName('everyjob')[0];
        close.style.display = "none";
        setVisibleItems([]);  
    setVisibleSection(null);
    }


    return (
        <div className="exam-details-unique">
            <div className="unique-header">
                {exam.name} Exam Overview
                {/* <div className="tclose">
                    <div className="close" onClick={() => navigate(-1)}>
                        <IoMdClose />
                    </div>
                </div> */}
            </div>

            <div className="exam-content">
                <div className="content-left">
                    <div className="mainhead">{exam.name} - Key Information</div>
                    <div className="exam_type"><p><strong><b>Type of Exam:</b></strong> {exam.examType}</p></div>
                    <br></br>
                    <div className="eligibility"><p><strong>Eligibility Criteria:</strong> {exam.eligibility}</p></div>
                    <br></br>
                    <div className="age"><p><strong>Age Limit:</strong> {exam.age} years</p></div>
                </div>
                <div className="eachjob">
                    <div className="jobheading">{exam.name} streams</div>
                 
                        <div className="classes">
                            <div className="ten" onClick={() => handleClick('10th')}>Tenth Based</div>
                            <div className="inter" onClick={() => handleClick('inter')}>Inter Based</div>
                            <div className="graduation" onClick={() => handleClick('graduation')}>Graduation Based</div>
                        </div>
                   
                    {visibleItems.length > 0 && (
                        <div className="everyjob" style={{}}>
                            {/* <div className="tclose"><div className="close" onClick={close}><IoMdClose /></div></div> */}
                            {
                                visibleItems.map((ele, ind) => (
                                    <div className="jobname" key={ind}>
                                        <p><b><strong>Exam: </strong></b> {ele.exam}</p>
                                        <br></br>
                                        <p><b><strong>Age Limit: </strong></b>{ele.agelimit}</p>
                                        <br></br>
                                        <p><b><strong>Eligibility:</strong></b> {ele.eligibity}</p>
                                        <br></br>
                                        <p><b><strong>Additional Requirements:</strong></b> {ele.AdditionalRequirements}</p>
                                        <br></br>
                                        <p><b><strong>Nationality:</strong></b> {ele.Nationality}</p>
                                    </div>
                                ))
                            }

                        </div>
                    )}




                </div>
            </div>
        </div>
    );
}

export default ExamDetails;












