import { Inter } from 'next/font/google'
import Head from 'next/head'
import Image from 'next/image'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Lune VE',
  description: 'At Lune, we craft science-backed, health-conscious sleep essentials, uniquely tailored to fit your sleep habits.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.ico"/>
      <Head>
        {/* Basic meta tags */}
        <meta charset="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta name="description" content={metadata.description}/>
        <title>{metadata.title}</title>

        {/* Open Graph meta tags */}
        <meta property="og:title" content={metadata.title}/>
        <meta property="og:description" content={metadata.description}/>
        {/* Assuming you have an image you want to display when the site is shared, add the link below */}
        <meta property="og:url" content="https://lune-ve.com"/>  {/* Update with your site's URL */}
        <meta property="og:type" content="website"/>

        {/* Twitter Card meta tags */}
        <meta name="twitter:card" content="summary"/>
        {/* If you have a Twitter handle, add it below */}
        {/* <meta name="twitter:site" content="@yourTwitterHandle"/> */}
        <meta name="twitter:title" content={metadata.title}/>
        <meta name="twitter:description" content={metadata.description}/>
        {/* Again, if you have an image for Twitter: */}
        {/* <meta name="twitter:image" content="URL_to_image"/> */}
        <meta name="twitter:image" content="/images/lune_og.jpg"/>
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
