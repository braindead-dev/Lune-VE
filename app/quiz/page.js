import Image from 'next/image'
import Link from 'next/link'
import BackButton from '../components/BackButton';
import GenericCards from '../components/GenericCards';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 text-dark-purple">
      <BackButton />
      <div className="flex-grow flex flex-col items-center justify-center">
        <div className="text-center font-recoleta text-8xl z-10 mb-3">
          <span>Sleep Quiz</span>
        </div>
        <div className="text-center font-recoleta text-2xl">
          Discover your sleep type with our short quiz!
        </div>
      </div>
            
    </main>
  )
}
