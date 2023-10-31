import Image from 'next/image'
import Link from 'next/link'
import BackButton from '../components/BackButton';
import Card from '../components/Card';

export default function Socials() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24 text-dark-purple">

            <BackButton />

            <div className="flex-grow flex flex-col justify-center mb-8 relative">
                <div className="absolute inset-0 before:absolute after:absolute after:h-[300px] after:w-[300px] after:translate-x-1/5 after:bg-gradient-conic after:from-yellow-50 after:via-purple-100 after:blur-2xl after:content-[''] z-[-1] whitespace-nowrap"></div>
                <div className="flex items-center font-recoleta text-8xl justify-center z-10 relative">
                    <span className="mr-4">Socials</span>
                </div>
                <div className="font-recoleta text-2xl whitespace-nowrap">
                    follow us to join the Lune family!
                </div>
            </div>
          
            <div className="mb-32 grid text-center z-10 lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-3 lg:text-left">
                <Card href="https://instagram.com/lune.sleep" title="Instagram">
                    Bedtime routines, the science of sleep, and our newest products 📸
                </Card>
                <Card href="https://tiktok.com/@lune.sleep" title="TikTok">
                    Behind-the-scenes moments, skits, and quick sleep tips 🤳
                </Card>
                <Card href="https://twitter.com/lune_sleep" title="Twitter">
                    The latest updates, sleep research, and conversations about rest 🧪
                </Card>
            </div>
            
        </main>
      )
}
