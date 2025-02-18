import React,{useState} from 'react';
import { Link } from 'react-router-dom';

const examResultData = [
  { date: "15/10/2024", organization: "IBPS", examName: "CRP PO/MT-XIV 2024 Preliminary Exam Result", resultLink: "https://www.ibps.in" },
  { date: "12/10/2024", organization: "NABARD", examName: "Assistant Manager Grade A 2024 Mains Exam Result", resultLink: "https://www.nabard.org" },
  { date: "10/10/2024", organization: "Indian Bank", examName: "Local Bank Officer 2024 Online Exam Result", resultLink: "https://www.indianbank.in" },
  { date: "09/10/2024", organization: "IBPS", examName: "CRP Clerk XIV 2024 Main Exam Result", resultLink: "https://www.ibps.in" },
  { date: "05/10/2024", organization: "IBPS", examName: "CRP RRB XIII Office Assistant (Multipurpose) 2024 Main Exam Result", resultLink: "https://www.ibps.in" },
  { date: "01/10/2024", organization: "Indian Post Payment Bank", examName: "IPPB IT Executive 2024 Online Exam Result", resultLink: "https://www.ippbonline.com" },
  { date: "28/09/2024", organization: "Indian Bank", examName: "Apprentice 2024 Online Exam Result", resultLink: "https://www.indianbank.in" },
  { date: "25/09/2024", organization: "IBPS", examName: "CRP RRB Officers Scale I, II & III XIII 2024 Main Exam Result", resultLink: "https://www.ibps.in" },
  { date: "20/09/2024", organization: "Nainital Bank Limited", examName: "IT-Officer, Manager-IT & Other 2024 Online Exam Result", resultLink: "https://www.nainitalbank.co.in" },
  { date: "18/09/2024", organization: "SBI", examName: "SBI Clerk 2024 Preliminary Exam Result", resultLink: "https://www.sbi.co.in" },
  // Add more result data here
];

const ExamResultDetails = ({ date, organization, examName, resultLink }) => {
  return (
    <div className="admit-card">
      <div>
        <h3>{organization}</h3>
        <p>{examName}</p>
        <p><strong>Result Release Date:</strong> {date}</p>
      </div>
      <a href={resultLink} target="_blank" rel="noopener noreferrer" className="download-btn">Check Result</a>
    </div>
  );
};

export const ExamResult = () => {
  const [searched, setSearched] = useState(""); 

  const searchedData = (e) => {
    const { value } = e.target;
    setSearched(value);
  };

  const searchdt = searched.toLowerCase();
  const filterdata = examResultData.filter((data) => {
    const nameinclude = data.date.includes(searchdt);
    const jobdetailsinclude = data.organization.toLowerCase().includes(searchdt);
    const qualificationinclude = data.examName.toLowerCase().includes(searchdt);
    return nameinclude || jobdetailsinclude || qualificationinclude;
  });
  const final_data = searched ? filterdata : examResultData;
  return (
    <div className="containerr">
      <div className='search1'>
        <div className=" venkatpani"><h3>Exams Results</h3></div>
        <div>
          <input type='search' name="search" onChange={(e)=>searchedData(e)} placeholder='Search exams' />
        </div>
      </div>
      <div className='containerrrr' id="admit-card-list">
        {final_data.map((exam, index) => (
          <ExamResultDetails 
            key={index} 
            date={exam.date} 
            organization={exam.organization} 
            examName={exam.examName} 
            resultLink={exam.resultLink} 
          />
        ))}
      </div>
    </div>
  );
};

export default ExamResult;
