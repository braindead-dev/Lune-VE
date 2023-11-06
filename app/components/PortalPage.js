import Image from 'next/image'
import Link from 'next/link'
import GenericCards from '/components/GenericCards';

export default function Home({ title, subtitle, imageLink, altText }) {

  if (imageLink) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24 text-dark-purple">
        <div className="flex-grow flex flex-col justify-center mb-8 relative">
          <div className="absolute inset-0 before:absolute after:absolute after:h-[300px] after:w-[300px] after:translate-x-1/5 after:bg-gradient-conic after:from-yellow-50 after:via-purple-100 after:blur-2xl after:content-[''] z-[-1] whitespace-nowrap"></div>
          <div className="flex items-center font-recoleta text-8xl justify-center z-10 relative">
            <span className="mr-4">{title}</span>
            <Image src={imageLink} alt={altText} width={100} height={100} />
          </div>
          <div className="font-recoleta text-2xl whitespace-nowrap">
            {subtitle}
          </div>
        </div>
        
        <GenericCards></GenericCards>
      
      </main>

    )
  }

  else {
    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24 text-dark-purple">
      <div className="flex-grow flex flex-col justify-center mb-8 relative">
        <div className="absolute inset-0 before:absolute after:absolute after:h-[300px] after:w-[300px] after:translate-x-1/5 after:bg-gradient-conic after:from-yellow-50 after:via-purple-100 after:blur-2xl after:content-[''] z-[-1] whitespace-nowrap"></div>
        <div className="flex items-center font-recoleta text-8xl justify-center z-10 relative">
          <span className="mr-4">{title}</span>
        </div>
        <div className="font-recoleta text-2xl whitespace-nowrap">
          {subtitle}
        </div>
      </div>
      
      <GenericCards></GenericCards>
    
      </main>
    )
  }
}
