import { useParams } from "react-router-dom";
import  examQuestions  from "./examkeydata";


export const Key = () => {
    // Navigate to the respective exam page or perform an action
    var { exam } = useParams();
    var examdetails = examQuestions[exam];
    console.log(examdetails);
    
    return (
        <>
        <div className="ch_full">
            <div className="container">
                <h1 className='header_admitcard'>{exam}</h1>
                {examdetails.map((ele, index) => {
                    return (
                        <div key={index} className="questionbox">
                            <div className="qst">{index+1}.  {ele.q}</div>
                            <ul className="opt">
                                <li>{ele.options[0]}</li>
                                <li>{ele.options[1]}</li>
                                <li>{ele.options[2]}</li>
                                <li>{ele.options[3]}</li>
                            </ul>
                            <p id="ans">Correct Answer: {ele.correctAnswer}</p>
                        </div>
                    );
                })}
            </div>
            </div>
        </>
    );
};
