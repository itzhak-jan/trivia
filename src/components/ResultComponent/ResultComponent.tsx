import React from 'react';

interface ResultProps {
  score: number;
  totalQuestions: number;
  onRestart: () => void;
}

const ResultComponent: React.FC<ResultProps> = ({ score, totalQuestions, onRestart }) => {
  return (
    <div className="result">
      <h2>תוצאה סופית</h2>
      <p>צדקת ב-{score} מתוך {totalQuestions}</p>
      <button onClick={onRestart}>התחל מחדש</button>
    </div>
  );
};

export default ResultComponent;
