"use client"; 
import BackButton from '../components/BackButton';

import { useEffect, useState } from 'react';

export default function Results() {
  const [resultName, setResultName] = useState('');
  const [resultPoints, setResultPoints] = useState('');

  useEffect(() => {
    // This function runs when the component mounts
    if (typeof window !== "undefined") {
      const bestBundle = JSON.parse(localStorage.getItem('bestBundle'));
      if (bestBundle) {
        setResultName(`${bestBundle.bundle}`);
        setResultPoints(`${bestBundle.points}`)

        // Clear the bestBundle from local storage since it's no longer needed
        localStorage.removeItem('bestBundle');
      }
    }
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 text-dark-purple">
      <BackButton />
      <div className="flex-grow flex flex-col items-center justify-center">
        <div className="text-center font-recoleta text-8xl z-10 mb-2">
          <span>{resultName || 'Loading...'}</span>
        </div>
        <div className="text-center font-recoleta text-2xl mb-6">
          {resultPoints ? `${resultPoints} points` : ""}
        </div>
      </div>
    </main>
  )
}
