import React, { useState } from "react";
import { Eachexam_Structure } from "./exam_eachdata";
import './mypage.css'; 
import { useParams, useNavigate } from "react-router-dom";
import "./mypage.css";
export function Exam_Structure() {
    const [selectedStream, setSelectedStream] = useState(null);  
    const { type } = useParams(); 
    const data = Eachexam_Structure[type];  
    const navigate = useNavigate(); 

    if (!data) {
        return <div>Exam not found</div>; // Handle the case where the exam is not found
    }

    // If no stream is selected, show the list of streams in buttons
    if (!selectedStream) {
        return (
            <div style={{ padding: '20px', position: 'relative',fontSize:'24px'}}>
                <h1>{type.toUpperCase()} Exam Streams</h1>
 
                <button 
                    className="cross-button"
                    onClick={() => navigate(-1)} 
                >
                    &times;  
                </button>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' ,fontSize:'24px'}}> 
                    {Object.keys(data).map((stream, index) => (  
                        <button
                            key={index}
                            className="stream-button"  
                            onClick={() => setSelectedStream(stream)}
                        >
                            {stream}  
                        </button>
                    ))}
                </div>
            </div>
        );
    }

    // Once a stream is selected, show its details
    return (
        <div style={{ padding: '20px', position: 'relative' }}>
            <h1>Exam Structure for {selectedStream}</h1>

            {/* Cross button to go back to stream selection */}
            <button 
                className="cross-button" 
                onClick={() => setSelectedStream(null)}
            >
                &times; {/* Cross icon */}
            </button>

            <h2>Details</h2>
            <ul>
                {Object.entries(data[selectedStream]).map(([tier, info], index) => ( // Display the selected stream's details
                    <li key={index} style={{ marginBottom: '10px' }}>
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
    );
}
