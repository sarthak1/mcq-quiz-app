import { useState } from 'react';
import './App.css';

// Sample MCQ data - replace with your actual questions
const mcqData = [
  {
    id: 1,
    question: "fa_ily",
    options: ["n", "m", "l", "r"],
    correctAnswer: "m"
  },
  {
    id: 2,
    question: "fr_end",
    options: ["a", "i", "o", "u"],
    correctAnswer: "i"
  },
  {
    id: 3,
    question: "ne_ghbour",
    options: ["i", "a", "e", "o"],
    correctAnswer: "i"
  },
  {
    id: 4,
    question: "rela_ion",
    options: ["t", "s", "c", "d"],
    correctAnswer: "t"
  },
  {
    id: 5,
    question: "moth_r",
    options: ["e", "o", "u", "a"],
    correctAnswer: "e"
  },
  {
    id: 6,
    question: "f_ther",
    options: ["a", "e", "i", "o"],
    correctAnswer: "a"
  },
  {
    id: 7,
    question: "gra_dfather",
    options: ["n", "m", "p", "t"],
    correctAnswer: "n"
  },
  {
    id: 8,
    question: "gr_ndmother",
    options: ["a", "u", "e", "o"],
    correctAnswer: "a"
  },
  {
    id: 9,
    question: "unc_e",
    options: ["l", "k", "m", "n"],
    correctAnswer: "l"
  },
  {
    id: 10,
    question: "a_nt",
    options: ["e", "i", "a", "u"],
    correctAnswer: "u"
  },
  {
    id: 11,
    question: "cous_n",
    options: ["a", "e", "i", "o"],
    correctAnswer: "i"
  },
  {
    id: 12,
    question: "bo_ght",
    options: ["u", "a", "o", "e"],
    correctAnswer: "u"
  },
  {
    id: 13,
    question: "ho_iday",
    options: ["l", "m", "n", "r"],
    correctAnswer: "l"
  },
  {
    id: 14,
    question: "sto_es",
    options: ["r", "n", "p", "k"],
    correctAnswer: "n"
  },
  {
    id: 15,
    question: "ru_ning",
    options: ["n", "m", "l", "t"],
    correctAnswer: "n"
  },
  {
    id: 16,
    question: "pla_ing",
    options: ["y", "e", "a", "o"],
    correctAnswer: "y"
  },
  {
    id: 17,
    question: "ma_e",
    options: ["d", "k", "p", "t"],
    correctAnswer: "d"
  },
  {
    id: 18,
    question: "g_mes",
    options: ["o", "a", "e", "i"],
    correctAnswer: "a"
  },
  {
    id: 19,
    question: "rel_tive",
    options: ["a", "e", "i", "o"],
    correctAnswer: "a"
  },
  {
    id: 20,
    question: "vi_it",
    options: ["s", "z", "x", "c"],
    correctAnswer: "s"
  },
  {
    id: 21,
    question: "hou_e",
    options: ["s", "c", "z", "k"],
    correctAnswer: "s"
  },
  {
    id: 22,
    question: "co_king",
    options: ["o", "a", "u", "i"],
    correctAnswer: "o"
  },
  {
    id: 23,
    question: "cl_aning",
    options: ["e", "i", "o", "u"],
    correctAnswer: "e"
  },
  {
    id: 24,
    question: "ma_ket",
    options: ["r", "l", "n", "d"],
    correctAnswer: "r"
  },
  {
    id: 25,
    question: "se_ing",
    options: ["w", "e", "a", "i"],
    correctAnswer: "w"
  },
  {
    id: 26,
    question: "me_ding",
    options: ["n", "l", "k", "t"],
    correctAnswer: "n"
  },
  {
    id: 27,
    question: "but_ons",
    options: ["t", "p", "l", "k"],
    correctAnswer: "t"
  },
  {
    id: 28,
    question: "da_aji",
    options: ["d", "n", "b", "g"],
    correctAnswer: "d"
  },
  {
    id: 29,
    question: "lov_",
    options: ["e", "a", "i", "u"],
    correctAnswer: "e"
  },
  {
    id: 30,
    question: "ca_e",
    options: ["r", "t", "m", "n"],
    correctAnswer: "r"
  },
  
    { "id": 1, "question": "fa_ily", "options": ["m", "n", "r", "l"], "correctAnswer": "m" },
    { "id": 2, "question": "frien_s", "options": ["t", "d", "b", "c"], "correctAnswer": "d" },
    { "id": 3, "question": "ch_upan", "options": ["h", "o", "e", "a"], "correctAnswer": "h" },
    { "id": 4, "question": "chu__an-chhupai", "options": ["pp", "kp", "tt", "ll"], "correctAnswer": "pp" },
    { "id": 5, "question": "p_ak-a-boo", "options": ["i", "e", "a", "o"], "correctAnswer": "e" },
    { "id": 6, "question": "fl_wering", "options": ["o", "u", "a", "e"], "correctAnswer": "o" },
    { "id": 7, "question": "neig_bours", "options": ["e", "h", "i", "g"], "correctAnswer": "h" },
    { "id": 8, "question": "rel_tives", "options": ["a", "o", "i", "e"], "correctAnswer": "a" },
    { "id": 9, "question": "shar_", "options": ["e", "a", "o", "u"], "correctAnswer": "e" },
    { "id": 10, "question": "ra_n", "options": ["e", "i", "o", "u"], "correctAnswer": "i" },
    { "id": 11, "question": "pak_das", "options": ["k", "o", "e", "a"], "correctAnswer": "o" },
    { "id": 12, "question": "ant_kshari", "options": ["a", "e", "i", "u"], "correctAnswer": "a" },
    { "id": 13, "question": "sing_ng", "options": ["i", "e", "o", "a"], "correctAnswer": "i" },
    { "id": 14, "question": "D_diji", "options": ["a", "e", "o", "i"], "correctAnswer": "a" },
    { "id": 15, "question": "D_daji", "options": ["a", "e", "o", "u"], "correctAnswer": "a" },
    { "id": 16, "question": "h_uses", "options": ["a", "o", "u", "e"], "correctAnswer": "o" },
    { "id": 17, "question": "ga_den", "options": ["r", "l", "t", "d"], "correctAnswer": "r" },
    { "id": 18, "question": "veget_bles", "options": ["i", "a", "e", "o"], "correctAnswer": "a" },
    { "id": 19, "question": "clea_ing", "options": ["r", "n", "t", "v"], "correctAnswer": "n" },
    { "id": 20, "question": "co_king", "options": ["o", "u", "a", "e"], "correctAnswer": "o" },
    { "id": 21, "question": "br_in", "options": ["a", "e", "o", "u"], "correctAnswer": "a" },
    { "id": 22, "question": "shopp_ng", "options": ["e", "i", "a", "u"], "correctAnswer": "i" },
    { "id": 23, "question": "rango_i", "options": ["l", "e", "o", "a"], "correctAnswer": "l" },
    { "id": 24, "question": "col_urs", "options": ["o", "e", "a", "u"], "correctAnswer": "o" },
    { "id": 25, "question": "anim_ls", "options": ["a", "o", "e", "i"], "correctAnswer": "a" },
    { "id": 26, "question": "sh_ru", "options": ["i", "e", "a", "u"], "correctAnswer": "i" },
    { "id": 27, "question": "ch_pping", "options": ["o", "a", "e", "u"], "correctAnswer": "o" },
    { "id": 28, "question": "lau_gh", "options": ["g", "k", "t", "d"], "correctAnswer": "g" },
    { "id": 29, "question": "shel_er", "options": ["t", "d", "p", "k"], "correctAnswer": "t" },
    { "id": 30, "question": "talk_ng", "options": ["i", "o", "a", "e"], "correctAnswer": "i" }
  
  
]
;

function App() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');
  const [score, setScore] = useState(0);
  const [attempts, setAttempts] = useState(0);
  const [feedback, setFeedback] = useState('');
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [showAnswers, setShowAnswers] = useState(false);
  const [userAnswers, setUserAnswers] = useState({});
  const [questionAttempts, setQuestionAttempts] = useState({});

  const currentQuestion = mcqData[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === mcqData.length - 1;

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setFeedback('');
  };

  const updateUserAnswer = (questionId, selectedOption, isCorrect) => {
    setUserAnswers(prev => ({
      ...prev,
      [questionId]: {
        selectedOption,
        isCorrect,
        question: mcqData.find(q => q.id === questionId)?.question || '',
        options: mcqData.find(q => q.id === questionId)?.options || [],
        correctAnswer: mcqData.find(q => q.id === questionId)?.correctAnswer || ''
      }
    }));
  };

  const updateQuestionAttempts = (questionId) => {
    setQuestionAttempts(prev => ({
      ...prev,
      [questionId]: (prev[questionId] || 0) + 1
    }));
  };

  const checkAnswer = () => {
    if (selectedOption === '') {
      setFeedback('Please select an option');
      return;
    }

    setAttempts(prev => prev + 1);

    const isCorrect = selectedOption === currentQuestion.correctAnswer;
    updateUserAnswer(currentQuestion.id, selectedOption, isCorrect);
    updateQuestionAttempts(currentQuestion.id);

    if (isCorrect) {
      setScore(prev => prev + 1);
      setFeedback('सही उत्तर! बहुत अच्छे!');
      setSelectedOption('');
      setAttempts(0);
      
      if (isLastQuestion) {
        setQuizCompleted(true);
      } else {
        setTimeout(() => {
          setCurrentQuestionIndex(prev => prev + 1);
          setFeedback('');
        }, 1000);
      }
    } else {
      // Incorrect answer
      if (attempts >= 1) {
        // Max attempts reached
        setFeedback(`गलत उत्तर. सही उत्तर है: ${currentQuestion.correctAnswer}`);
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

  const restartQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedOption('');
    setScore(0);
    setAttempts(0);
    setFeedback('');
    setQuizCompleted(false);
    setShowAnswers(false);
    setUserAnswers({});
    setQuestionAttempts({});
  };

  const toggleShowAnswers = () => {
    setShowAnswers(!showAnswers);
  };

  const renderAnswerSummary = () => (
    <div className="answer-summary">
      <h3>विस्तृत उत्तर समीक्षा</h3>
      {mcqData.map((q) => {
        const userAnswer = userAnswers[q.id];
        const attempts = questionAttempts[q.id] || 0;
        const isCorrect = userAnswer?.isCorrect;
        
        return (
          <div key={q.id} className={`answer-item ${isCorrect ? 'correct' : 'incorrect'}`}>
            <p className="question-text"><strong>प्रश्न {q.id}:</strong> {q.question}</p>
            <div className="options-container">
              <p><strong>विकल्प:</strong></p>
              <ul className="options-list">
                {q.options.map((option, idx) => (
                  <li 
                    key={idx} 
                    className={`option 
                      ${option === q.correctAnswer ? 'correct-option' : ''}
                      ${userAnswer?.selectedOption === option ? 'user-selected' : ''}
                    `}
                  >
                    {option}
                  </li>
                ))}
              </ul>
            </div>
            <div className="answer-details">
              <p><strong>आपका उत्तर:</strong> <span className={isCorrect ? 'correct-text' : 'incorrect-text'}>
                {userAnswer?.selectedOption || 'कोई उत्तर नहीं दिया'}
              </span></p>
              <p><strong>प्रयास:</strong> {attempts}</p>
              {!isCorrect && <p><strong>सही उत्तर:</strong> <span className="correct-text">{q.correctAnswer}</span></p>}
              <p className={`status ${isCorrect ? 'correct-text' : 'incorrect-text'}`}>
                {isCorrect ? 'सही उत्तर!' : 'गलत उत्तर'}
              </p>
            </div>
          </div>
        );
      })}
      <button onClick={toggleShowAnswers} className="btn">उत्तर छिपाएं</button>
    </div>
  );

  if (quizCompleted) {
    return (
      <div className="quiz-container">
        <h2>क्विज़ पूरा हुआ!</h2>
        <p>आपका स्कोर: {score} / {mcqData.length}</p>
        <p>प्रतिशत: {Math.round((score / mcqData.length) * 100)}%</p>
        {!showAnswers && (
          <button onClick={toggleShowAnswers} className="btn">सही उत्तर देखें</button>
        )}
        {showAnswers && renderAnswerSummary()}
        <button onClick={restartQuiz} className="btn">फिर से शुरू करें</button>
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
