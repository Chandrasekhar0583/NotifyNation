// import React, { useState } from "react";
// import './quiz.css';
// import maths from './database/maths';
// import science from './database/science';
// import english from './database/english';
// import general_awareness from './database/gnwn';

// const Quiz1 = () => {
//   const [currentSection, setCurrentSection] = useState('maths'); // default section
//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0); // start from first question
//   const [selectedAnswers, setSelectedAnswers] = useState({}); // store selected answers
//   const [markedForReview, setMarkedForReview] = useState([]); // store questions marked for review

//   // Section data mapping
//   const sections = {
//     maths,
//     science,
//     english,
//     general_awareness,
//   };

//   const currentQuestions = sections[currentSection]; // get questions for the current section

//   // Safeguard: ensure currentQuestions exists and is an array, and check currentQuestionIndex validity
//   if (!currentQuestions || !Array.isArray(currentQuestions) || currentQuestionIndex >= currentQuestions.length) {
//     return <div>No questions available for this section.</div>;
//   }

//   const currentQuestion = currentQuestions[currentQuestionIndex]; // Current question object

//   // Safeguard: ensure currentQuestion has a valid options array
//   const options = currentQuestion && currentQuestion.options ? currentQuestion.options : [];

//   // Handle next question
//   const handleNext = () => {
//     if (currentQuestionIndex < currentQuestions.length - 1) {
//       setCurrentQuestionIndex(currentQuestionIndex + 1);
//     }
//   };

//   // Handle previous question
//   const handlePrev = () => {
//     if (currentQuestionIndex > 0) {
//       setCurrentQuestionIndex(currentQuestionIndex - 1);
//     }
//   };

//   // Handle answer selection
//   const handleSelectAnswer = (option) => {
//     setSelectedAnswers({
//       ...selectedAnswers,
//       [`${currentSection}_${currentQuestionIndex}`]: option,
//     });
//   };

//   // Handle mark as review
//   const handleMarkAsReview = () => {
//     if (!markedForReview.includes(currentQuestionIndex)) {
//       setMarkedForReview([...markedForReview, currentQuestionIndex]);
//     }
//   };

//   // Clear selected option
//   const handleClear = () => {
//     const newSelectedAnswers = { ...selectedAnswers };
//     delete newSelectedAnswers[`${currentSection}_${currentQuestionIndex}`];
//     setSelectedAnswers(newSelectedAnswers);
//   };

//   return (
//     <div className="quiz_container">
//       {/* Section navigation buttons */}
//       <div className="section_buttons">
//         <button onClick={() => setCurrentSection('maths')}>Maths</button>
//         <button onClick={() => setCurrentSection('science')}>Science</button>
//         <button onClick={() => setCurrentSection('english')}>English</button>
//         <button onClick={() => setCurrentSection('general_awareness')}>General Awareness</button>
//       </div>

//       {/* Question display */}
//       <div className="question_container">
//         <h2>Question {currentQuestionIndex + 1}</h2>
//         <p>{currentQuestion ? currentQuestion.question : "No question available"}</p>
//         <div className="options">
//           {options.length > 0 ? (
//             options.map((option, idx) => (
//               <div key={idx}>
//                 <input
//                   type="radio"
//                   name="answer"
//                   checked={selectedAnswers[`${currentSection}_${currentQuestionIndex}`] === option}
//                   onChange={() => handleSelectAnswer(option)}
//                 />
//                 {option}
//               </div>
//             ))
//           ) : (
//             <p>No options available for this question.</p>
//           )}
//         </div>
//       </div>

//       {/* Navigation and Controls */}
//       <div className="Prev_next_markasreview_clear">
//         <button onClick={handlePrev} disabled={currentQuestionIndex === 0}>Prev</button>
//         <button onClick={handleMarkAsReview}>Mark as Review</button>
//         <button onClick={handleClear}>Clear</button>
//         <button onClick={handleNext} disabled={currentQuestionIndex === currentQuestions.length - 1}>Next</button>
//       </div>

//       {/* Marked for Review indication */}
//       <div className="marked_questions">
//         {markedForReview.includes(currentQuestionIndex) && <span style={{ color: "yellow" }}>Marked for Review</span>}
//       </div>
//     </div>
//   );
// };

// export default Quiz1;































import React, { useState, useEffect } from "react";
import axios from 'axios';
import './quiz.css';

import maths from './database/maths';
import science from './database/science';
import english from './database/english';
import general_awareness from './database/gnwn';

const Quiz = () => {
  const [currentSection, setCurrentSection] = useState('maths'); // default section
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0); // start from first question
  const [selectedAnswers, setSelectedAnswers] = useState({
    maths: [],
    science: [],
    english: [],
    general_awareness: []
  }); // store selected answers
  const [markedForReview, setMarkedForReview] = useState([]); // store questions marked for review
  const [timeLeft, setTimeLeft] = useState(10800); // 3 hours in seconds (10800)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(intervalId); // Clear the interval when the component is unmounted
  }, []);

  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const sections = {
    maths,
    science,
    english,
    general_awareness,
  };

  const currentQuestions = sections[currentSection]; // get questions for the current section

  if (!currentQuestions || !Array.isArray(currentQuestions) || currentQuestionIndex >= currentQuestions.length) {
    return <div>No questions available for this section.</div>;
  }

  const currentQuestion = currentQuestions[currentQuestionIndex];
  const options = currentQuestion && currentQuestion.options ? currentQuestion.options : [];

  const handleNext = () => {
    if (currentQuestionIndex < currentQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // If it's the last question of the current section, navigate to the next section or submit
      if (currentSection === 'maths') {
        setCurrentSection('science');
        setCurrentQuestionIndex(0); // Reset to first question of Science
      } else if (currentSection === 'science') {
        setCurrentSection('english');
        setCurrentQuestionIndex(0); // Reset to first question of English
      } else if (currentSection === 'english') {
        setCurrentSection('general_awareness');
        setCurrentQuestionIndex(0); // Reset to first question of General Awareness
      } else {
        handleFinalSubmit(); // Submit the quiz if it's the final question of the last section
      }
    }
  };

  const handlePrev = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleSelectAnswer = (option) => {
    setSelectedAnswers((prevAnswers) => ({
      ...prevAnswers,
      [currentSection]: {
        ...prevAnswers[currentSection],
        [currentQuestionIndex]: option,
      },
    }));
  };

  const handleMarkAsReview = () => {
    if (!markedForReview.includes(currentQuestionIndex)) {
      setMarkedForReview([...markedForReview, currentQuestionIndex]);
    }
  };

  const handleClear = () => {
    const newSelectedAnswers = { ...selectedAnswers };
    delete newSelectedAnswers[currentSection][currentQuestionIndex];
    setSelectedAnswers(newSelectedAnswers);
  };

  // Function to handle final submission to backend
  // const handleFinalSubmit = () => {
  //   axios.post('http://localhost:5000/validate-answers', { answers: selectedAnswers })
  //     .then((response) => {
  //       const { score, results } = response.data;
  //       console.log('Score:', score);
  //       console.log('Results:', results);
  //       // Display score and results to the user or navigate to a result page
  //     })
  //     .catch((err) => {
  //       console.error('Error validating answers:', err);
  //     });
  // };


  const handleFinalSubmit = async () => {
    // Create an object that holds selected answer indices
    const data = {
      maths: selectedAnswers.maths, // Contains selected answer indices for maths
      science: selectedAnswers.science, // For science
      english: selectedAnswers.english, // For english
      general_awareness: selectedAnswers.general_awareness, // For general awareness
    };
  
    try {
      const response = await axios.post("http://localhost:5000/validate-answers", data);
      console.log('Answers validated:', response.data);
    } catch (error) {
      console.error('Error validating answers:', error);
    }
  };
  
  return (
    <>
      <div className="quiz_container">
        <div className="question_container">
          <h2>Question {currentQuestionIndex + 1}</h2>
          <p>{currentQuestion ? currentQuestion.question : "No question available"}</p>
          <div className="options">
            {options.length > 0 ? (
              options.map((option, idx) => (
                <div key={idx}>
                  <input
                    type="radio"
                    name="answer"
                    checked={selectedAnswers[currentSection]?.[currentQuestionIndex] === option}
                    onChange={() => handleSelectAnswer(option)}
                  />
                  {option}
                </div>
              ))
            ) : (
              <p>No options available for this question.</p>
            )}
          </div>
        </div>

        <div className="option_container">
          <div className="timer">Timer: {formatTime(timeLeft)}</div>
          <div className="secton_buttons">
            <div className="buttons">
              <button className="maths_section" onClick={() => setCurrentSection('maths')}>Maths</button>
              <button className="science_section" onClick={() => setCurrentSection('science')}>Science</button>
              <button className="english_section" onClick={() => setCurrentSection('english')}>English</button>
              <button className="general_awareness_section" onClick={() => setCurrentSection('general_awareness')}>General</button>
            </div>

            <div className="section_options">
              {currentQuestions.map((_, index) => (
                <button
                  key={index}
                  className={currentQuestionIndex === index ? 'active' : ''}
                  onClick={() => setCurrentQuestionIndex(index)}
                >
                  {index + 1}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="Prev_next_markasreview_clear">
        <button onClick={handlePrev} disabled={currentQuestionIndex === 0}>Prev</button>
        <button onClick={handleMarkAsReview}>Mark as Review</button>
        <button onClick={handleClear}>Clear</button>
        {currentSection === 'general_awareness' && currentQuestionIndex === 9 ? (
          <button onClick={handleFinalSubmit}>Submit Quiz</button> // Submit at the final question
        ) : (
          <button onClick={handleNext}>Next and Save</button>
        )}
      </div>

      <div className="marked_questions">
        {markedForReview.includes(currentQuestionIndex) && <span style={{ color: "red" }}>Marked for Review</span>}
      </div>
    </>
  );
};

export default Quiz;
