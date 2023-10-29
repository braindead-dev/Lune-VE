import Image from 'next/image'

export default function Home() {
  return (
      <>
        <Head>
          <title>For a Good Night, Every Night</title>
          <link rel="icon" href="sheep-example.ico" /> 
        </Head>
        <main style={{ fontFamily: 'Courier, monospace', backgroundColor: '#FFFCF6', height: '100vh', overflow: 'hidden' }} className="flex items-center justify-center">
          <p style={{ color: '#6D48A2', fontSize: '2rem' }}>hello</p>
        </main>
      </>
  )
}