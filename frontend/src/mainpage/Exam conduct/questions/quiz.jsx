import React, { useState, useEffect } from "react";
import './quiz.css';
import axios from 'axios';
// import maths from './database/maths';
// import science from './database/science';
// import english from './database/english';
// import general_awareness from './database/gnwn';
import { Link } from "react-router-dom";
export const Quiz = ({email}) => {
  const [english, setEnglish] = useState([]);
  const [general_awareness, setGeneralAwareness] = useState([]);
  const [maths, setMaths] = useState([]);
  const [science, setScience] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/Subjects-data")
      .then(res => {
        setEnglish(res.data[0]);
        setGeneralAwareness(res.data[1]);
        setMaths(res.data[2]);
        setScience(res.data[3]);
      })
      .catch(err => {
        console.log("raledhu");
      });
  }, []); 
  const [currentSection, setCurrentSection] = useState('maths'); // default section
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0); // start from first question
  const [selectedAnswers, setSelectedAnswers] = useState({
    maths: {},
    science: {},
    english: {},
    general_awareness: {},
  }); // store selected answers for each section
  const [markedForReview, setMarkedForReview] = useState({
    maths: [],
    science: [],
    english: [],
    general_awareness: [],
  }); // store questions marked for review per section
  const [answeredQuestions, setAnsweredQuestions] = useState({
    maths: [],
    science: [],
    english: [],
    general_awareness: [],
  }); // store answered questions for each section
  const [timeLeft, setTimeLeft] = useState(90 * 60); // 90 minutes in seconds
    // const navigate = useNavigate();

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(prevTime => {
                if (prevTime <= 0) {
                    clearInterval(timer);
                    alert('Time Up!'); // Alert when time is up
                    // useNavigate('./dashboard'); // Change to your desired path
                    return 0;
                }
                return prevTime - 1;
            });
        }, 1000);

        return () => clearInterval(timer); // Cleanup the timer on component unmount
    }, []);

    const formatTime = (seconds) => {
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const secs = seconds % 60;
        return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };

    const getTimerStyle = () => {
      if (timeLeft <= 300) { // If less than or equal to 5 minutes
          return { color: 'red', fontSize: '2rem' };
      }
      return { color: '#007BFF', fontSize: '2rem' };
  };




  const sections = {
    maths,
    english,
    science,
    general_awareness
  };
  // sections['maths']=maths;
  // sections['english']=english;
  // sections['science']=science;
  // sections['general_awareness']=general_awareness;
  // sections['maths']=maths;
  // console.log(sections);

  const currentQuestions = sections[currentSection];
  const sectionOrder = ['maths', 'science', 'english', 'general_awareness']; // To control the order of sections

  // Handle next question and save
  const handleNext = () => {
    // If there are still questions left in the current section
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

    // Track answered questions, ensuring no duplicate entries
    if (!answeredQuestions[currentSection].includes(currentQuestionIndex)) {
      setAnsweredQuestions({
        ...answeredQuestions,
        [currentSection]: [...answeredQuestions[currentSection], currentQuestionIndex],
      });
    }
  };

  // Handle previous question
  const handlePrev = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  // Handle answer selection, ensure it's specific to the current section
  const handleSelectAnswer = (option) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [currentSection]: {
        ...selectedAnswers[currentSection],
        [currentQuestionIndex]: option,
      },
    });
  };

  // Handle mark as review, ensure it's specific to the current section
  const handleMarkAsReview = () => {
    if (!markedForReview[currentSection].includes(currentQuestionIndex)) {
      setMarkedForReview({
        ...markedForReview,
        [currentSection]: [...markedForReview[currentSection], currentQuestionIndex],
      });
    }
  };

  // Clear selected option
  const handleClear = () => {
    const newSelectedAnswers = { ...selectedAnswers };
    delete newSelectedAnswers[currentSection][currentQuestionIndex];
    setSelectedAnswers(newSelectedAnswers);

    setAnsweredQuestions({
      ...answeredQuestions,
      [currentSection]: answeredQuestions[currentSection].filter(q => q !== currentQuestionIndex),
    });
    setMarkedForReview({
      ...markedForReview,
      [currentSection]: markedForReview[currentSection].filter(q => q !== currentQuestionIndex),
    });
  };

  const handleFinalSubmit = async () => {
    const data = {
      maths: [],
      science: [],
      english: [],
      general_awareness: [],
    };
  
    Object.keys(selectedAnswers).forEach(section => {
      const answers = selectedAnswers[section];
      const totalQuestions = sections[section].length;
  
      // Fill in answers with the corresponding indices
      for (let i = 0; i < totalQuestions; i++) {
        if (answers[i] !== undefined) {
          // If an answer is selected, push it with the index
          data[section].push( answers[i] );
        } else {
          // Unanswered questions can also be handled if necessary
          data[section].push( null ); // or use some default value
        }
      }
    });
  
    console.log('Submitting data:', data); // Log the data being sent
  
    try {
      console.log(email)
      const response = await axios.post("http://localhost:5000/validate-answers", {"data":data,"email":email});
      console.log('Answers validated:', response.data);
    } catch (error) {
      if (error.response) {
        console.error('Server error:', error.response.data);
      } else if (error.request) {
        console.error('Network error: Could not connect to the server.');
      } else {
        console.error('Error:', error.message);
      }
    }
  };
  
  

  return (
    <>
      <div className="quiz_container">
        <div className="question_container_left">
         <div className="question_containerrrrrr">
          <h2 className="quiztejaheader"> {currentSection}</h2>
          <p>{currentQuestions[currentQuestionIndex] ? currentQuestionIndex+1+`.`+currentQuestions[currentQuestionIndex].question : "No question available"}</p>
          <div className="options">
            {currentQuestions[currentQuestionIndex]?.options.length > 0 ? (
              currentQuestions[currentQuestionIndex].options.map((option, idx) => (
                <div key={idx}>
                  <input
                    type="radio"
                    name="answer"
                    checked={selectedAnswers[currentSection][currentQuestionIndex] === option}
                    onChange={() => {
                      handleSelectAnswer(option);  // Handle answer selection
                      console.log(`Section: ${currentSection}, Bit: ${currentQuestionIndex + 1}, Selected Option Index: ${idx + 1}, Selected Answer: ${option}`);  // Print the section, question number, option index, and answer
                    }} 
                  />
                  {option}
                </div>
              ))
            ) : (
              <p>No options available for this question.</p>
            )}
          </div>
          </div>
          
          <div className="Prev_next_markasreview_clear">
        <button className="venkatbutton12" onClick={handlePrev} disabled={currentQuestionIndex === 0}>Previous</button>
        <button className="venkatbutton12" onClick={handleMarkAsReview}>Mark as Review</button>
        <button className="venkatbutton12"onClick={handleClear}>Clear</button>
        {currentSection === 'general_awareness' && currentQuestionIndex === 24 ? (
        <Link  onClick={() => window.alert("Exam is complete, Marks will be sent to your email.")} to="/Examconduct/ArmyExam">  <button className="venkatbutton" onClick={handleFinalSubmit}>Submit Quiz</button> </Link>
        ) : (
          <button className="venkatbutton12" onClick={handleNext}>Next and Save</button>
        )}
         </div>
        


        </div>

        <div className="option_container">
          <div style={{ textAlign: 'center'  }}> <h1 style={getTimerStyle()}>Timer:{formatTime(timeLeft)} </h1>  </div>
          <div className="section_buttons">
            <div className="buttons">
              {sectionOrder.map(section => (
                <button key={section} className={section === currentSection ? 'active' : ''} 
                onClick={() => setCurrentSection(section)}>
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              ))}
            </div>

            <div className="section_options">
              {currentQuestions.map((_, index) => {
                let buttonClass = 'default';
                if (answeredQuestions[currentSection].includes(index)) {
                  buttonClass = 'green';
                }
                if (markedForReview[currentSection].includes(index)) {
                  buttonClass = 'yellow';
                }
                return (
                  <button
                    key={index}
                    className={`${buttonClass} ${currentQuestionIndex === index ? 'active' : ''}`}
                    onClick={() => setCurrentQuestionIndex(index)}
                  >
                    {index + 1}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

     

      <div className="marked_questions">
        {markedForReview[currentSection].includes(currentQuestionIndex) && <span style={{ color: "red" }}>Marked for Review</span>}
      </div>
    </>
  );
}

