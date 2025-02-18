import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import './mypage.css';
import { IoMdClose } from "react-icons/io";
import { previousPapersData } from "./perivous_papersdata.jsx";

export function Previous_Papers_Details() {
    const { type } = useParams();
    const navigate = useNavigate();
    const [selectedStream, setSelectedStream] = useState(null);

    // Find the relevant data for the selected job
    const data = previousPapersData.find(
        (data) => data.job && data.job.toLowerCase() === type.toLowerCase()
    );

    // Close the current view and navigate to the previous page
    const handleClose = () => {
        navigate();
        setSelectedStream(false);
    };

    // Select a stream to display its papers
    const handleStreamClick = (stream) => {
        setSelectedStream(stream);
    };
    const handleClosejob = () => {
        navigate(-1);
    };

    // Return error message if no data is found
    if (!data) {
        return <h1>Previous papers not found</h1>;
    }

    return (
        <>
            <div className="exam-details-unique">
                <div className="unique-header">
                    <h1>Previous Papers for {data.job} Exam</h1>
                    
                </div>
            </div>
            <div className="exam-content">
             
                <div className="content-left">
                <div className="tclose">
                        <div className="close" onClick={() => navigate(-1)}>
                            <IoMdClose />
                        </div>
                    </div>
                    <h2>{data.job} Streams</h2>
                    <div className="stream-buttons">
                        {data.streams.map((stream, index) => (
                            <button
                                key={index}
                                className="stream-button"
                                onClick={() => handleStreamClick(stream)}
                            >
                                {stream.streamName}
                            </button>
                        ))}
                    </div>

                    {selectedStream && (
                        <div className="papers-container">
                           <div className="tclose">
                        <div className="close" onClick={handleClose}>
                            <IoMdClose />
                        </div>
                    </div>
                            <h3>{selectedStream.streamName} Previous Papers</h3>
                            <ul>
                                {selectedStream.papers.map((paper, index) => (
                                    <li key={index}>
                                        <a href={paper.paperURL} download>
                                            View and Download Paper
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}
