import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Lune VE - For a Good Night, Every Night',
  description: 'Everyone deserves a good night sleep. At Lune, we craft science-backed, health-conscious sleep essentials, uniquely tailored to fit your sleep habits.',
  
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
