import React from "react";
import "./AnswerKey.css";
import { Link } from "react-router-dom";

const examNames = [
  // Navy exams
  "Navy SSR",
  "Navy AA",
  "Navy MR",
  "Navy INET",
  "Navy Sailor",
  "Navy CoastGuard",
  "Navy Tradesman",
  "Navy Artificer Apprentice",
  "Navy SSR Exam",
  "Navy Dockyard Apprentice",

  // Army exams
  "Army Soldier GD",
  "Army Technical",
  "Army Nursing Asst.",
  "Army Clerk",
  "Army Tradesman",
  "Army JCO Religious Teacher",
  "Army Havildar SAC",
  "Army Edu Havildar",
  "Army Medical Corps",
  "Army SSC Tech",

  // Air Force exams
  "IAF Airmen X",
  "IAF Airmen Y",
  "IAF Airmen X & Y",
  "IAF AFCAT",
  "IAF Ground Duty",
  "IAF Meteorology",
  "IAF NCC Special Entry",
  "IAF Flying Branch",
  "IAF Technical Branch",
  "IAF Sports Entry",

  // Bank exams
  "SBI PO",
  "SBI Clerk",
  "IBPS PO",
  "IBPS Clerk",
  "RBI Assistant",
  "RBI Grade B",
  "IBPS RRB PO",
  "IBPS RRB Clerk",
  "NABARD Asst. Manager",
  "NABARD Dev. Asst.",

  // Railway exams
  "RRB NTPC",
  "RRB Group D",
  "RRB ALP",
  "RRB JE",
  "RRB Station Master",
  "RRB Goods Guard",
  "RRB Technician",
  "RRB Traffic Apprentice",
  "RRB Commercial Apprentice",
  "RRB Jr. Clerk",

  // Police exams
  "Police Constable",
  "Sub-Inspector",
  "Police Assistant",
  "Police Driver",
  "Police Cadet",
  "Detective",
  "Police Inspector",
  "Forensic Expert"
];

export function AnswerKey() {

  return (
    <div className="containerquestion">
      <h1 className='header_admitcard'>Answer Keys</h1>

      <div className="exam-button-grid">
        {examNames.map((exam, index) => (
          <button key={index} className="exam-btn">
            <Link to={`/Questions/${exam}`}>{exam}</Link>
          </button>
        ))}
      </div>
    </div>
  )
}
//  const Key = (exam) => {
//   // Navigate to the respective exam page or perform an action
//   console.log(examQuestions[exam]);
//   var examdetails=examQuestions[exam];
//   return(<div className="container">hai
      
//   </div>)
// };
// function Key()
// {
  
// }