import Link from 'next/link'
import Card from './Card';

export default function GenericCards() {
  return (
    <div className="mb-32 grid text-center z-10 lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-3 lg:text-left">
    <Card href="https://lunesleepsolutions.wixsite.com/lune" title="Shop">
        Explore our official store to discover our newest collection.
    </Card>
    <Link href="/soon">
        <Card isNextLink title="Blog">
        Visit the Lune blog for insights, sleep science, and tailored rest tips.
        </Card>
    </Link>
    <Link href="/socials">
        <Card isNextLink title="Socials">
        Join the Lune family and follow us on social media!
        </Card>
    </Link>
    </div>
  )
}
