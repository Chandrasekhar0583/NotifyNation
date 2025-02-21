import React,{useState} from 'react';
import { useParams } from 'react-router-dom';
import data from './Armydata';
import { Link } from 'react-router-dom';
import './Armytest.css'

const Armytest = () => {
  const { userId } = useParams();
  const ArmyTest = data.find((EachUser) => EachUser.id == userId);
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  return (
    <div className="Armykjsdkc">
    <div className="Armycontainer">
      <h2 className='Armycontainerh2'>Exam Instructions:</h2>
      
        
         <h3>**Total Questions**: 100, divided into 4 sections (25 questions per section).
         </h3> 
        
       
          <div className="marking-scheme">
          <h4> **Marking Scheme**:</h4>
            <ul>
            <li>Correct Answer: +4 marks</li>
            <li>Incorrect Answer: -1 mark</li>
            <li>Unattempted Question: -1 mark</li>
           
            <li>Read each question carefully before selecting an answer.</li>
        <li>You have 90 minutes to complete the quiz; manage your time wisely.</li>
        <li>Each question carries equal marks; there is negative marking.</li>
        <li>Use the "Mark as Review" option to revisit questions later.</li>
        <li>Once submitted, answers cannot be changed.</li>
        <li>Do not refresh the page during the quiz to avoid data loss.</li>
        </ul>
          </div>
         
      

      <h2 className='Armycontainerh2'>Exam Timer:</h2>
      <ul>
        <li>
          The countdown timer on the screen shows the remaining time. The exam will auto-submit when the timer reaches zero.
        </li>
      </ul>

      <h2 className='Armycontainerh2'>Question Navigation:</h2>
      <ul>
        <li>
          Use the **Question Palette** on the right to view and navigate questions. Each question's status is shown with these symbols:
          <ul className="question-status">
            <li className="not-visited">Not visited</li>
            <li className="not-answered">Not answered</li>
            <li className="answered">Answered</li>
            <li className="not-answered-marked">Marked for review (unanswered)</li>
            <li className="answered-marked">Marked for review (answered)</li>
          </ul>
        </li>
      </ul>

      <h2 className='Armycontainerh2'>Answering Questions:</h2>
      <ul>
        <li>
          For MCQs:
          <ul>
            <li>Select one answer by clicking the bubble next to your choice (A, B, C, or D).</li>
            <li>To deselect, click the same option again or click <strong>Clear Response</strong>.</li>
            <li>Click <strong>Save & Next</strong> to save and move to the next question.</li>
            <li>Use <strong>Mark for Review & Next</strong> if you want to revisit the question later.</li>
          </ul>
        </li>
        <li>
          For Numerical Questions:
          <ul>
            <li>Enter your answer using the virtual keypad. Four decimal places are allowed.</li>
            <li>Click <strong>Clear Response</strong> to remove your answer.</li>
            <li>Click <strong>Save & Next</strong> to save and proceed.</li>
          </ul>
        </li>
      </ul>

      <div className="flex-container">
        <div className="checkbox-container">
        <input 
            type="checkbox" 
            className="checkbox" 
            checked={isChecked} 
            onChange={handleCheckboxChange} 
          />
          <label>
            <h3>Accept Terms & Conditions</h3>
          </label>
        </div>
        <div>
          <Link to="/quiz">
            <button disabled={!isChecked}>
              <h3 className='starttheexam'>Start Exam</h3>
            </button>
          </Link>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Armytest;
