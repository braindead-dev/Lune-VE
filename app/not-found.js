import Image from 'next/image'
import Link from 'next/link'
import Card from './components/Card';
import BackButton from './components/BackButton';

export default function Error404() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 text-dark-purple">
      
      <BackButton></BackButton>

      <div className="flex-grow flex flex-col justify-center mb-8 relative">
        <div className="absolute inset-0 before:absolute after:absolute after:h-[300px] after:w-[300px] after:translate-x-1/5 after:bg-gradient-conic after:from-yellow-50 after:via-purple-100 after:blur-2xl after:content-[''] z-[-1] whitespace-nowrap"></div>
        <div className="flex items-center font-recoleta text-7xl justify-center z-10 relative">
          <span className="mr-4">Uh oh...</span>
          <Image src="/images/sheep-example.png" alt="Sheep" width={60} height={60} />
        </div>
        <div className="font-recoleta text-2xl whitespace-nowrap">
            This page couldn't be found :(
        </div>
      </div>
      

      <div className="mb-32 grid text-center z-10 lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-3 lg:text-left">
        <Card href="https://lunesleepsolutions.wixsite.com/lune" title="Shop">
          Explore our official store to discover our newest collection.
        </Card>
        <Card href="https://blog.lune-ve.com" title="Blog">
          Visit the Lune blog for insights, sleep science, and tailored rest tips.
        </Card>
        <Link href="/socials">
          <Card isNextLink title="Socials">
            Join the Lune family and follow us on social media!
          </Card>
        </Link>
      </div>
    </main>
  )
  }