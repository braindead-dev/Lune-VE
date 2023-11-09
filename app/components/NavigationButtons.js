// NavigationButtons.js
import React from 'react';

const UpArrow = () => (
    <svg height="11" width="17" viewBox="0 0 14 9">
      <path d="M11.996 8.121l1.414-1.414L6.705 0 0 6.707l1.414 1.414 5.291-5.293z" fill="currentColor"></path>
    </svg>
  );
  
  const DownArrow = () => (
    <svg height="11" width="17" viewBox="0 0 14 9">
      <path d="M12.293.293l1.414 1.414L7 8.414.293 1.707 1.707.293 7 5.586z" fill="currentColor"></path>
    </svg>
  );

const NavigationButtons = ({ onBack, onNext, isFirst, isLast }) => {
  return (
    <div className="w-full px-8 py-4 flex justify-end items-center fixed bottom-0 right-0 bg-white">
      <button
        onClick={onBack}
        className={`${isFirst ? 'text-lighter-purple' : 'text-dark-purple hover:text-darker-purple'} mr-2`}
        disabled={isFirst}
        aria-label="Previous question"
      >
        <UpArrow />
      </button>
      <button
        onClick={onNext}
        className={`${isLast ? 'text-lighter-purple' : 'text-dark-purple hover:text-darker-purple'}`}
        disabled={isLast}
        aria-label="Next question"
      >
        <DownArrow />
      </button>
    </div>
  );
};

export default NavigationButtons;
