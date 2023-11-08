"use client"; 

import Image from 'next/image'
import { useState } from 'react';
import { HiArrowNarrowLeft, HiArrowNarrowRight } from 'react-icons/hi';
import PageHeader from '../components/PageHeader';
import ProgressBar from '../components/ProgressBar';

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

const UpArrow = () => (
  <svg height="9" width="14" viewBox="0 0 14 9">
    <path d="M11.996 8.121l1.414-1.414L6.705 0 0 6.707l1.414 1.414 5.291-5.293z" fill="currentColor"></path>
  </svg>
);

const DownArrow = () => (
  <svg height="9" width="14" viewBox="0 0 14 9">
    <path d="M12.293.293l1.414 1.414L7 8.414.293 1.707 1.707.293 7 5.586z" fill="currentColor"></path>
  </svg>
);

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
    <>
      <main className="flex min-h-screen flex-col items-center justify-between pt-6 px-40 text-dark-purple">
        <ProgressBar percentage={progressPercentage} />
  
        <div className="flex-grow flex flex-col items-center justify-center">
          <div className="text-center text-2xl mb-3">
            <p>{`${currentQuestionIndex + 1}. ${questions[currentQuestionIndex]}`}</p>
          </div>
        </div>
  
        <div className="w-full px-8 py-4 flex justify-between items-center fixed bottom-0 left-0 right-0 bg-white">
          <div className="flex flex-col items-center">
            <button
              onClick={handleBack}
              className="text-dark-purple hover:text-darker-purple"
              disabled={currentQuestionIndex === 0}
              aria-label="Previous question"
            >
              <UpArrow />
            </button>
            <button
              onClick={handleNext}
              className="text-dark-purple hover:text-darker-purple"
              disabled={currentQuestionIndex === totalQuestions - 1}
              aria-label="Next question"
            >
              <DownArrow />
            </button>
          </div>
        </div>
      </main>
    </>
  );
  
}
