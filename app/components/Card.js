function Card({ href, title, children, isNextLink }) {
  const cardContent = (
    <>
      <h2 className={`mb-3 text-2xl font-semibold`}>
        {title}{' '}
        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
          -&gt;
        </span>
      </h2>
      <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
        {children}
      </p>
    </>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={`group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 text-dark-purple block`}>
        {cardContent}
      </a>
    );
  }

  return (
    <div className={`group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 text-dark-purple ${isNextLink ? 'cursor-pointer' : ''}`}>
      {cardContent}
    </div>
  );
}

export default Card;
