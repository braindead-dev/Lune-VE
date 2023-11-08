import Image from 'next/image'

export default function PageHeader({ title, heading }) {
    return (
      <header className="w-full py-3 px-12 bg-header-grey flex items-center justify-between shadow-md">
        <div className="flex items-center">
          <Image src="/images/sheep_logo.png" alt="Sheep Logo" width={50} height={50} />
          <h1 className="text-2xl font-recoleta ml-4 text-dark-purple">{title}</h1>
        </div>

        {/* Render the heading text in the center if it is provided */}
        {heading && (
          <h2 className="text-3xl font-recoleta text-dark-purple absolute left-1/2 transform -translate-x-1/2">
            {heading}
          </h2>
        )}

        {/* Placeholder for the right side of the header to keep the title aligned to the left */}
        {heading && <div className="opacity-0">
          <Image src="/images/sheep_logo.png" alt="Sheep Logo" width={50} height={50} />
        </div>}
      </header>
    );
}

