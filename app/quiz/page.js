"use client"; 

import Image from 'next/image'
import { useState } from 'react';
import ProgressBar from '../components/ProgressBar';
import QuestionCard from '../components/QuestionCard';
import NavigationButtons from '../components/NavigationButtons'; 
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
  "Racing thoughts or stress": { bundle: "stress-relief", points: 2 },
  "Difficulty feeling relaxed or physically comfortable": { bundle: "sensory-seeker", points: 2 },
  "Inability to stay asleep for the whole night": { bundle: "deep-diver", points: 2 },
  "Irregular schedule or sleep time": { bundle: "night-owl", points: 2 },

  // Question 4
  "After a chill day and a calming routine, free from life’s worries": { bundle: "stress-relief", points: 1 },
  "After a day where I felt physically active and spent": { bundle: "deep-diver", points: 1 },
  "Having completed my daily goals, I'm ready for bed at the time I've established for my schedule": { bundle: "night-owl", points: 1 },
  "In a carefully curated sleep setting that engages my senses pleasantly, like soft bedding and a hint of my favorite scent": { bundle: "sensory-seeker", points: 1 },

  // Question 5
  "Completely relaxed and ready for the evening": { bundle: "stress-relief", points: -1 },
  "Usually carry stress and find it hard to unwind": { bundle: "stress-relief", points: 1 },
  "Often feel overwhelmed and it affects my night routine": { bundle: "stress-relief", points: 2 },

  // Question 6
  "I sleep deeply and wake up refreshed": { bundle: "deep-diver", points: -1 },
  "I rarely feel that I have a deep sleep": { bundle: "deep-diver", points: 1 },
  "I struggle to sleep deeply and often wake up tired": { bundle: "deep-diver", points: 2 },

  // Question 7
  "Very consistent; I go to bed and wake up at the same time daily": { bundle: "night-owl", points: -1 },
  "It’s more about when I feel tired rather than a specific schedule or obligations": { bundle: "night-owl", points: 1 },
  "I often stay up late working or using electronics and have no regular sleep pattern": { bundle: "night-owl", points: 2 },

  // Question 8
  "Not sensitive; I can sleep in any condition": { bundle: "sensory-seeker", points: -1 },
  "Quite sensitive; I prefer certain conditions to be just right for a better chance at sleep": { bundle: "sensory-seeker", points: 1 },
  "Very sensitive; I fine-tune my room's settings to match my preferences, as it significantly enhances my sleep quality": { bundle: "sensory-seeker", points: 2 },

}

const totalQuestions = questions.length;

export default function Quiz() {

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState(Array(totalQuestions).fill(''));
  const [bundlePoints, setBundlePoints] = useState({
    "stress-relief": 0,
    "deep-diver": 0,
    "night-owl": 0,
    "sensory-seeker": 0,
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

    // Set a timeout to automatically go to the next question
    setTimeout(() => {
        if (currentQuestionIndex < totalQuestions - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        }
    }, 500); // Half a second delay
  };

  const handleSubmit = () => {

    // Example of determining the bundle
    const highestPoints = Math.max(...Object.values(bundlePoints));
    const bestBundle = Object.keys(bundlePoints).find(key => bundlePoints[key] === highestPoints);
    
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
          <QuestionCard
            question={questions[currentQuestionIndex]}
            answers={mcqAnswers[currentQuestionIndex]}
            questionIndex={currentQuestionIndex}
            selectedAnswer={selectedAnswers[currentQuestionIndex]}
            onAnswerChange={handleAnswerChange}
          />
        
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
  
        <NavigationButtons
          onBack={handleBack}
          onNext={handleNext}
          isFirst={currentQuestionIndex === 0}
          isLast={currentQuestionIndex === totalQuestions - 1}
        />

      </main>
    </>
  );

}