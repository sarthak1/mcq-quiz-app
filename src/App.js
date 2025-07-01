import { useState } from 'react';
import './App.css';

// Sample MCQ data - replace with your actual questions
const mcqData = [
  {
    id: 1,
    question: 'What is the capital of France?',
    options: ['London', 'Berlin', 'Paris', 'Madrid'],
    correctAnswer: 'Paris'
  },
  {
    id: 2,
    question: 'Which planet is known as the Red Planet?',
    options: ['Venus', 'Mars', 'Jupiter', 'Saturn'],
    correctAnswer: 'Mars'
  },
  {
    id: 3,
    question: 'What is 2 + 2?',
    options: ['3', '4', '5', '6'],
    correctAnswer: '4'
  }
];

function App() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');
  const [score, setScore] = useState(0);
  const [attempts, setAttempts] = useState(0);
  const [feedback, setFeedback] = useState('');
  const [quizCompleted, setQuizCompleted] = useState(false);

  const currentQuestion = mcqData[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === mcqData.length - 1;

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setFeedback('');
  };

  const checkAnswer = () => {
    if (selectedOption === '') {
      setFeedback('Please select an option');
      return;
    }

    setAttempts(prev => prev + 1);

    if (selectedOption === currentQuestion.correctAnswer) {
      // Correct answer
      setScore(prev => prev + 1);
      setFeedback('Correct! Well done!');
      
      // Move to next question after a short delay
      setTimeout(() => {
        if (isLastQuestion) {
          setQuizCompleted(true);
        } else {
          setCurrentQuestionIndex(prev => prev + 1);
          setSelectedOption('');
          setAttempts(0);
        }
      }, 1000);
    } else {
      // Incorrect answer
      if (attempts >= 1) {
        // Max attempts reached
        setFeedback(`Incorrect. The correct answer is: ${currentQuestion.correctAnswer}`);
        
        // Move to next question after a short delay
        setTimeout(() => {
          if (isLastQuestion) {
            setQuizCompleted(true);
          } else {
            setCurrentQuestionIndex(prev => prev + 1);
            setSelectedOption('');
            setAttempts(0);
          }
        }, 1500);
      } else {
        // Allow another attempt
        setFeedback('Incorrect. Try again!');
        setSelectedOption('');
      }
    }
  };

  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedOption('');
    setScore(0);
    setAttempts(0);
    setFeedback('');
    setQuizCompleted(false);
  };

  if (quizCompleted) {
    return (
      <div className="app">
        <div className="quiz-container">
          <h1>Quiz Completed!</h1>
          <h2>Your Score: {score} out of {mcqData.length}</h2>
          <p>Percentage: {Math.round((score / mcqData.length) * 100)}%</p>
          <button onClick={resetQuiz} className="retry-btn">Restart Quiz</button>
        </div>
      </div>
    );
  }

  return (
    <div className="app">
      <div className="quiz-container">
        <div className="progress">
          Question {currentQuestionIndex + 1} of {mcqData.length}
        </div>
        <div className="score">Score: {score}</div>
        
        <div className="question-container">
          <h2>{currentQuestion.question}</h2>
          <div className="options">
            {currentQuestion.options.map((option, index) => (
              <div 
                key={index} 
                className={`option ${selectedOption === option ? 'selected' : ''}`}
                onClick={() => handleOptionSelect(option)}
              >
                {option}
              </div>
            ))}
          </div>
          
          {feedback && <div className={`feedback ${feedback.includes('Correct') ? 'correct' : 'incorrect'}`}>
            {feedback}
          </div>}
          
          <button 
            onClick={checkAnswer} 
            className="submit-btn"
            disabled={!selectedOption}
          >
            {attempts === 0 ? 'Submit' : 'Next'}
          </button>
          
          <div className="attempts">
            Attempts remaining: {2 - attempts}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
