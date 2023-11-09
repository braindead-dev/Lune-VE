import AnswerOptions from './AnswerOptions';

export default function QuestionCard({ question, answers, questionIndex, selectedAnswer, onAnswerChange }) {
  return (
    <div className="text-center text-2xl mb-3">
      <p>{`${questionIndex + 1}. ${question}`}</p>
      <div className="mt-4">
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