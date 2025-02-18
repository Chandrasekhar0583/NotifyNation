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

export function ExamDetails()
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
                <h1>{exam.name} Exam Overview</h1>
                <div className="tclose">
                    <div className="close" onClick={() => navigate(-1)}>
                        <IoMdClose />
                    </div>
                </div>
            </div>

            <div className="exam-content">
                <div className="content-left">
                    <div className="mainhead">{exam.name} - Key Information</div>
                    <div className="exam_type"><p><strong>Type of Exam:</strong> {exam.examType}</p></div>
                    <div className="eligibility"><p><strong>Eligibility Criteria:</strong> {exam.eligibility}</p></div>
                    <div className="age"><p><strong>Age Limit:</strong> {exam.age} years</p></div>
                </div>
                <div className="eachjob">
                    <center><div className="jobheading">{exam.name} streams</div></center>
                 
                        <div className="classes">
                            <div className="ten" onClick={() => handleClick('10th')}>10th</div>
                            <div className="inter" onClick={() => handleClick('inter')}>12th</div>
                            <div className="graduation" onClick={() => handleClick('graduation')}>Graduation</div>
                        </div>
                   
                    {visibleItems.length > 0 && (
                        <div className="everyjob" style={{}}>
                            <div className="tclose"><div className="close" onClick={close}><IoMdClose /></div></div>
                            {
                                visibleItems.map((ele, ind) => (
                                    <div className="jobname" key={ind}>
                                        <p>Exam: {ele.exam}</p>
                                        <p>Age Limit: {ele.agelimit}</p>
                                        <p>Eligibility: {ele.eligibity}</p>
                                        <p>Additional Requirements: {ele.AdditionalRequirements}</p>
                                        <p>Nationality: {ele.Nationality}</p>
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














