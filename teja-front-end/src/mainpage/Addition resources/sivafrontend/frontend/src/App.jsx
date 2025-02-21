import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Additional_Resources } from './mypage/main.jsx';
import { Eligibility } from './mypage/eligibilitypage.jsx';
import { Syllabus } from './mypage/Syllabus.jsx';
import { Structure } from './mypage/exam_structure.jsx';
import { Selection } from './mypage/selection.jsx';
import { Previous_papers } from './mypage/previouspapers.jsx';
import { ExamDetails } from './mypage/eligibilitydats.jsx';
import { Syllabus_Details } from './mypage/SyllabusDetails.jsx';
import { Selection_Details } from './mypage/selection_details.jsx';
import { Previous_Papers_Details } from './mypage/previous_papersdetails.jsx';
import { Exam_Structure } from './mypage/exam_structuredata.jsx';
import './App.css';

import Ha from './'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Additional_Resources />} >
        
        <Route path="/Eligibility" element={<Eligibility />} />
        <Route path="/Syllabus" element={<Syllabus />} />
        <Route path="/Structure" element={<Structure />}/>
        <Route path="/Selection" element={<Selection />} />
        <Route path="/Previous_papers" element={<Previous_papers />} />
        <Route path="/ExamDetails/:type" element={<ExamDetails />}/>
        <Route path="/Syllabus_Details()/:type" element={<Syllabus_Details />}/>
        <Route path="/Selection_Details()/:type" element={<Selection_Details />}/>
        <Route path="/Previous_Papers_Details()/:type" element={< Previous_Papers_Details/>}/>
        <Route path="/Exam_Structure/:type" element={<Exam_Structure/>}/>

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
