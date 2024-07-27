import React from 'react';
import './ResultComponent.css';

interface ResultProps {
  score: number;
  totalQuestions: number;
  onRestart: () => void;
}

const ResultComponent: React.FC<ResultProps> = ({ score, totalQuestions, onRestart }) => {
  return (
    <div className="result">
      <h2>סיימת את המשחק!</h2>
      <p>ציון: {score} מתוך {totalQuestions}</p>
      <button onClick={onRestart}>התחל מחדש</button>
    </div>
  );
};

export default ResultComponent;
