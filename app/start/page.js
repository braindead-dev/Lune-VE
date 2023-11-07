import Image from 'next/image';
import Link from 'next/link';
import BackButton from '../components/BackButton';
import GenericCards from '../components/GenericCards';
import { FiArrowRight } from 'react-icons/fi'; 

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 text-dark-purple">
      <BackButton />
      <div className="flex-grow flex flex-col items-center justify-center">
        <div className="text-center font-recoleta text-8xl z-10 mb-2">
          <span>Sleep Quiz</span>
        </div>
        <div className="text-center font-recoleta text-2xl mb-6">
          Discover your sleep type with our short quiz!
        </div>

        <Link href="/quiz">
          <button
            className="flex items-center px-6 py-2 rounded-full text-lg cursor-pointer transition-colors duration-300 ease-in-out text-white bg-dark-purple hover:bg-darker-purple"
          >
            Take the Quiz
            <FiArrowRight className="ml-2" />
          </button>
        </Link>
        
      </div>
    </main>
  )
}
