import React, { useState } from "react";
import { Eachexam_Structure } from "./exam_eachdata";
import './mypage.css';
import { useParams, useNavigate } from "react-router-dom";

function Exam_Structure() {
    const [selectedStream, setSelectedStream] = useState(null);  
    const { type } = useParams(); 
    const data = Eachexam_Structure[type];  
    const navigate = useNavigate(); 

    if (!data) {
        return <div>Exam not found</div>;
    }

    return (
        <div className="exam-structure-container">
            <h1 className="exam-title">{type.toUpperCase()} Exam Streams</h1>
            <div className="stream-list">
                {Object.keys(data).map((stream, index) => (
                    <button
                        key={index}
                        className="stream-button"
                        onClick={() => setSelectedStream(selectedStream === stream ? null : stream)} 
                    >
                        {stream}
                    </button>
                ))}
            </div>

            {/* Display the selected stream's details */}
            {selectedStream && (
                <div className="selected-stream">
                    <h2>Exam Structure for {selectedStream}</h2>
                    <ul className="stream-details">
                        {Object.entries(data[selectedStream]).map(([tier, info], index) => (
                            <li key={index}>
                                <strong>{tier}:</strong>
                                <ul>
                                    {Object.entries(info).map(([key, value], index) => (
                                        <li key={index}>
                                            <strong>{key}:</strong> {value}
                                        </li>
                                    ))}
                                </ul>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

export default Exam_Structure;
