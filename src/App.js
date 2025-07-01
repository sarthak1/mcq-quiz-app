import { useState } from 'react';
import './App.css';

// Sample MCQ data - replace with your actual questions
const mcqData = [
  {
    id: 1,
    question: "कौन सा ग्रह 'लाल ग्रह' के नाम से जाना जाता है?",
    options: ["शुक्र", "मंगल", "बृहस्पति", "शनि"],
    correctAnswer: "मंगल"
  },
  {
    id: 2,
    question: "कविता के अनुसार फूल हमें क्या सिखाते हैं?",
    options: ["नाचना", "हँसना", "खिलना", "रंगीन होना"],
    correctAnswer: "हँसना"
  },
  {
    id: 3,
    question: "कविता में सूरज हमें क्या सिखाता है?",
    options: ["तेज जलना", "प्रतिदिन उगना", "जगना और जगाना", "रात में चमकना"],
    correctAnswer: "जगना और जगाना"
  },
  {
    id: 4,
    question: "विनम्रता हमें किससे सीखनी चाहिए?",
    options: ["सूरज", "पेड़ की झुकी डालियाँ", "चाँद", "नदी"],
    correctAnswer: "पेड़ की झुकी डालियाँ"
  },
  {
    id: 5,
    question: "लता और पेड़ हमें क्या सिखाते हैं?",
    options: ["फल देना", "सबको गले लगाना", "प्राणवायु देना", "ऊँचा होना"],
    correctAnswer: "सबको गले लगाना"
  },
  {
    id: 6,
    question: "दीपक कविता में किसका प्रतीक है?",
    options: ["प्रकाश", "ऊर्जा", "सकारात्मकता", "अंधकार दूर करना"],
    correctAnswer: "अंधकार दूर करना"
  },
  {
    id: 7,
    question: "बहती जलधारा से हमें क्या सीख मिलती है?",
    options: ["तैरना", "पौधे उगाना", "आगे बढ़ना", "स्थिर रहना"],
    correctAnswer: "आगे बढ़ना"
  },
  {
    id: 8,
    question: "पृथ्वी हमें क्या सिखाती है?",
    options: ["दयालुता", "सेवा", "खुशी", "अनुशासन"],
    correctAnswer: "सेवा"
  },
  {
    id: 9,
    question: "दूध और पानी हमें क्या सिखाते हैं?",
    options: ["रंग", "शुद्धता", "मिलन और सरलता", "बहाव"],
    correctAnswer: "मिलन और सरलता"
  },
  {
    id: 10,
    question: "हवा से हमें क्या सीख मिलती है?",
    options: ["उड़ना", "दौड़ना", "कोमल भाव", "तेज़ी"],
    correctAnswer: "कोमल भाव"
  },
  {
    id: 11,
    question: "‘जीवन में सदैव आगे बढ़ना’ कविता की किस पंक्ति से जुड़ा है?",
    options: ["झुकी डालियों से", "जलधारा से", "सूरज की किरणों से", "दीपक से"],
    correctAnswer: "जलधारा से"
  },
  {
    id: 12,
    question: "कविता में गीत गाने की प्रेरणा हमें किससे मिलती है?",
    options: ["सूरज", "हवा", "भौंरा", "चाँद"],
    correctAnswer: "भौंरा"
  },
  {
    id: 13,
    question: "कविता में अंधकार दूर करने वाला कौन है?",
    options: ["पानी", "आग", "सूरज", "दीपक"],
    correctAnswer: "दीपक"
  },
  {
    id: 14,
    question: "झुकी हुई डालियाँ किस गुण का प्रतीक हैं?",
    options: ["प्रसन्नता", "बुद्धि", "विनम्रता", "उदारता"],
    correctAnswer: "विनम्रता"
  },
  {
    id: 15,
    question: "सदैव जगना और जगाना हमें कौन सिखाता है?",
    options: ["तारे", "पहाड़", "सूरज", "नदी"],
    correctAnswer: "सूरज"
  },
  {
    id: 16,
    question: "पृथ्वी किस गुण को दर्शाती है?",
    options: ["दयालुता", "कठोरता", "सेवा भावना", "प्रेम"],
    correctAnswer: "सेवा भावना"
  },
  {
    id: 17,
    question: "कविता में कोमल भाव किससे जुड़े हैं?",
    options: ["साहस", "करुणा", "प्रसन्नता", "कोमलता"],
    correctAnswer: "कोमलता"
  },
  {
    id: 18,
    question: "कविता का मुख्य संदेश क्या है?",
    options: ["शक्ति प्राप्त करना", "प्रकृति से अच्छे गुण सीखना", "अकेले रहना", "धनी बनना"],
    correctAnswer: "प्रकृति से अच्छे गुण सीखना"
  },
  {
    id: 19,
    question: "एकता का पाठ कविता में कौन सिखाते हैं?",
    options: ["नदी और पहाड़", "सूरज और चाँद", "लता और पेड़", "हवा और आकाश"],
    correctAnswer: "लता और पेड़"
  },
  {
    id: 20,
    question: "‘जीवन-पथ में बढ़ना’ किसका प्रतीक है?",
    options: ["जगना और जगाना", "सेवा करना", "आगे बढ़ना", "अंधकार दूर करना"],
    correctAnswer: "आगे बढ़ना"
  },
  {
    id: 21,
    question: "सेवा भावना किससे जुड़ी हुई है?",
    options: ["हवा", "पृथ्वी", "आग", "नदी"],
    correctAnswer: "पृथ्वी"
  },
  {
    id: 22,
    question: "कविता में हवा किस भावना को दर्शाती है?",
    options: ["क्रोध", "चंचलता", "कोमलता", "ऊर्जा"],
    correctAnswer: "कोमलता"
  },
  {
    id: 23,
    question: "‘आनंदमयी कविता’ के कवि कौन हैं?",
    options: ["प्रेमचंद", "महादेवी वर्मा", "श्रीनाथ सिंह", "कबीर"],
    correctAnswer: "श्रीनाथ सिंह"
  },
  {
    id: 24,
    question: "रंग-बिरंगे फूल देखकर मन में कौन-सा भाव आता है?",
    options: ["दुख", "डर", "प्रसन्नता", "आलस्य"],
    correctAnswer: "प्रसन्नता"
  },
  {
    id: 25,
    question: "अंधकार में भी उजाला फैलाने की प्रेरणा किससे मिलती है?",
    options: ["जुगनू", "सूरज", "दीपक", "चाँद"],
    correctAnswer: "दीपक"
  },
  {
    id: 26,
    question: "धैर्य और स्थिरता हमें किससे मिलती है?",
    options: ["नदी", "पेड़", "पहाड़", "तारा"],
    correctAnswer: "पेड़"
  },
  {
    id: 27,
    question: "कविता का मुख्य विषय क्या है?",
    options: ["ग्रहों का विज्ञान", "प्राकृतिक तत्वों से सीख", "भाषा के नियम", "गणितीय तरकीबें"],
    correctAnswer: "प्राकृतिक तत्वों से सीख"
  },
  {
    id: 28,
    question: "कविता हमें किसके जैसा बनने की प्रेरणा देती है?",
    options: ["जानवरों", "मशीनों", "प्रकृति", "वाहनों"],
    correctAnswer: "प्रकृति"
  },
  {
    id: 29,
    question: "कविता का स्वर (tone) क्या है?",
    options: ["क्रोधित", "प्रेरणादायक", "हास्य", "दुखद"],
    correctAnswer: "प्रेरणादायक"
  },
  {
    id: 30,
    question: "नदी कविता में किस भावना का प्रतीक है?",
    options: ["स्थिरता", "डर", "प्रगति", "रूटीन"],
    correctAnswer: "प्रगति"
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
