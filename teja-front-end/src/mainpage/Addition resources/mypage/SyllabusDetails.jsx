import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { syllabusData } from './Syllabus_of_mainjobs';
import { IoMdClose } from "react-icons/io";
import './mypage.css';

function Syllabus_Details() {
    const { type } = useParams();
    const navigate = useNavigate();
    const exam = syllabusData.find(exam => exam.job && exam.job.toLowerCase() === type);

    if (!exam) {
        return <div>Exam not found</div>;
    }

    const [visibleStream, setVisibleStream] = useState(exam.streams ? exam.streams[0] : null);

    const handleStreamClick = (stream) => {
        if (visibleStream && visibleStream.job === stream.job) {
            setVisibleStream(null); // Hide the stream if it is already visible
        } else {
            setVisibleStream(stream); // Show the clicked stream
        }
    };

    const handleClosejobs = () => {
        navigate(-1); 
    };

    return (
        <div className="exam-details-unique">
            <div className="unique-header">
                {exam.job} Exam Syllabus
            </div>

            <div className="exam-content">
                <div className="content-left-syllabus">
                    <div className="mainhead">{exam.job} Syllabus Overview</div>
                    <div className="ul"></div>
                    {exam.streams ? (
                        <div className="stream-container">
                            <div className="mainhead">{exam.job} Streams</div>
                            <div className="stream-buttons">
                                {exam.streams.map((stream, index) => (
                                    <div key={index} className="stream-item">
                                        <button
                                            className={`stream-button ${visibleStream && visibleStream.job === stream.job ? 'active' : ''}`}
                                            onClick={() => handleStreamClick(stream)}>
                                            {stream.job} Syllabus
                                        </button>
                                    </div>
                                ))}
                            </div>
                            <br />
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
                            <br />
                            <h2>{visibleStream.job} Syllabus</h2>
                            {visibleStream.syllabus.map((ele, index) => (
                                <div key={index} className="eachsubject">
                                    <span style={{ color: 'black' }}>{ele.subject} </span>:
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

export default Syllabus_Details;
