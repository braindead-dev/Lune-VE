import AnswerOptions from './AnswerOptions';

export default function QuestionCard({ question, answers, questionIndex, selectedAnswer, onAnswerChange, isExiting}) {
  
  const animationClass = isExiting ? 'animate-fadeOut' : 'animate-fadeIn';
  
  return (
    <div className={`flex flex-col items-center ${animationClass}`}>
      <div className="w-full md:max-w-xl text-center text-2xl mb-2 px-4">
        <p>{`${questionIndex + 1}. ${question}`}</p>
      </div>
      <div className="w-full md:max-w-md mt-1">
        <AnswerOptions 
          answers={answers} 
          questionIndex={questionIndex} 
          selectedAnswer={selectedAnswer} 
          onAnswerChange={onAnswerChange} 
        />
      </div>
    </div>
  );
}
