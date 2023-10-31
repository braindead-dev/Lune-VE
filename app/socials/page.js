import Image from 'next/image'
import Link from 'next/link'

export default function Socials() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24 text-dark-purple">

            <div className="z-10 max-w-5xl w-full items-center justify-start font-semibold text-xl lg:flex">
                <a
                    href="javascript:history.back()"
                    rel="noopener noreferrer"
                >
                    <button
                        className="fixed left-0 top-0 rounded-full border border-gray-300 p-3 flex items-center justify-center bg-gradient-to-b from-zinc-200 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 lg:static lg:rounded-full lg:bg-gray-200 lg:dark:bg-zinc-800/30 font-semibold"
                        style={{ width: '45px', height: '45px' }}
                    >
                        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                            {"<"}-
                        </span>
                    </button>
                </a>
            </div>


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
                <a
                    href="https://instagram.com/lune.sleep"
                    className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 text-dark-purple"
                    rel="noopener noreferrer"
                >
                    <h2 className={`mb-3 text-2xl font-semibold`}>
                        Instagram{' '}
                        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                        -&gt;
                        </span>
                    </h2>
                    <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                        Bedtime routines, the science of sleep, and our newest products 📸
                    </p>
                </a>
    
                <a
                    href="https://tiktok.com/@lune.sleep"
                    className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 text-dark-purple"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <h2 className={`mb-3 text-2xl font-semibold`}>
                        TikTok{' '}
                        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                        -&gt;
                        </span>
                    </h2>
                    <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                        Behind-the-scenes moments, skits, and quick sleep tips 🤳
                    </p>
                </a>
        
                <a
                    href="https://twitter.com/lune_sleep"
                    className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 text-dark-purple"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <h2 className={`mb-3 text-2xl font-semibold`}>
                        Twitter{' '}
                        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                        -&gt;
                        </span>
                    </h2>
                    <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                        The latest updates, sleep research, and conversations about rest 🧪
                    </p>
                </a>
            </div>
        </main>
      )
}
