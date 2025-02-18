import React, { useState } from "react";
import "./mypage.css";
import { selectionProcess } from "./selectiondata.jsx";
import { useParams,useNavigate} from "react-router-dom";
import { IoMdClose } from "react-icons/io";

 function Selection_Details() {
    const { type } = useParams();
    const navigate = useNavigate();
    const [isVisible, setIsVisible] = useState(true);  

    const selection = selectionProcess.find(
        (selection) => selection.sector && selection.sector.toLowerCase() === type
    );

    if (!selection) {
        return <h1>Exam not found</h1>; 
    }

    const handleClose = () => {
        setIsVisible(false);
        navigate(-1);  
    };

    return (
        <>
            {isVisible && (
                <div className="exam-details-unique">
                    <div className="unique-header">
                        {selection.sector} Exam Selection Process
                        {/* <div className="tclose">
                        <button className="close" onClick={handleClose}>
                            <IoMdClose/>
                        </button>
                        </div> */}
                    </div>
                    <div className="exam-content">
                        <div className="content-left-selection">
                            {selection.steps.map((step, index) => (
                                <>
                                <div key={index}>
                                    {step}
                                </div>
                                <br></br>
                                </>
                                
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
export default Selection_Details;