import React from 'react';

export default function AnswerOptions({ answers, questionIndex, selectedAnswer, onAnswerChange }) {
  return (
    <div className="flex flex-col items-center"> 
      {answers.map((answer, index) => (
        <div
          key={index}
          className={`p-4 my-1 w-full md:max-w-md text-left text-lg rounded-lg border border-gray-300 cursor-pointer ${selectedAnswer === answer ? 'bg-gray-200' : 'bg-transparent'}`}
          onClick={() => onAnswerChange({ target: { value: answer } }, questionIndex)}
        >
          {answer}
        </div>
      ))}
    </div>
  );
}
