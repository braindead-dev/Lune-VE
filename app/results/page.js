"use client"; 
import BackButton from '../components/BackButton';
import Main from '../components/Main';
import { FiArrowRight } from 'react-icons/fi';

import { useEffect, useState } from 'react';

const resultInfo = [
  {
    resultId: "stress-relief",
    type: "Stress-Relief Seeker",
    description: "You've mastered the art of carrying the world on your shoulders, but at night, it's time to set it down. As a Stress-Relief Seeker, your mind races with the echoes of the day's hustle, making tranquility elusive. Embrace the calm you deserve with our Stress-Relief Bundle.",
    bundle: "Our Stress-Relief Bundle, infused with chamomile and lemon balm teas and complemented by CBD and magnesium glycinate, is designed to smooth out life's ripples, allowing you to drift into serene slumbers. Lavender-scented relaxation awaits you, complete with bath salts and pillow sprays, crowned with a weighted blanket to wrap stress away."
  },
  {
    resultId: "deep-diver",
    type: "Deep Diver",
    description: "To you, every night is a journey to the depths of restful oblivion, but sometimes, you find the waters too shallow. As a Deep Diver, your quest for profound sleep is paramount, seeking to emerge each morning refreshed and renewed.",
    bundle: "Dive deep into rest with our Deep Diver Bundle. Navigated by the soothing scents of lavender aromatherapy and a tea blend anchored by valerian root, your sleep will be as deep as the ocean. Prepare your senses for the night with blue light blocking glasses and wake to the world reinvigorated."
  },
  {
    resultId: "night-owl",
    type: "Night Owl",
    description: "The clock is no commander to you, and the night is just another realm of your wakefulness. As a Night Owl, your energy peaks when the stars are out, making a regular sleep routine an ally as elusive as the night's end.",
    bundle: "Our Night Owl Bundle syncs with your unique rhythm, bringing order to the nocturnal chaos. Passionflower and lemon verbena teas will be your evening companions, while ginseng and matcha stand ready to invigorate your mornings. Sandalwood and jasmine aromatherapy will ground your evenings, paving the way for restful nights and energetic days."
  },
  {
    resultId: "sensory-seeker",
    type: "Sensory Seeker",
    description: "For you, the line between the world's chaos and the sanctity of sleep is drawn by the senses. As a Sensory Seeker, the perfect symphony of touch, smell, and tranquility is the only ticket to your dreamland.",
    bundle: "Our Sensory Seeker Bundle caters to the connoisseur of comfort that resides in you. The delicate aroma of jasmine and the tactile pleasure of our customized scented drawer liners will transform your bedroom into a haven of sensory delight. A sip of our herbal blend soothes your palate, and 5-HTP and Tryptophan supplements harmonize your mind's melody, inviting sleep with open arms."
  }
];

export default function Results() {
  const [result, setResult] = useState({ type: '', description: '', bundle: '' });

  useEffect(() => {
    // This function runs when the component mounts
    if (typeof window !== "undefined") {
      const storedResult = JSON.parse(localStorage.getItem('bestBundle'));
      if (storedResult) {
        const resultData = resultInfo.find(desc => desc.resultId === storedResult.bundle);

        setResult({
          type: resultData.type,
          description: resultData.description,
          bundle: resultData.bundle
        });

      }
    }
  }, []);

  return (
    <Main>
      <BackButton />
      <div className="flex-grow flex flex-col items-center justify-center">
        {/* Display the result type */}
        <div className="text-center font-recoleta text-8xl z-10 mb-2">
          <span>{result.type || 'Loading...'}</span>
        </div>
        {/* Display the description */}
        <div className="text-center font-recoleta text-2xl mb-6">
          {result.description || ""}
        </div>
        {/* Display the bundle */}
        <div className="text-center font-recoleta text-xl mb-5">
          {result.bundle || ""}
        </div>

        <button
          onClick={() => window.location.href='https://discover.lune-ve.com/soon'}
          className="flex items-center px-6 py-2 rounded-full text-lg cursor-pointer transition-colors duration-300 ease-in-out text-white bg-dark-purple hover:bg-darker-purple"
        >
          Shop Now
          <FiArrowRight className="ml-2" />
        </button>

      </div>
    </Main>
  );
}