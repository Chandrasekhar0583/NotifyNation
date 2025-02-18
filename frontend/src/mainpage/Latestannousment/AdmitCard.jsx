
import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import './admitcard.css'


// const examData = [
//   { date: "01-11-2024", organization: "SSC", examName: "SSC CHSL Online Form 2024" },
//   { date: "05-11-2024", organization: "SSC", examName: "SSC CGL Online Form 2024" },
//   { date: "10-11-2024", organization: "SSC", examName: "SSC MTS Online Form 2024" },
//   { date: "01-12-2024", organization: "SSC", examName: "Bihar SSC Stenographer Online Form 2024" },
//   { date: "01-12-2024", organization: "SSC", examName: "UP SSC Jail Warder Online Form 2024" },
//   { date: "01-12-2024", organization: "Indian Police", examName: "Rajasthan Police Constable Online Form 2024" },
//   { date: "01-12-2024", organization: "Indian Air Force", examName: "Haryana SSC Clerk Online Form 2024" },
//   { date: "01-12-2024", organization: "Indian Air Force", examName: "Territorial Army Soldier Online Form 2024" },
//   { date: "01-12-2024", organization: "Indian Air Force", examName: "HSL Manager Online Form 2024" },
//   { date: "18-01-2024", organization: "IBPS", examName: "ITBP Assistant Sub-Inspector Online Form 2024" },
//   { date: "19-04-2024", organization: "RRB", examName: "Navy AA SSR Online Form 2024" },
//   { date: "01-08-2024", organization: "RRB", examName: "Navy MR Online Form 2024" },
//   { date: "05-09-2024", organization: "SBI", examName: "Navy AA SSR Technician Online Form 2024" },
//   { date: "01-09-2024", organization: "RBI", examName: "Navy MR Chef Online Form 2024" },
//   { date: "30-08-2024", organization: "LIC", examName: "Navy MR Steward Online Form 2024" },
//   { date: "25-08-2024", organization: "UPSC", examName: "Navy MR Hygienist Online Form 2024" },
//   { date: "20-08-2024", organization: "SSC", examName: "Navy AA SSR Electrical Online Form 2024" },
//   { date: "15-08-2024", organization: "RRB", examName: "Navy AA SSR Mechanical Online Form 2024" },
//   { date: "10-08-2024", organization: "UPSC", examName: "Navy AA SSR IT Online Form 2024" },
//   { date: "05-08-2024", organization: "FSSAI", examName: "Navy AA SSR IT2 Online Form 2024" },
//   { date: "01-08-2024", organization: "NTPC", examName: "Navy AA SSR Electronics Online Form 2024" },
//   { date: "27-09-2024", organization: "Indian Post Payment Bank", examName: "Agniveer Vayu Online Form 2024" },
//   { date: "21-09-2024", organization: "Indian Bank", examName: "Medical Branch Online Form 2024" },
//   { date: "08-10-2024", organization: "Indian Bank", examName: "Engineering Branch Online Form 2024" },
//   { date: "18-06-2024", organization: "SSC", examName: "Logistics Branch Online Form 2024" },
//   { date: "30-12-2023", organization: "SSC", examName: "Education Branch Online Form 2024" },
//   // { date: "16-11-2023", organization: "SSC", examName: "IBPS Tentative Exam Calendar 2024-25////" },
//   // { date: "11-09-2023", organization: "SSC", examName: "SSC Tentative Calendar of Exams for 2023-24" },
//   // { date: "02-01-2023", organization: "SSC", examName: "SSC Tentative Annual Calendar 2023-24" },
//   // { date: "22-05-2023", organization: "SSC", examName: "SSC Exam Schedule 2023" },
//   // { date: "09-06-2023", organization: "SSC", examName: "SSC Revised Annual Planner 2023" },
//   // { date: "02-05-2023", organization: "SSC", examName: "SSC Various Exam Calendar 2023" },
//   // { date: "06-07-2022", organization: "SSC", examName: "SSC Exam Calendar 2022-23" },
//   // { date: "11-03-2022", organization: "IBPS", examName: "IBPS Tentative Exam Calendar 2022-23" },
//   // { date: "14-03-2022", organization: "IBPS", examName: "IBPS Specialist Officer XII Online Form 2022" },
//   // { date: "14-03-2022", organization: "IBPS", examName: "IBPS Probationary Officers/Management Trainees XII Online Form 2022" },
//   // { date: "18-06-2023", organization: "SSC", examName: "SSC Revised Exam Calendar 2023" }
// ];
 

const examData = [
  { date: "01-11-2024", organization: "SSC", examName: "SSC CHSL Online Form 2024" },
  { date: "05-11-2024", organization: "SSC", examName: "SSC CGL Online Form 2024" },
  { date: "10-11-2024", organization: "SSC", examName: "SSC MTS Online Form 2024" },
  { date: "01-12-2024", organization: "SSC", examName: "Bihar SSC Stenographer Online Form 2024" },
  { date: "01-12-2024", organization: "SSC", examName: "UP SSC Jail Warder Online Form 2024" },
  { date: "01-12-2024", organization: "Indian Police", examName: "Rajasthan Police Constable Online Form 2024" },
  { date: "01-12-2024", organization: "Indian Air Force", examName: "Haryana SSC Clerk Online Form 2024" },
  { date: "01-12-2024", organization: "Indian Air Force", examName: "Territorial Army Soldier Online Form 2024" },
  { date: "01-12-2024", organization: "Indian Air Force", examName: "HSL Manager Online Form 2024" },
  { date: "18-01-2024", organization: "IBPS", examName: "ITBP Assistant Sub-Inspector Online Form 2024" },
  { date: "19-04-2024", organization: "RRB", examName: "Navy AA SSR Online Form 2024" },
  { date: "01-08-2024", organization: "RRB", examName: "Navy MR Online Form 2024" },
  { date: "05-09-2024", organization: "SBI", examName: "Navy AA SSR Technician Online Form 2024" },
  { date: "01-09-2024", organization: "RBI", examName: "Navy MR Chef Online Form 2024" },
  { date: "30-08-2024", organization: "LIC", examName: "Navy MR Steward Online Form 2024" },
  { date: "25-08-2024", organization: "UPSC", examName: "Navy MR Hygienist Online Form 2024" },
  { date: "20-08-2024", organization: "SSC", examName: "Navy AA SSR Electrical Online Form 2024" },
  { date: "15-08-2024", organization: "RRB", examName: "Navy AA SSR Mechanical Online Form 2024" },
  { date: "10-08-2024", organization: "UPSC", examName: "Navy AA SSR IT Online Form 2024" },
  { date: "05-08-2024", organization: "FSSAI", examName: "Navy AA SSR IT2 Online Form 2024" },
  { date: "01-08-2024", organization: "NTPC", examName: "Navy AA SSR Electronics Online Form 2024" },
  { date: "27-09-2024", organization: "Indian Post Payment Bank", examName: "Agniveer Vayu Online Form 2024" },
  { date: "21-09-2024", organization: "Indian Bank", examName: "Medical Branch Online Form 2024" },
  { date: "08-10-2024", organization: "Indian Bank", examName: "Engineering Branch Online Form 2024" },
  { date: "18-06-2024", organization: "SSC", examName: "Logistics Branch Online Form 2024" },
  { date: "30-12-2023", organization: "SSC", examName: "Education Branch Online Form 2024" },
];

const AdmitCard = ({ date, organization, examName }) => {
  
  return (
    
    <div className="admit-card">
      <div className='chandudebba2'>
        <h3 >{organization}</h3>
        <p>{examName}</p>
        <p><strong>Date:</strong> {date}</p>
      </div>
      <div className='chandudebba'>
  <Link to={`/AdmitCardForm/${encodeURIComponent(examName)}`} className="download-btn">Download</Link>
</div>
    </div>
  );
};
const AdmitCardList = () => {
  const [searched, setSearched] = useState(""); 

  const searchedData = (e) => {
    const { value } = e.target;
    setSearched(value);
  };

  const searchdt = searched.toLowerCase();
  const filterdata = examData.filter((data) => {
    const nameinclude = data.date.includes(searchdt);
    const jobdetailsinclude = data.organization.toLowerCase().includes(searchdt);
    const qualificationinclude = data.examName.toLowerCase().includes(searchdt);
    return nameinclude || jobdetailsinclude || qualificationinclude;
  });
  const final_data = searched ? filterdata : examData;
  return (
    <div className="containerr">
       <div className='search1'>
        <div className=" venkatpani"><h3>Admit Card Downloads</h3></div>
        <div>
          <input type='search' onChange={(e) =>{searchedData(e)}} name="search" placeholder='Search admitcard' />
        </div>
      </div>
      <div className='containerrrr' id="admit-card-list">
        {final_data.map((exam, index) => (
          <AdmitCard 
            key={index} 
            date={exam.date} 
            organization={exam.organization} 
            examName={exam.examName} 
          />
        ))}
      </div>
    </div>
  );
};

export default AdmitCardList;
