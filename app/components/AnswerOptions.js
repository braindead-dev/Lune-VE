export default function AnswerOptions({ answers, questionIndex, selectedAnswer, onAnswerChange }) {
    return (
      <>
        {answers.map((answer, index) => (
          <div key={index} className="text-left">
            <label>
              <input 
                type="radio" 
                name={`question-${questionIndex}`} 
                value={answer}
                onChange={onAnswerChange}
                checked={selectedAnswer === answer}
              />
              {` ${answer}`}
            </label>
          </div>
        ))}
      </>
    );
  }
  