import React, { useState } from "react";
import "./mypage.css";
import { selectionProcess } from "./selectiondata.jsx";
import { useParams,useNavigate} from "react-router-dom";
import { IoMdClose } from "react-icons/io";

export function Selection_Details() {
    const { type } = useParams();
    const navigate = useNavigate();
    const [isVisible, setIsVisible] = useState(true); // State to track visibility

    const selection = selectionProcess.find(
        (selection) => selection.sector && selection.sector.toLowerCase() === type
    );

    if (!selection) {
        return <h1>Exam not found</h1>; // If no selection matches the type
    }

    const handleClose = () => {
        setIsVisible(false);
        navigate(-1); // Navigate back to the previous page
    };

    return (
        <>
            {isVisible && (
                <div className="exam-details-unique">
                    <div className="unique-header">
                        <h1>{selection.sector} Exam Selection Process</h1>
                        <div className="tclose">
                        <button className="close" onClick={handleClose}>
                            <IoMdClose/>
                        </button>
                        </div>
                    </div>
                    <div className="exam-content">
                        <div className="content-left">
                            {selection.steps.map((step, index) => (
                                <div key={index}>
                                    <h3>{step}</h3>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
