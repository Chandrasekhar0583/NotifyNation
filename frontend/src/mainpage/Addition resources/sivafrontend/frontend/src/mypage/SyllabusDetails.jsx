import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { syllabusData } from './Syllabus_of_mainjobs';
import { IoMdClose } from "react-icons/io";
import './mypage.css';

export function Syllabus_Details() {
    const { type } = useParams();
    const navigate = useNavigate();
    const exam = syllabusData.find(exam => exam.job && exam.job.toLowerCase() === type);
    if (!exam) {
        return <div>Exam not found</div>;
    }
    const [visibleStream, setVisibleStream] = useState(null);

    const handleStreamClick = (streamName) => {
        if (visibleStream === streamName) {
            setVisibleStream(null); // Hide the stream if it is already visible
        } else {
            setVisibleStream(streamName); // Show the clicked stream
        }
    };

    const handleClose = () => {
        setVisibleStream(null);  
     };

    const handleClosejobs = () => {
        // setVisibleStream(null);  
        navigate(-1); 
    };

    return (
        <div className="exam-details-unique">
            <div className="unique-header">
                <h1>{exam.job} Exam Syllabus</h1>
            </div>

            <div className="exam-content">
                <div className="content-left">
                    <div className="mainhead">{exam.job} Syllabus Overview</div>
                    {exam.streams ? (
                        <div className="stream-container">
                            <h2>{exam.job} Streams</h2>
                            <div className="stream-buttons">
                                <div className="tclose">
                                    <button className="close" onClick={handleClosejobs}>
                                        <IoMdClose />
                                    </button>
                                </div>
                                {exam.streams.map((stream, index) => (
                                    <div key={index} className="stream-item">
                                        <button
                                            className="stream-button"
                                            onClick={() => handleStreamClick(stream)}>
                                            {stream.job} Syllabus
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ) : (
                        exam.syllabus.map((ele, index) => (
                            <div key={index} className="eachsubject">
                                <span style={{ color: 'black' }}>{ele.subject}</span>:
                                {ele.topics.map((topic, i) => (
                                    <span key={i}>
                                        {topic}{i < ele.topics.length - 1 ? ', ' : ''}
                                    </span>
                                ))}
                            </div>
                        ))
                    )}
                    {visibleStream && (
                        <div className="stream-syllabus">
                            <h2>{visibleStream.job} Syllabus</h2>
                            <div className="tclose">
                                <button className="close" onClick={handleClose}>
                                    <IoMdClose />
                                </button>
                            </div>
                            {visibleStream.syllabus.map((ele, index) => (
                                <div key={index} className="eachsubject">
                                    <span style={{ color: 'black' }}>{ele.subject}</span>:
                                    {ele.topics.map((topic, i) => (
                                        <span key={i}>
                                            {topic}{i < ele.topics.length - 1 ? ', ' : ''}
                                        </span>
                                    ))}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
