import { useState } from 'react';
import './App.css';

// Sample MCQ data - replace with your actual questions
const mcqData = [
  { "id": 1, "question": "me_a", "options": ["e", "i", "l", "o"], "correctAnswer": "l" },
  { "id": 2, "question": "e_citement", "options": ["k", "x", "s", "z"], "correctAnswer": "x" },
  { "id": 3, "question": "bu_", "options": ["s", "z", "c", "x"], "correctAnswer": "s" },
  { "id": 4, "question": "re_uest", "options": ["q", "k", "g", "c"], "correctAnswer": "q" },
  { "id": 5, "question": "le_s", "options": ["g", "z", "d", "b"], "correctAnswer": "g" },
  { "id": 6, "question": "neig_bours", "options": ["h", "g", "b", "j"], "correctAnswer": "h" },
  { "id": 7, "question": "tr_in", "options": ["a", "e", "i", "o"], "correctAnswer": "a" },
  { "id": 8, "question": "w_ter", "options": ["o", "a", "u", "e"], "correctAnswer": "a" },
  { "id": 9, "question": "tick_ts", "options": ["i", "e", "a", "o"], "correctAnswer": "e" },
  { "id": 10, "question": "safe_y", "options": ["f", "v", "p", "l"], "correctAnswer": "t" },
  { "id": 11, "question": "wh_elchair", "options": ["i", "e", "o", "a"], "correctAnswer": "e" },
  { "id": 12, "question": "p_lce", "options": ["a", "o", "u", "e"], "correctAnswer": "o" },
  { "id": 13, "question": "ma_ic", "options": ["j", "g", "k", "z"], "correctAnswer": "g" },
  { "id": 14, "question": "ha_ds", "options": ["n", "m", "r", "l"], "correctAnswer": "n" },
  { "id": 15, "question": "del_cious", "options": ["e", "i", "a", "o"], "correctAnswer": "i" },
  { "id": 16, "question": "du_tbin", "options": ["s", "z", "c", "b"], "correctAnswer": "s" },
  { "id": 17, "question": "p_pets", "options": ["u", "o", "a", "i"], "correctAnswer": "u" },
  { "id": 18, "question": "spinni_g", "options": ["n", "m", "l", "r"], "correctAnswer": "n" },
  { "id": 19, "question": "ph_rkis", "options": ["i", "u", "e", "a"], "correctAnswer": "i" },
  { "id": 20, "question": "gi_nt", "options": ["e", "o", "a", "u"], "correctAnswer": "a" },
  { "id": 21, "question": "m_rry-go-round", "options": ["e", "a", "o", "i"], "correctAnswer": "e" },
  { "id": 22, "question": "trink_ts", "options": ["e", "a", "o", "i"], "correctAnswer": "e" },
  { "id": 23, "question": "ja_ebis", "options": ["l", "r", "n", "s"], "correctAnswer": "l" },
  { "id": 24, "question": "kul_i", "options": ["f", "p", "m", "l"], "correctAnswer": "f" },
  { "id": 25, "question": "cha_t", "options": ["a", "u", "i", "e"], "correctAnswer": "a" },
  { "id": 26, "question": "cha_cha", "options": ["c", "s", "k", "z"], "correctAnswer": "c" },
  { "id": 27, "question": "bo_th", "options": ["o", "u", "a", "e"], "correctAnswer": "o" },
  { "id": 28, "question": "volu_teers", "options": ["n", "m", "r", "d"], "correctAnswer": "n" },
  { "id": 29, "question": "f_stival", "options": ["e", "a", "i", "u"], "correctAnswer": "e" },
  { "id": 30, "question": "ma_kind", "options": ["m", "e", "d", "n"], "correctAnswer": "n" },
  
    { "id": 1, "question": "ja_a", "options": ["b", "a", "c", "v"], "correctAnswer": "v" },
    { "id": 2, "question": "me_a", "options": ["l", "n", "r", "d"], "correctAnswer": "l" },
    { "id": 3, "question": "po_ice", "options": ["l", "r", "t", "s"], "correctAnswer": "l" },
    { "id": 4, "question": "bo_th", "options": ["o", "u", "a", "i"], "correctAnswer": "o" },
    { "id": 5, "question": "do_", "options": ["g", "t", "n", "d"], "correctAnswer": "g" },
    { "id": 6, "question": "to_s", "options": ["y", "e", "a", "u"], "correctAnswer": "y" },
    { "id": 7, "question": "ga_es", "options": ["m", "n", "r", "v"], "correctAnswer": "m" },
    { "id": 8, "question": "rid_s", "options": ["e", "a", "o", "i"], "correctAnswer": "e" },
    { "id": 9, "question": "mag_c", "options": ["i", "e", "a", "o"], "correctAnswer": "i" },
    { "id": 10, "question": "sho_", "options": ["w", "p", "t", "n"], "correctAnswer": "w" },
    { "id": 11, "question": "foo_", "options": ["d", "t", "g", "k"], "correctAnswer": "d" },
    { "id": 12, "question": "cra_t", "options": ["f", "p", "s", "v"], "correctAnswer": "f" },
    { "id": 13, "question": "baz__", "options": ["a", "e", "o", "aa"], "correctAnswer": "a" },
    { "id": 14, "question": "la__u", "options": ["l", "r", "m", "n"], "correctAnswer": "l" },
    { "id": 15, "question": "hal_a_", "options": ["w", "v", "r", "b"], "correctAnswer": "w" },
    { "id": 16, "question": "mat_a", "options": ["k", "d", "g", "s"], "correctAnswer": "k" },
    { "id": 17, "question": "ku__i", "options": ["l", "m", "r", "s"], "correctAnswer": "l" },
    { "id": 18, "question": "f__e", "options": ["i", "r", "o", "a"], "correctAnswer": "i" },
    { "id": 19, "question": "ambu_a_ce", "options": ["l", "r", "n", "p"], "correctAnswer": "l" },
    { "id": 20, "question": "vo__nteer", "options": ["l", "u", "o", "i"], "correctAnswer": "l" },
    { "id": 21, "question": "me_e_di", "options": ["h", "l", "n", "t"], "correctAnswer": "h" },
    { "id": 22, "question": "pu__eteer", "options": ["p", "r", "n", "m"], "correctAnswer": "p" },
    { "id": 23, "question": "ba__gle", "options": ["n", "d", "n", "g"], "correctAnswer": "n" },
    { "id": 24, "question": "li__rary", "options": ["b", "d", "f", "g"], "correctAnswer": "b" },
    { "id": 25, "question": "ba_k", "options": ["n", "m", "s", "d"], "correctAnswer": "n" },
    { "id": 26, "question": "sc_oo_", "options": ["h, l", "k, l", "h, m", "r, t"], "correctAnswer": "h, l" },
    { "id": 27, "question": "po_t", "options": ["s", "t", "n", "l"], "correctAnswer": "s" },
    { "id": 28, "question": "g_ound", "options": ["r", "l", "m", "n"], "correctAnswer": "r" },
    { "id": 29, "question": "par_de", "options": ["a", "o", "e", "u"], "correctAnswer": "a" },
    { "id": 30, "question": "sa_ety", "options": ["f", "p", "v", "t"], "correctAnswer": "f" }
  
  
];

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
