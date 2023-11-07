"use client"; 

import { useState } from 'react';
import { HiArrowNarrowLeft, HiArrowNarrowRight } from 'react-icons/hi';

const questions = [
  "How often do you have trouble sleeping?",
  "How often do you engage in regular exercise?",
  "When you have trouble sleeping, which is most likely to be the reason?",
  "Which situation do you imagine would allow you to enjoy the most restful sleep?",
  "How do you usually feel after a long day of work or study?",
  "How satisfied are you with the depth and quality of your sleep?",
  "How consistent is your bedtime routine?",
  "How sensitive are you to the environment in your bedroom when trying to fall asleep?"
];

const totalQuestions = questions.length;

export default function Quiz() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const handleNext = () => {
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handleBack = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const progressPercentage = (currentQuestionIndex / (totalQuestions - 1)) * 100;

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 text-dark-purple">
      <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 mb-4">
        <div className="bg-dark-purple h-2.5 rounded-full" style={{ width: `${progressPercentage}%` }}></div>
      </div>
      <div className="flex-grow flex flex-col items-center justify-center">
        <div className="text-center font-recoleta text-6xl z-10 mb-3">
          <span>Question {currentQuestionIndex + 1}</span>
        </div>
        <div className="text-center font-bold text-xl mb-3">
          <p>{questions[currentQuestionIndex]}</p>
        </div>
        <div className="flex justify-between w-full max-w-md">
          <button 
            onClick={handleBack}
            className="text-dark-purple hover:text-darker-purple text-4xl"
            disabled={currentQuestionIndex === 0}
          >
            <HiArrowNarrowLeft />
          </button>
          <button 
            onClick={handleNext}
            className="text-dark-purple hover:text-darker-purple text-4xl"
            disabled={currentQuestionIndex === totalQuestions - 1}
          >
            <HiArrowNarrowRight />
          </button>
        </div>
      </div>
    </main>
  );
}
