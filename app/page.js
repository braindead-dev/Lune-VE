import Image from 'next/image'
import Link from 'next/link'
import GenericCards from './components/GenericCards';
import Main from './components/Main';

export default function Home() {
  return (
  
    <Main>

      <div className="flex-grow flex flex-col justify-center mb-8 relative">
        <div className="absolute inset-0 before:absolute after:absolute after:h-[300px] after:w-[300px] after:translate-x-1/5 after:bg-gradient-conic after:from-yellow-50 after:via-purple-100 after:blur-2xl after:content-[''] z-[-1] whitespace-nowrap"></div>
        <div className="flex items-center font-recoleta text-8xl justify-center z-10 relative">
          <span className="mr-4">lune</span>
          <Image src="/images/sheep_logo.png" alt="Sheep Logo" width={110} height={110} />
        </div>
        <div className="font-recoleta text-2xl whitespace-nowrap">
            for a good night, every night.
        </div>
      </div>
      
      <GenericCards></GenericCards>

    </Main>
  )
}
