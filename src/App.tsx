import React, { useState } from 'react';
import QuestionComponent from './components/QuestionComponent/QuestionComponent';
import ResultComponent from './components/ResultComponent/ResultComponent';
import './App.css';
import questionsGrades1To3 from './Data/questionsGrades1To3';
import questionsGrades4To6 from './Data/questionsGrades4To6';





const App: React.FC = () => {
  const [gradeGroup, setGradeGroup] = useState<'1-3' | '4-6' | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [showResult, setShowResult] = useState<boolean>(false);

  const questions = gradeGroup === '1-3' ? questionsGrades1To3 : questionsGrades4To6;

  const handleAnswer = (isCorrect: boolean) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    const nextQuestionIndex = currentQuestionIndex + 1;
    if (nextQuestionIndex < questions.length) {
      setCurrentQuestionIndex(nextQuestionIndex);
    } else {
      setShowResult(true);
    }
  };

  const handleRestart = () => {
    setGradeGroup(null);
    setCurrentQuestionIndex(0);
    setScore(0);
    setShowResult(false);
  };

  return (
    <div className="app">
      {!gradeGroup && (
        <div>
          <h1>ברוכים הבאים למשחק הטריוויה!</h1>
          <button onClick={() => setGradeGroup('1-3')}>כיתות א-ג</button>
          <button onClick={() => setGradeGroup('4-6')}>כיתות ד-ו</button>
        </div>
      )}
      {gradeGroup && !showResult && (
        <QuestionComponent
          question={questions[currentQuestionIndex]}
          onAnswer={handleAnswer}
          index={currentQuestionIndex+1}
        />
      )}
      {showResult && (
        <ResultComponent
          score={score}
          totalQuestions={questions.length}
          onRestart={handleRestart}
        />
      )}
    </div>
  );
};

export default App;
