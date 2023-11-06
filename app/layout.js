import { Inter } from 'next/font/google'
import Head from 'next/head'
import Image from 'next/image'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Lune VE | Discover your sleep type',
  description: 'At Lune, we craft science-backed, health-conscious sleep essentials, uniquely tailored to fit your sleep habits.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta charset="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta http-equiv="content-language" content="en"/>

        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description}/>
        <link rel="icon" href="/favicon.ico" sizes="any"/>

        <meta property="og:title" content={metadata.title}/>
        <meta property="og:description" content={metadata.description}/>
        {/* Assuming you have an image you want to display when the site is shared, add the link below */}
        <meta property="og:url" content="https://lune-ve.com"/> 
        <meta property="og:type" content="website"/>
        <meta property="og:image" content="https://lune-ve.com/images/full_card.jpg"/>
        <meta property="og:site_name" content="Lune VE"/>

        <meta name="twitter:card" content="summary"/>
        {/* <meta name="twitter:site" content="@yourTwitterHandle"/> */}
        <meta name="twitter:card" content="summary_large_image"/>
        <meta name="twitter:title" content={metadata.title}/>
        <meta name="twitter:description" content={metadata.description}/>
        <meta name="twitter:image" content="https://lune-ve.com/images/full_card.jpg"/>
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
