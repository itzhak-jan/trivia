import React, { useState } from 'react';
//import  currentQuestionIndex from '../../App';
import questionsGrades4To6 from '../../Data/questionsGrades4To6'
import './QuestionComponent.css'; // ייבא את קובץ ה-CSS החדש

interface QuestionProps {
  question: {
    question: string;
    options: string[];
    correctAnswer: string;
    explanation: string;
  };
  onAnswer: (isCorrect: boolean) => void;
  index: Number;
}

const QuestionComponent: React.FC<QuestionProps> = ({ question, onAnswer, index }) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [showFeedback, setShowFeedback] = useState<boolean>(false);
  const [feedback, setFeedback] = useState<string>('');

  const handleOptionClick = (option: string) => {
    if (selectedOption == null) {
      setSelectedOption(option);
      const isCorrect = option == question.correctAnswer;
      setFeedback(isCorrect ? 'נכון!' : `לא נכון. ${question.explanation}`);
      setShowFeedback(true);
    }
  };

  const handleNextQuestion = () => {
    setShowFeedback(false);
    onAnswer(selectedOption == question.correctAnswer);
    setSelectedOption(null);
    setFeedback('');
  };

  return (
    <div className="question">
      <p>שאלה {index.toString()} מתוך {questionsGrades4To6.length}</p>
      <h2>{question.question}</h2>
      <div className="options">
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleOptionClick(option)}
            className={`option-button ${selectedOption == option ? 'selected' : ''} ${showFeedback ? (option == question.correctAnswer ? 'correct' : 'incorrect') : ''}`}
            disabled={showFeedback} // מנע לחיצות נוספות בזמן ש-feedback מוצג
          >
            {option}
          </button>
        ))}
      </div>
      {showFeedback && (
        <div className="feedback">
          {feedback}
          <br></br>
          <button onClick={handleNextQuestion} className="option-button  correct">
            לשאלה הבאה
          </button>
        </div>
      )}
    </div>
  );
};

export default QuestionComponent;
