"use client"; 

import { useRouter } from 'next/router';
import Image from 'next/image'
import { useState } from 'react';
import ProgressBar from '../components/ProgressBar';
import { FiArrowRight } from 'react-icons/fi'; 

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

const mcqAnswers = {
  0: [
    "I rarely have trouble sleeping",
    "A few times a week. Sleep trouble is a familiar occurrence to me",
    "Almost every night; a perfect night's sleep is rare for me"
  ],
  1: [
    "Daily",
    "Several times a week",
    "Occasionally",
    "Rarely or never"
  ],
  2: [
    "Racing thoughts or stress",
    "Difficulty feeling relaxed or physically comfortable",
    "Inability to stay asleep for the whole night",
    "Irregular schedule or sleep time"
  ],
  3: [
    "After a chill day and a calming routine, free from life’s worries",
    "After a day where I felt physically active and spent",
    "Having completed my daily goals, I'm ready for bed at the time I've established for my schedule",
    "In a carefully curated sleep setting that engages my senses pleasantly, like soft bedding and a hint of my favorite scent"
  ],
  4: [
    "Completely relaxed and ready for the evening",
    "Somewhat stressed, but it fades away quickly",
    "Usually carry stress and find it hard to unwind",
    "Often feel overwhelmed and it affects my night routine"
  ],
  5: [
    "I sleep deeply and wake up refreshed",
    "My sleep is adequate but could be deeper",
    "I rarely feel that I have a deep sleep",
    "I struggle to sleep deeply and often wake up tired"
  ],
  6: [
    "Very consistent; I go to bed and wake up at the same time daily",
    "My sleep schedule varies occasionally, but I generally have a routine bedtime",
    "It’s more about when I feel tired rather than a specific schedule or obligations",
    "I often stay up late working or using electronics and have no regular sleep pattern"
  ],
  7: [
    "Not sensitive; I can sleep in any condition",
    "Slightly sensitive to disturbances like light or noise",
    "Quite sensitive; I prefer certain conditions to be just right for a better chance at sleep",
    "Very sensitive; I fine-tune my room's settings to match my preferences, as it significantly enhances my sleep quality",  
  ],

};

const pointsMapping = {
  // Question 3
  "Racing thoughts or stress": { bundle: "Stress-Relief", points: 2 },
  "Difficulty feeling relaxed or physically comfortable": { bundle: "Sensory Seeker", points: 2 },
  "Inability to stay asleep for the whole night": { bundle: "Deep Diver", points: 2 },
  "Irregular schedule or sleep time": { bundle: "Night Owl", points: 2 },

  // Question 4
  "After a chill day and a calming routine, free from life’s worries": { bundle: "Stress-Relief", points: 1 },
  "After a day where I felt physically active and spent": { bundle: "Deep Diver", points: 1 },
  "Having completed my daily goals, I'm ready for bed at the time I've established for my schedule": { bundle: "Night Owl", points: 1 },
  "In a carefully curated sleep setting that engages my senses pleasantly, like soft bedding and a hint of my favorite scent": { bundle: "Sensory Seeker", points: 1 },

  // Question 5
  "Completely relaxed and ready for the evening": { bundle: "Stress-Relief", points: -1 },
  "Usually carry stress and find it hard to unwind": { bundle: "Stress-Relief", points: 1 },
  "Often feel overwhelmed and it affects my night routine": { bundle: "Stress-Relief", points: 2 },

  // Question 6
  "I sleep deeply and wake up refreshed": { bundle: "Deep Diver", points: -1 },
  "I rarely feel that I have a deep sleep": { bundle: "Deep Diver", points: 1 },
  "I struggle to sleep deeply and often wake up tired": { bundle: "Deep Diver", points: 2 },

  // Question 7
  "Very consistent; I go to bed and wake up at the same time daily": { bundle: "Night Owl", points: -1 },
  "It’s more about when I feel tired rather than a specific schedule or obligations": { bundle: "Night Owl", points: 1 },
  "I often stay up late working or using electronics and have no regular sleep pattern": { bundle: "Night Owl", points: 2 },

  // Question 8
  "Not sensitive; I can sleep in any condition": { bundle: "Sensory Seeker", points: -1 },
  "Quite sensitive; I prefer certain conditions to be just right for a better chance at sleep": { bundle: "Sensory Seeker", points: 1 },
  "Very sensitive; I fine-tune my room's settings to match my preferences, as it significantly enhances my sleep quality": { bundle: "Sensory Seeker", points: 2 },

}

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
  const [selectedAnswers, setSelectedAnswers] = useState(Array(totalQuestions).fill(''));
  const [bundlePoints, setBundlePoints] = useState({
    "Stress-Relief": 0,
    "Deep Diver": 0,
    "Night Owl": 0,
    "Sensory Seeker": 0,
  });

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

  const handleAnswerChange = (e, index) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[index] = e.target.value;
    setSelectedAnswers(newAnswers);

    // Calculate the points for this answer
    if (pointsMapping[e.target.value]) {
      const { bundle, points } = pointsMapping[e.target.value];
      setBundlePoints(prevPoints => ({
        ...prevPoints,
        [bundle]: prevPoints[bundle] + points,
      }));
    }
  };

  const handleSubmit = () => {
    // Calculate the total points and determine the bundle
    console.log("Selected Answers: ", selectedAnswers);
    console.log("Bundle Points: ", bundlePoints);

    // Example of determining the bundle
    const highestPoints = Math.max(...Object.values(bundlePoints));
    const bestBundle = Object.keys(bundlePoints).find(key => bundlePoints[key] === highestPoints);
    console.log(`User's best bundle: ${bestBundle} with ${highestPoints} points`);
    
    if (typeof window !== "undefined") { // This checks that window is defined, which means we're in the browser
      localStorage.setItem('bestBundle', JSON.stringify({ bundle: bestBundle, points: highestPoints }));
      // Redirect to the results page
      window.location.href = '/results'; // Change '/results' to the path of your results page
    }
    
  };

  const progressPercentage = (currentQuestionIndex / (totalQuestions - 1)) * 100;

  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between pt-6 px-10 text-dark-purple">
        <ProgressBar percentage={progressPercentage} />
  
        <div className="flex-grow flex flex-col items-center justify-center">
          <div className="text-center text-2xl mb-3">
            <p>{`${currentQuestionIndex + 1}. ${questions[currentQuestionIndex]}`}</p>
            <div className="mt-4">
                {mcqAnswers[currentQuestionIndex].map((answer, index) => (
                <div key={index} className="text-left">
                  <label>
                    <input 
                      type="radio" 
                      name={`question-${currentQuestionIndex}`} 
                      value={answer}
                      onChange={(e) => handleAnswerChange(e, currentQuestionIndex)}
                      checked={selectedAnswers[currentQuestionIndex] === answer}
                    />
                    {` ${answer}`}
                  </label>
                </div>
              ))}
            </div>
          </div>
        
        {currentQuestionIndex === totalQuestions - 1 && (
            <button
              onClick={handleSubmit}
              className="flex items-center px-6 py-2 rounded-full text-lg cursor-pointer transition-colors duration-300 ease-in-out text-white bg-dark-purple hover:bg-darker-purple"
            >
              Submit
              <FiArrowRight className="ml-2" />
            </button>
          )}
        </div>
  
        <div className="w-full px-8 py-4 flex justify-end items-center fixed bottom-0 right-0 bg-white">
          
          <button
            onClick={handleBack}
            className={`${currentQuestionIndex === 0 ? 'text-lighter-purple' : 'text-dark-purple hover:text-darker-purple'} mr-2`}
            disabled={currentQuestionIndex === 0}
            aria-label="Previous question"
          >
            <UpArrow />
          </button>
          <button
            onClick={handleNext}
            className={`${currentQuestionIndex === totalQuestions - 1 ? 'text-lighter-purple' : 'text-dark-purple hover:text-darker-purple'}`}
            disabled={currentQuestionIndex === totalQuestions - 1}
            aria-label="Next question"
          >
            <DownArrow />
          </button>


        </div>

      </main>
    </>
  );

}